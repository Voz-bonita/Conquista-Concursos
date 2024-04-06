import { writable } from 'svelte/store';
import { db } from '$lib/firebase';
import { collection, getDocs } from 'firebase/firestore';

export const databaseStore = writable({
	constestsCollection: null,
	contestsData: null,
	currentContestData: null,
	currentContestCollection: null
});

export const databaseHandler = {
	getAllContests: async (contestsCollection) => {
		const newData = {};
		const allDocs = await getDocs(contestsCollection);
		allDocs.forEach((doc) => {
			console.log(doc);
			newData[doc.id] = doc.data();
		});
		databaseStore.update((curr) => {
			return { ...curr, contestsData: newData };
		});
		return newData;
	},

	getCollection: (collectionName) => {
		return collection(db, collectionName);
	},
	getContestById: async (id) => {
		const col = databaseStore.currentContestCollection;
		console.log('aaaaaaaa');
		const temp = await col.get(id).data();
		console.log(temp);
	},

	updateContest: (contestId) => {
		const newData = contestCollection.get(contestId).data();
		databaseStore.update((curr) => {
			return { ...curr, currentContestData: newData };
		});
	}
};
