import { databaseHandler, databaseStore } from '$lib/stores/databaseStore.js';

export async function load({ params, url }) {
	const id = params.simuladoId;
	let singleContestData;
	await databaseHandler.getContestById('available_contests', id).then((snapshot) => {
		singleContestData = snapshot.data();
		singleContestData['id'] = id;
	});
	databaseStore.update((curr) => {
		return { ...curr, currentContestCollection: singleContestData };
	});

	singleContestData['route'] = url.pathname;
	return { contestData: singleContestData };
}
