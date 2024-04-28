export async function load({ url }) {
	const origin = url.searchParams.get('q');
	if (origin === null) {
		return { origin: '' };
	}
	return { origin };
}
