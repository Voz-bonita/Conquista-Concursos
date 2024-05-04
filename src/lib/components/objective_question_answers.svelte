<script>
	export let questions;
	export let index;
	export let answers;
	$: discursive_question = questions.length == 1 ? 'discursive-question-answer': ''
</script>

<div class="question-frame">
	<p class="question-index">Questão {index + 1}</p>
	<span class="question-body">{@html questions[index].body}</span>
	<div class="alternatives-group">
		{#each questions[index].alternatives as alternative}
			<div
				class="alternative-container {alternative.slice(1, 2) == questions[index].answer
					? 'green-theme'
					: alternative.slice(1, 2) == answers[index]
						? 'wrong-choice'
						: ''}"
			>
				<p class="alternative" for={index}>
					<strong>{alternative.slice(0, 3)}</strong>
					{alternative.slice(3)}
				</p>
			</div>
		{/each}
	</div>
	<p class="question-index {discursive_question}">Resposta da IA:</p>
	<span class="full-answer">{@html questions[index].full_answer}</span>
</div>

<style>
	.question-frame {
		display: flex;
		flex-direction: column;
		color: black;
		width: 80%;
		background-color: whitesmoke;
		border: 1px solid black;
		border-radius: 20px;
		padding: 1em 1.5em;
		margin: 5vh 0 1vh 0;
	}
	.question-index {
		font-weight: bold;
		font-size: 1.2vw;
	}
	.question-body {
		font-size: 1.3vw;
		white-space: pre-line;
	}
	.alternatives-group {
		display: flex;
		flex-direction: column;
	}
	.alternative-container {
		display: flex;
		flex-direction: row;
		padding: 0 1vw;
		border-radius: 20px;
		border: 1px solid black;
		margin: 5px;
	}
	.alternative {
		font-size: 1.2vw;
		cursor: pointer;
	}
	.wrong-choice {
		background: linear-gradient(90deg, #eb3312, #e4942b);
	}
	.full-answer {
		font-size: 1.3vw;
		white-space: pre-line;
	}
	.discursive-question-answer {
		border-top: 5px dashed black;
		padding-top: 2vh;
	}
	@media screen and (orientation: portrait), screen and (max-width: 700px) {
		.alternative-container {
			line-height: 0.8em;
		}
		.question-index {
			font-size: 3vw;
		}
		.question-body {
			font-size: 3vw;
		}
		.alternative {
			font-size: 2.5vw;
		}
		.full-answer {
		font-size: 3vw;
	}
	}
</style>
