import { databaseHandler, databaseStore } from '$lib/stores/databaseStore.js';

export async function load() {
	let col = databaseStore?.contestsCollection;
	if (col === undefined) {
		col = databaseHandler.getCollection('available_contests');
		databaseStore.update((curr) => {
			return { ...curr, constestCollection: col };
		});
	}
	let contestsData = databaseStore?.contestsData;
	if (contestsData === undefined) {
		contestsData = await databaseHandler.getAllContests(col);
		databaseStore.update((curr) => {
			return { ...curr, contestsData: contestsData };
		});
	}

	return { contestsData };
}
