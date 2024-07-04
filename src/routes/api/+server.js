import { json } from '@sveltejs/kit';
import {
	generateDiscursive,
	generateObjective,
	expectedResponse,
	scoreAnswer
} from '$lib/stores/geminiStore.js';
import { databaseHandler } from '$lib/stores/databaseStore.js';

export async function POST({ url }) {
	const apiKey = url.searchParams.get('api-key');
	const questionSubject = url.searchParams.get('assunto');
	const questionType = url.searchParams.get('tipo');
	let questionBody = url.searchParams.get('enunciado');
	let questionAnswer = url.searchParams.get('resposta');
	const userBaselineQuestion = url.searchParams.get('amostra');

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

	if (questionType === 'correcao' && questionBody != null && questionAnswer != null) {
		const AIPerfectAnswer = await expectedResponse(questionBody);
		const AIScoreToUser = await scoreAnswer(questionBody, AIPerfectAnswer, questionAnswer);
		return json({
			questionBody: questionBody,
			questionAnswer: AIPerfectAnswer,
			questionScore: AIScoreToUser
		});
	} else if (questionType === 'discursiva' && questionSubject != null) {
		const baselineQuestion =
			userBaselineQuestion ?? (await databaseHandler.getBaselineDiscursive());
		const baselineQuestionBody = baselineQuestion.question_body;

		const { newQuestionBody, newQuestionAnswer } = await generateDiscursive(
			baselineQuestionBody,
			questionSubject
		);

		return json({
			questionBody: newQuestionBody,
			questionAnswer: newQuestionAnswer,
			questionScore: ''
		});
	} else if (questionType === 'objetiva' && questionSubject != null) {
		const baselineQuestionObject =
			userBaselineQuestion ?? (await databaseHandler.getBaselineObjective());
		const baselineQuestionBody = baselineQuestionObject.question_body;
		const baselineQuestionAlternatives = baselineQuestionObject.question_alternatives;
		const baselineQuestionAnswer = baselineQuestionObject.question_answer;
		const baselineQuestion = `${baselineQuestionBody}\n\n@@@@@\n\n${baselineQuestionAlternatives}\n\n@@@@@\n\nResposta correta:${baselineQuestionAnswer}`;

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
	return json({
		content: 'some-content'
	});
}
