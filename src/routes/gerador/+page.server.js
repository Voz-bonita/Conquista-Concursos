import { fail } from '@sveltejs/kit';

function checkTextLength(text) {
	if (text != null) {
		return text.length <= 5000 && text.length >= 2450;
	}
	return true;
}

export const actions = {
	generateQuestion: async ({ request }) => {
		const data = await request.formData();
		const subject = data.get('subject');
		const questionType = data.get('objetiva') ?? data.get('discursiva') ?? data.get('correcao');
		const questionBody = data.get('question-body');
		const questionAnswer = data.get('question-answer');
		const examiningBoard = data.get('cesgranrio') ?? data.get('custom');
		const baselineQuestionBody = data.get('baseline-question-body');

		if (subject.length < 4 && questionType != 'correcao') {
			return fail(400, { questionType, subject, shortSubject: true });
		}
		if (subject.length > 30 && questionType != 'correcao') {
			return fail(400, { questionType, subject, longSubject: true });
		}
		if (
			!checkTextLength(questionBody) ||
			!checkTextLength(questionAnswer) ||
			!checkTextLength(baselineQuestionBody)
		) {
			return fail(400, {
				questionType,
				subject,
				questionBody,
				questionAnswer,
				baselineQuestionBody,
				invalidTextField: true
			});
		}
		if (questionType === null) {
			return fail(400, { subject, unselectedType: true });
		}
		if (
			examiningBoard != 'cesgranrio' &&
			(baselineQuestionBody === null || baselineQuestionBody.length < 300)
		) {
			return fail(400, { subject, unknownBaseline: true });
		}

		const query = new URLSearchParams({
			assunto: subject,
			tipo: questionType,
			enunciado: questionBody,
			resposta: questionAnswer,
			amostra: baselineQuestionBody
		}).toString();
		return { fetchCall: `/api?${query}`, success: true };
	}
};
