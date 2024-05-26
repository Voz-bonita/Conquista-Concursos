<script>
	import { currentContest } from '$lib/stores/databaseStore.js';
	import { loadingStore } from '$lib/stores/loadingStore.js';
	import { goto } from '$app/navigation';

	export let name = '';
	export let plan_class = '';

	function resetContest() {
		loadingStore.update(() => {
			return { loading: true };
		})
		currentContest.update(() => {
			return { index: null, questions: null };
		});
		goto("/simulados");
	}
</script>

<div class="card">
	<div class="name {plan_class}">
		<h2 class="plan-name">{name}</h2>
	</div>
	<ul>
		<slot />
	</ul>
	<button class="anchor-contest-page {plan_class}" on:click={resetContest}>Simulados</button>
</div>

<style>
	.card {
		width: 20vw;
		min-height: 30vh;
		border: 1px solid;
		border-color: black;
		border-radius: max(1vw, 10px);
		margin: 20px;
		display: flex;
		flex-direction: column;
	}

	.card:hover {
		box-shadow: 0 0 0 1px black;
	}

	.name {
		width: 95%;
		height: 12%;
		display: flex;
		margin: 2.5%;
		border-radius: max(1vw, 10px);
		align-items: center;
	}
	ul {
		margin: 3%;
		padding: 2px;
	}

	.plan-item {
		border-style: none none solid none;
		border-width: 1px;
		border-color: black;
		margin: 5%;
	}

	.item-name {
		color: rgb(83, 83, 83);
		font-size: 0.8vw;
	}

	.item-value {
		font-size: 0.9vw;
	}
	.plan-name {
		font-weight: bold;
		font-size: 1vw;
		margin: 4%;
	}

	.anchor-contest-page {
		cursor: pointer;
		margin: auto auto 0px auto;
		text-decoration: none;
		text-align: center;
		font-size: 1vw;
		width: 70%;
		border-radius: 20px;
		margin-bottom: 4%;
		padding: 2% 0%;
		&:hover {
			box-shadow: 0 0 0 1px black;
		}
	}


	@media screen and (orientation: portrait), screen and (max-width: 700px) {
		.card {
			width: 70vw;
			min-height: 60vh;
		}

		.item-name {
			font-size: 3.5vw;
		}

		.item-value {
			font-size: 4vw;
		}

		.plan-name {
			font-weight: bold;
			font-size: 4.5vw;
			margin: 4%;
		}

		.anchor-contest-page {
			font-size: 4vw;
		}
	}
</style>
