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
	if (questionType === 'correcao' && questionBody != null && questionAnswer != null) {
		const AIPerfectAnswer = expectedResponse(questionBody);
		const AIScoreToUser = scoreAnswer(questionBody, AIPerfectAnswer, questionAnswer);
		return json({
			questionBody: questionBody,
			questionAnswer: AIPerfectAnswer,
			questionScore: AIScoreToUser
		});
	} else if (questionType === 'discursiva' && questionSubject != null) {
		const baselineQuestion = await databaseHandler.getBaselineDiscursive();
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
		const baselineQuestionObject = await databaseHandler.getBaselineObjective();
		const baselineQuestionBody = baselineQuestionObject.question_body;
		const baselineQuestionAlternatives = baselineQuestionObject.question_alternatives;
		const baselineQuestionAnswer = baselineQuestionObject.question_answer;
		const baselineQuestion = `${baselineQuestionBody}\n\n@@@@@\n\n${baselineQuestionAlternatives}\n\n@@@@@\n\nResposta correta:${baselineQuestionAnswer}`;

		const newQuestion = await generateObjective(baselineQuestion, questionSubject);
		return json({
			questionBody: newQuestion,
			questionAnswer: '',
			questionScore: ''
		});
	}
	return json({
		content: 'some-content'
	});
}
