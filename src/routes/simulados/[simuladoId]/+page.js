import { databaseHandler, databaseStore } from '$lib/stores/databaseStore.js';

export async function load({ params }) {
	const id = params.simuladoId;
	let singleContestData;
	await databaseHandler.getContestById('available_contests', id).then((snapshot) => {
		singleContestData = snapshot.data();
		singleContestData['id'] = id;
	});
	databaseStore.update((curr) => {
		return { ...curr, currentContestCollection: singleContestData };
	});
	return { contestData: singleContestData };
}
