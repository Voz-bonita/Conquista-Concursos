import { json } from '@sveltejs/kit';
import {
	generateDiscursive,
	generateObjective,
	expectedResponse,
	scoreAnswer
} from '$lib/stores/geminiStore.js';
import { databaseHandler } from '$lib/stores/databaseStore.js';

function checkTextLength(text) {
	if (text != null) {
		return text.length <= 5000 && text.length >= 2450;
	}
	return true;
}

export async function POST({ url }) {
	const apiKey = url.searchParams.get('api-key');
	const questionSubject = url.searchParams.get('assunto');
	const questionType = url.searchParams.get('tipo');
	let questionBody = url.searchParams.get('enunciado');
	let questionAnswer = url.searchParams.get('resposta');
	let userBaselineQuestion = url.searchParams.get('amostra');
	questionBody = questionBody === 'null' ? null : questionBody;
	questionAnswer = questionAnswer === 'null' ? null : questionAnswer;
	userBaselineQuestion = userBaselineQuestion === 'null' ? null : userBaselineQuestion;

	if (!['objetiva', 'discursiva', 'correcao'].includes(questionType)) {
		return json({
			message:
				"O tipo de questão informado não é válido. Os tipos possíveis são 'objetiva', 'discursiva' e 'correcao'"
		});
	}

	if (questionType === 'correcao' && (questionBody === null || questionAnswer === null)) {
		return json({
			message:
				"É necessário incluir 'enunciado' e 'resposta' nos parâmetros da sua requisição para que uma correção seja possível"
		});
	}

	if (
		!checkTextLength(questionBody) ||
		!checkTextLength(questionAnswer) ||
		!checkTextLength(userBaselineQuestion)
	) {
		return json({
			message: 'Todos os textos enviados devem conter entre 2450 e 5000 carácteres'
		});
	}

	try {
		if (questionType === 'correcao' && questionBody != null && questionAnswer != null) {
			const AIPerfectAnswer = await expectedResponse(questionBody);
			const AIScoreToUser = await scoreAnswer(questionBody, AIPerfectAnswer, questionAnswer);
			return json({
				questionBody: questionBody,
				questionAnswer: AIPerfectAnswer,
				questionScore: AIScoreToUser
			});
		} else if (questionType === 'discursiva' && questionSubject != null) {
			let baselineQuestion = userBaselineQuestion;
			if (userBaselineQuestion === null) {
				const baselineQuestionObject = await databaseHandler.getBaselineDiscursive();
				baselineQuestion = baselineQuestionObject.question_body;
			}

			const { newQuestionBody, newQuestionAnswer } = await generateDiscursive(
				baselineQuestion,
				questionSubject
			);

			return json({
				questionBody: newQuestionBody,
				questionAnswer: newQuestionAnswer,
				questionScore: ''
			});
		} else if (questionType === 'objetiva' && questionSubject != null) {
			let baselineQuestion = userBaselineQuestion;
			if (userBaselineQuestion === null) {
				const baselineQuestionObject = await databaseHandler.getBaselineObjective();
				const baselineQuestionBody = baselineQuestionObject.question_body;
				const baselineQuestionAlternatives = baselineQuestionObject.question_alternatives;
				const baselineQuestionAnswer = baselineQuestionObject.question_answer;
				baselineQuestion = `${baselineQuestionBody}\n\n@@@@@\n\n${baselineQuestionAlternatives}\n\n@@@@@\n\nResposta correta:${baselineQuestionAnswer}`;
			}

			const { newQuestionBody, newQuestionAnswer } = await generateObjective(
				baselineQuestion,
				questionSubject
			);
			return json({
				questionBody: newQuestionBody,
				questionAnswer: newQuestionAnswer,
				questionScore: ''
			});
		}
	} catch (error) {
		return json({
			questionBody: 'Ocorreu um erro, tente novamente',
			questionAnswer: 'Ocorreu um erro, tente novamente',
			questionScore: 'Ocorreu um erro, tente novamente'
		});
	}
}
