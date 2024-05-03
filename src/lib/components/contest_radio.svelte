<script>
	export let steps;
	export let userSelected = steps[0].id;
	const widthPercent = Math.min((0.8 / steps.length) * 100, 20);
	const styleWidth = `width: 16rem;`;
	console.log(steps)
</script>

<div class="contest-option-grid" role="radiogroup">
	{#each steps as step}
		<label for={step.name} class="card clickable">
			<input
				id={step.name}
				type="radio"
				name="step"
				style="display: none;"
				value={step.id}
				bind:group={userSelected}
			/>
			{#if step.question_count > 1}
				<label for={step.name} class="contest-option-name">(A) -----------------------</label>
				<label for={step.name} class="contest-option-name">(B) -----------------------</label>
				<label for={step.name} class="contest-option-name">(C) -----------------------</label>
				<label for={step.name} class="contest-option-name">(D) -----------------------</label>
				<label for={step.name} class="contest-option-name">(E) -----------------------</label>
			{:else}
				<label for={step.name} class="contest-option-name">Contexto: ------------------</label>
				<label for={step.name} class="contest-option-name">Problema: ------------------</label>
				<label for={step.name} class="contest-option-name">Itens/Tarefa:  ---------------</label>
				<label for={step.name} class="contest-option-name">Padrão de resposta:  ---------</label>
				<label for={step.name} class="contest-option-name">Observações: ---------------</label>
			{/if}
			<label for={step.name} class="contest-option-name">{step.name}</label>
			<label for={step.name} class="extra-info"
				>{step.question_count} {step.question_count > 1 ? 'Questões' : 'Questão'}</label
			>
		</label>
	{/each}
</div>

<style>
	.card {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		color: black;
		border: 2px solid black;
		border-radius: 7px;
		padding: 1vw;
		background-color: rgb(220, 220, 220);
	}

	.card:hover {
		box-shadow: 1px black;
	}

	.contest-option-name {
		font-size: 1vw;
		font-weight: bold;
		cursor: pointer;
		white-space: pre;
	}
	.extra-info {
		font-size: 0.9vw;
		cursor: pointer;
	}
	label:has(> input[type='radio']:checked) {
		background: linear-gradient(90deg, #5e12eb, #a92be4);
		color: black;
	}
	.contest-option-grid {
		display: grid;
		grid-gap: 10px;
		grid-template-columns: auto auto auto auto;
		justify-content: center;
		width: 100%;
		margin: 1vh;
	}

	@media screen and (orientation: portrait), screen and (max-width: 700px) {
		.contest-option-grid {
			grid-template-columns: auto auto;
		}
		.contest-option-name {
			font-size: 2vw;
		}

		.extra-info {
			font-size: 1.8vw;
		}
	}
</style>
