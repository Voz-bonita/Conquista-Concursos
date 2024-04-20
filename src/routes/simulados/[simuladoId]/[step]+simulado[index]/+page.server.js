import { databaseHandler } from '$lib/stores/databaseStore.js';

export async function load({ params, url }) {
	const step = params.step;
	const index = params.index;
	const collectionName = `${step}${Number(index) - 1}`;
	const collectionReference = databaseHandler.getCollection(collectionName);
	const questionDocs = await databaseHandler.getAllDocs(collectionReference);
	const questions = [];
	questionDocs.forEach((doc) => {
		questions.push(doc.data());
	});

	return {
		questionsData: {
			questions: questions,
			step: step,
			index: index,
			path: url.pathname
		}
	};
}
