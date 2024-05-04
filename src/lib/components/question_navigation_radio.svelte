<script>
	export let questions;
	export let currentQuestionIndex;
</script>

<div class="navigation" role="radiogroup">
	{#each questions as _, i (i)}
		<label for={`Q${i}`} class="indexing-btn clickable">
			<div class="index-div">
				<input
					id={`Q${i}`}
					style="display: none;"
					type="radio"
					value={i}
					bind:group={currentQuestionIndex}
				/>
				<label for={`Q${i}`} class="index">{i + 1}</label>
			</div>
		</label>
	{/each}
</div>

<style>
	.navigation {
		max-width: 80%;
		margin-top: 2vh;
	}
	.index-div {
		display: flex;
		justify-content: center;
	}
	.indexing-btn {
		background-color: whitesmoke;
		color: black;
		margin: 3px;
		width: 0.8em;
		padding: 0.3em 0.5em;
		border-radius: 7px;
		border: 1px solid black;
		display: inline-block;
	}
	label:has(div > input[type='radio']:checked) {
		background: rgb(26, 25, 25);
		color: white;
	}
	.index {
		cursor: pointer;
		font-size: 0.8vw;
	}

	@media screen and (orientation: portrait), screen and (max-width: 700px) {
		.index {
			font-size: 1.8vw;
		}
	}
</style>
