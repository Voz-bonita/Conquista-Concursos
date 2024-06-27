<script>
	export let steps;
	export let userSelected = steps[0].id;
</script>

<div class="contest-option-grid" role="radiogroup">
	{#each steps as step}
		<label for={step.name} class="card">
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
		border-radius: 10%;
		padding: 1vw;
		background: linear-gradient(145deg, #2085d8, #3230b6);
		cursor: pointer;
		box-shadow: 0 0 1px rgba(0, 0, 0, 1);
		margin-top: 10px;
		margin-bottom: -10px;
		transition: 0.2s;
		&:hover {
			box-shadow: 0px 10px 5px rgba(0, 0, 0, 1);
			margin-top: 0px;
			margin-bottom: 0px;
        }
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
		color: black;
		box-shadow: 0px 10px 5px rgba(0, 0, 0, 1);
		margin-top: 0px;
		margin-bottom: 0px;
	}
	.contest-option-grid {
		display: grid;
		gap: 10px;
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
