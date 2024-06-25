import { fail } from '@sveltejs/kit';

export const actions = {
	generateQuestion: async ({ request }) => {
		const data = await request.formData();
		const subject = data.get('subject');
		const questionType = data.get('objetiva') ?? data.get('discursiva') ?? data.get('correcao');

		if (!subject && questionType != 'correcao') {
			return fail(400, { questionType, subject, fillEveryField: true });
		}
		const query = new URLSearchParams({ assunto: subject, tipo: questionType }).toString();
		return { fetchCall: `/api?${query}`, success: true };
	}
};
