import { fail } from '@sveltejs/kit';

export const actions = {
	generateQuestion: async ({ request }) => {
		const data = await request.formData();
		const subject = data.get('subject');
		const questionType = data.get('objetiva') ?? data.get('discursiva') ?? data.get('correcao');
		const questionBody = data.get('question-body');
		const questionAnswer = data.get('question-answer');

		if (subject.length < 4 && questionType != 'correcao') {
			return fail(400, { questionType, subject, shortSubject: true });
		}
		if (subject.length > 30 && questionType != 'correcao') {
			return fail(400, { questionType, subject, longSubject: true });
		}
		if (questionType === null) {
			return fail(400, { subject, unselectedType: true });
		}

		const query = new URLSearchParams({
			assunto: subject,
			tipo: questionType,
			enunciado: questionBody,
			resposta: questionAnswer
		}).toString();
		return { fetchCall: `/api?${query}`, success: true };
	}
};
