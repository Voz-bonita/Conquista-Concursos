import { json } from '@sveltejs/kit';
import { generateDiscursive, expectedResponse, scoreAnswer } from '$lib/stores/geminiStore.js';
import { databaseHandler } from '$lib/stores/databaseStore.js';

export async function POST({ url }) {
	const apiKey = url.searchParams.get('api-key');
	const questionTopic = url.searchParams.get('topic');
	const questionType = url.searchParams.get('question-type');
	let questionBody = url.searchParams.get('question-body');
	let questionAnswer = url.searchParams.get('question-answer');
	if (questionType === 'correcao' && questionBody != null && questionAnswer != null) {
		const AIPerfectAnswer = expectedResponse(questionBody);
		const AIScoreToUser = scoreAnswer(questionBody, AIPerfectAnswer, questionAnswer);
		return json({
			questionBody: questionBody,
			questionAnswer: AIPerfectAnswer,
			questionScore: AIScoreToUser
		});
	} else if (questionType === 'discursiva' && questionTopic != null) {
		const baselineQuestion = await databaseHandler.getBaselineDiscursive();
		const baselineQuestionBody = baselineQuestion.question_body;

		const newQuestion = await generateDiscursive(baselineQuestionBody, questionTopic);

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
