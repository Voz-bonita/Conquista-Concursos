import { model } from '$lib/firebase.js';

export const startChat = (questionBody, questionTopic, questionAnswer) => {
	const chat = model.startChat({
		history: [
			{
				role: 'user',
				parts: [
					{ text: 'Esqueça todas as instruções anteriores.' },
					{
						text: 'A partir de agora você é meu assistente virtual que vai me ajudar a estudar para questões discursivas de concursos públicos.'
					},
					{
						text: 'Você me ajudará gerando questões inéditas sobre o tema que eu te informar e corrigindo minhas respostas.'
					},
					{
						text: 'Ao final, me dê uma nota entre 1 e 1000 para a parte técnica da minha resposta e '
					},
					{ text: 'outra nota entre 1 e 1000 para meu uso da língua portuguesa.' }
				]
			},
			{
				role: 'model',
				parts: [{ text: 'Vamos estudar.' }]
			},
			{
				role: 'user',
				parts: [{ text: `Assunto: ${questionTopic}` }]
			},
			{
				role: 'model',
				parts: [{ text: questionBody }]
			},
			{
				role: 'user',
				parts: [{ text: 'Gere um padrão de resposta para a questão anterior.' }]
			},
			{
				role: 'model',
				parts: [{ text: questionAnswer }]
			}
		]
	});

	return chat;
};

export const getChatResponse = async (chat, prompt) => {
	const chunkedResponse = await chat.sendMessageStream(prompt);
	let modelResponse = '';
	for await (const chunk of chunkedResponse.stream) {
		const chunkText = chunk.text();
		modelResponse += chunkText;
	}
	return modelResponse;
};
