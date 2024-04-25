export function sanitizeQuestions(questions) {
	return questions.map((question) => {
		const alternatives = question.alternatives.map((alternative) => {
			return sanitizeAlternative(alternative);
		});
		question.alternatives = alternatives;
		return question;
	});
}

function sanitizeAlternative(alternative) {
	let choicePosition = alternative.search(/\([A-E]\)/);
	let textStart = alternative.slice(choicePosition + 3).search(/[a-zA-Z\d]/);
	const index = alternative.slice(choicePosition, choicePosition + 3);
	const text = alternative.slice(choicePosition + 3 + textStart);
	return `${index} ${text}`;
}
