import { writable } from 'svelte/store';
import { auth, db } from '$lib/firebase';
import { collection, getDocs, doc, getDoc, setDoc } from 'firebase/firestore';

export const currentContest = writable({
	index: null,
	questions: null
});

export const databaseStore = writable({
	constestsCollection: null,
	contestsData: null,
	currentContestData: null,
	currentContestCollection: null
});

export const databaseHandler = {
	getAllContests: async (contestsCollection) => {
		const newData = [];
		const allDocs = await getDocs(contestsCollection);
		allDocs.forEach((doc) => {
			const auxData = doc.data();
			auxData['id'] = doc.id;
			newData.push(auxData);
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
		const docReference = doc(db, `contests_questions/${id}`);
		return await getDoc(docReference);
	},
	getAllDocs: async (collectionReference) => {
		return await getDocs(collectionReference);
	},
	saveDiscursiveAnswer: async (contest, userAnswer, modelAnswer) => {
		const docPath = `contest_user_answers/${auth.currentUser.uid}/${contest}/answer`;
		const docReference = doc(db, docPath);
		await setDoc(docReference, { user_answer: userAnswer, model_answer: modelAnswer });
	},
	getDiscursiveAnswer: async (contest) => {
		if (auth.currentUser.uid === null) {
			return {};
		}

		const docPath = `contest_user_answers/${auth.currentUser.uid}/${contest}/answer`;
		const docReference = doc(db, docPath);

		let answer = {};
		await getDoc(docReference)
			.then((snapshot) => {
				answer = snapshot.data();
			})
			.catch(() => {});

		return answer;
	}
};
