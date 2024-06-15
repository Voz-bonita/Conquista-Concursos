<script>
	import pix from '$lib/assets/pix.svg';

	import ContestRadio from '$lib/components/contest_radio.svelte';
	import ContestIndexRadio from '$lib/components/contest_index_radio.svelte';
	import { enhance } from '$app/forms';
	import { databaseHandler, currentContest } from '$lib/stores/databaseStore.js';
	import { stripeHandler } from '$lib/stores/stripeStore.js';
	import { loadingStore } from '$lib/stores/loadingStore';

	export let contest;
	export let questionListId;
	export let step = "";

	function backToListing() {
		currentContest.update(() => {
			return { index: null, questions: null };
		});
	}

	const contestIsFree = contest.title.includes("test")
	const contestReplicates = contestIsFree ? 1 : 5;
</script>

<form
	class="container"
	method="POST"
	use:enhance={() => {
		loadingStore.update(() => {
			return { loading: true }
		})
		return async ({ result }) => {
			step = result.data.document;
			await databaseHandler
				.getContestById(step)
				.then((snapshot) => {
					const formData = snapshot.data();
					currentContest.update((current) => {
						return { ...current, questions: formData.questions };
					});
					loadingStore.update(() => {
						return { loading: false }
					})
				})
				.catch((error) => {
					if (error.code === 'permission-denied') {
						stripeHandler.checkout(step);
					}
				});
		};
	}}
>
	<p class="contest-general">{contest.short_name} - {contest.full_name}</p>
	<div class="contest-frame">
		<img src={contest.icon} class="contest-icon {contest.icon_style}" alt="" />
		<p class="contest-title">{contest.title}</p>
		<p class="contest-subtitle">{contest.subtitle}</p>
		<ContestRadio steps={contest.steps} bind:userSelected={questionListId} />
		<!-- <ContestIndexRadio {contestReplicates} bind:userSelected={version} /> -->
	</div>

	<!-- {#if !contestIsFree}
		<div class="pix-warning">
			<img src={pix} alt="" class="pix-icon">
			<p>Deseja pagar por Pix? Entre em contato por WhatsApp com <a
				href="https://api.whatsapp.com/send/?phone=5561982851618&text=Ol%C3%A1!%20Eu%20gostaria%20de%20comprar%20um%20simulado%20do%20Conquista%20Concursos.%20Pode%20me%20ajudar?&type=phone_number&app_absent=0"
				target="_blank"
				rel="noopener noreferrer">(61) 9 8285-1618</a
			></p>
		</div>
		<div class="support-warning">
			<p>Suporte por WhatsApp somente das 19h às 22h (Segunda a Sexta)</p>
			<p>Suporte por WhatsApp somente das 9h às 23h (Sábados, Domingos e Feriados)</p>
		</div>
	{/if} -->
	
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
		max-width: 99vw;
	}
	.contest-frame {
		background: rgb(241, 241, 241);
		color: black;
		border: 2px solid black;
		border-radius: 7px;
		width: 80%;
		margin-top: 2vh;
		padding-bottom: 4vh;
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
		max-width: 70%;
		font-size: 1.4vw;
		margin: 6px;
		text-align: center;
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
		margin-bottom: 2vh;
	}
	.pix-warning {
		background: whitesmoke;
		border-radius: 20px;
		border: 1px solid black;
		font-size: 0.8vw;
		padding: 0px 10px 0px 10px;
		margin-top: 1vh;
		display: flex;
		align-items: center;
		justify-content: center;
		max-width: 70%;
		flex-direction: row;
	}

	.support-warning {
		background: whitesmoke;
		border-radius: 20px;
		border: 1px solid black;
		font-size: 0.8vw;
		padding: 0px 10px 0px 10px;
		margin-top: 1vh;
		max-width: 50%;
		
	}

	.pix-icon {
		filter: invert(66%) sepia(53%) saturate(385%) hue-rotate(125deg) brightness(86%) contrast(91%);
		margin-right: 10px;
		height: 70%;
		padding: 10px;
		width: 5%;
	}
	.contest-icon {
		width: 3%;
		height: 3%;
	}

	@media screen and (orientation: portrait), screen and (max-width: 700px) {
		.pix-warning {
			font-size: 2.2vw;
		}
		.directional-btn {
			font-size: 3vw;
		}
		.contest-title {
			font-size: 4vw;
		}
		.contest-subtitle {
			font-size: 3.5vw;
		}
		.contest-icon {
			width: 10%;
			height: 10%;
		}
		.contest-general {
			font-size: 3vw;
		}

	}
</style>
