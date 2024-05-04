<script>
	export let question;
	export let questionIndex;
	export let userSelected = '';
</script>

<div class="question-frame">
	<p class="question-index">Questão {questionIndex + 1}</p>
	<span class="question-body">{@html question.body}</span>
	<div class="radio-group" role="radiogroup">
		{#each question.alternatives as alternative, i (i)}
			<label for={i} class="alternative-frame">
				<input
					type="radio"
					id={i}
					style="display: none;"
					value={alternative.slice(1, 2)}
					bind:group={userSelected}
				/>
				<label class="alternative" for={i}><strong>{alternative.slice(0, 3)}</strong> {alternative.slice(3)}</label>
			</label>
		{/each}
	</div>
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
		padding: 0 2vw 3vh 2vw;
		margin: 5vh 0 1vh 0;
	}
	.question-index {
		font-weight: bold;
		font-size: 1.5vw;
	}
	.question-body {
		font-size: 1.5vw;
		white-space: pre-line;
	}
	.alternative-frame {
		cursor: pointer;
		padding: 1em 1em;
		border-radius: 20px;
		border: 1px solid black;
		margin: 5px;
		box-shadow: 0 2px 5px rgba(0, 0, 0, 1);
		line-height: 1.5em;
		display: flex;
		align-items: center;
		
		&:hover {
			box-shadow: 0 2px 5px rgba(0, 0, 0, 0.3);
			
		}
	}
	.alternative {
		font-size: 1.5vw;
		cursor: pointer;
	}
	label:has(> input[type='radio']:checked) {
		background: linear-gradient(90deg, #5e12eb, #a92be4);
		color: black;
	}
	.radio-group {
		display: grid;
		grid-auto-rows: 1fr;
	}

	@media screen and (orientation: portrait), screen and (max-width: 700px) {
		.alternative-frame {
			line-height: 0.8em;
		}
		.question-index {
			font-size: 2.5vw;
		}
		.question-body {
			font-size: 3vw;
		}
		.alternative {
			font-size: 2.5vw;
		}
	}
</style>
