export const actions = {
	default: async ({ request }) => {
		const formData = await request.formData();
		const step = formData.get('step');
		const version = formData.get('version');
		const document = `${step}_${version - 1}`;

		return { document };
	}
};
