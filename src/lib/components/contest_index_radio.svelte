<script>
	export let contestReplicates = 1;
	export let userSelected = 1;
	const contests = Array.apply(null, Array(contestReplicates)).map(function (_, i) {
		return i + 1;
	});
</script>

<div class="contest-option-grid" role="radiogroup">
	{#each contests as i}
		<label for={i} class="index clickable">
			{#if i == 1}
				<input
					id={i}
					type="radio"
					name="version"
					style="display: none;"
					value={i}
					checked
					bind:group={userSelected}
				/>
			{:else}
				<input
					id={i}
					type="radio"
					name="version"
					style="display: none;"
					value={i}
					bind:group={userSelected}
				/>
			{/if}
			<label for={i} class="contest-option-name">Simulado {i}</label>
		</label>
	{/each}
</div>

<style>
	.contest-option-grid {
		display: grid;
		gap: 10px;
		grid-template-columns: auto auto auto auto auto;
		justify-content: center;
		width: 100%;
		margin: 1vh;
	}

	.index {
		display: flex;
		align-items: center;
		justify-content: center;
		background-color: rgb(220, 220, 220);
		color: black;
		border-radius: 7px;
		border: 2px solid black;
		padding: 1vh;
		font-size: 1.2vw;
		padding: 10px 20px;
	}

	label:has(> input[type='radio']:checked) {
		background: rgb(26, 25, 25);
		color: white;
	}

	@media screen and (orientation: portrait), screen and (max-width: 700px) {
		.contest-option-grid {
			grid-template-columns: auto auto auto;
		}
		.contest-option-name {
			font-size: 2vw;
		}
		.index {
			height: 2vh;
			white-space: pre;
		}
	}
</style>
