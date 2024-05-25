import { databaseHandler, databaseStore } from '$lib/stores/databaseStore.js';
import { loadingStore } from '$lib/stores/loadingStore.js';

export async function load({ url }) {
	let col = databaseStore?.contestsCollection;
	if (col === undefined) {
		col = databaseHandler.getCollection('available_contests');
		databaseStore.update((curr) => {
			return { ...curr, constestCollection: col };
		});
	}
	let contestsData = databaseStore?.contestsData;
	if (contestsData === undefined) {
		loadingStore.update(() => {
			return { loading: true };
		});
		contestsData = await databaseHandler.getAllContests(col);
		databaseStore.update((curr) => {
			return { ...curr, contestsData: contestsData };
		});
	}

	loadingStore.update(() => {
		return { loading: false };
	});
	return { contests: contestsData, query: url.searchParams.get('q') };
}
