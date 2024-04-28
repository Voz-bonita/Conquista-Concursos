<script>
	import ContestRadio from '$lib/components/contest_radio.svelte';
	import ContestIndexRadio from '$lib/components/contest_index_radio.svelte';
	import { enhance } from '$app/forms';
	import { databaseHandler, currentContest } from '$lib/stores/databaseStore.js';
	import { stripeHandler } from '$lib/stores/stripeStore.js'

	export let contest;
	export let questionListId;
	export let version;

	function backToListing() {
		currentContest.update(() => {
			return { index: null, questions: null };
		});
	}

	const contestReplicates = 5;
</script>

<form
	class="container"
	method="POST"
	use:enhance={() => {
		return async ({ result }) => {
			const contestDocumentId = result.data.document;
			await databaseHandler.getContestById(contestDocumentId).then((snapshot) => {
				const formData = snapshot.data();
				currentContest.update((current) => {
					return { ...current, questions: formData.questions };
				});
			}).catch((error) => {
				if (error.code === "permission-denied") {
					stripeHandler.checkout(contestDocumentId)
				}
			});
		};
	}}
>
	<p class="contest-general">{contest.short_name} - {contest.full_name}</p>
	<div class="contest-frame">
		<img src={contest.icon} class={contest.icon_style} alt="" width="4%" height="4%" />
		<p class="contest-title">{contest.title}</p>
		<p class="contest-subtitle">{contest.subtitle}</p>
		<ContestRadio steps={contest.steps} bind:userSelected={questionListId} />
		<ContestIndexRadio {contestReplicates} bind:userSelected={version} />
	</div>

	<div class="directional-btns-div">
		<button class="back-button directional-btn clickable" on:click|preventDefault={backToListing}
			>Voltar</button
		>
		<button class="start-button directional-btn clickable">Começar</button>
	</div>
</form>

<style>
	.container {
		width: 100vw;
		min-height: calc(100vh - 8vh - 8vh);
		display: flex;
		flex-direction: column;
		align-items: center;
	}
	.contest-frame {
		background: rgb(241, 241, 241);
		color: black;
		border: 2px solid black;
		border-radius: 7px;
		width: 80%;
		margin-top: 2vh;
		padding-bottom: 2vh;
		padding-top: 2vh;
		display: flex;
		flex-direction: column;
		align-items: center;
	}
	.contest-option-row {
		display: flex;
		flex-direction: row;
		align-items: center;
		justify-content: space-evenly;
		width: 100%;
		margin: 1vh;
	}
	.contest-title {
		font-weight: bold;
		font-size: 1.8vw;
		margin: 6px;
	}
	.contest-general {
		font-weight: bold;
		font-size: 2vw;
		margin: 6px;
		color: rgb(71, 126, 117);
		margin-top: 2vh;
	}
	.contest-subtitle {
		font-size: 1.4vw;
		margin: 6px;
	}
	.start-button {
		background: steelblue;
		color: white;
	}
	.back-button {
		background: lightgray;
	}
	.directional-btn {
		font-size: 1.2vw;
		border: 1px solid black;
		padding: 10px 40px 10px 40px;
		border-radius: 20px;
		margin-left: 1vw;
	}
	.directional-btns-div {
		margin-top: 1vh;
		width: 80%;
		display: flex;
		justify-content: right;
	}
</style>
