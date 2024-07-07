<script>
	import ClickmeButton from '../lib/components/clickme_button.svelte';
	import { goto } from '$app/navigation'
	import FeatureList from '$lib/components/feature_list.svelte';
	import PricingList from '$lib/components/pricing_list.svelte';
	import Spinner from '$lib/components/spinner.svelte';
	import { loadingStore } from '$lib/stores/loadingStore.js';
	import study_image from '$lib/assets/study.jpg';
	
	
	function freeContest() {
		loadingStore.update(() => {
			return {loading: true}
		})
		goto("/simulados?q=free")
	}

	let isLoading = false;
	loadingStore.subscribe((curr) => {
		isLoading = curr.loading;
	})
</script>

{#if isLoading}
	<Spinner/>
{:else}
	<div class="feature-display">
		<div class="green-theme feature-body">
			<FeatureList />
			<div class="free-test">
				<ClickmeButton onClickFunction={freeContest}>Teste Gratuitamente</ClickmeButton>
			</div>	
		</div>
		<div class="invite">
			<div class="invite-content">
				<h1>Gere questões de todos os formatos e bancas</h1>
				<h1>✅Discursivas ✅Objetivas ✅Correções</h1>
				<a class="invite-btn" href="/gerador">Teste já</a>
			</div>
		</div>
		<PricingList />
	</div>
{/if}


<style>
	.feature-display {
		display: flex;
		flex-direction: column;
	}
	.feature-body {
		padding-top: 5vh;
		padding-bottom: 2vh;
		width: 100%;
	}
	.free-test {
		display: flex;
		align-items: center;
		justify-content: center;
		margin-bottom: 20px;
		margin-top: 20px;
	}
	.invite {
		background-image: url("../lib/assets/study.jpg");
		background-size: cover;
		background-position: center;
		display: flex;
		justify-content: center;
		align-items: center;
		height: 30rem;
	}

	.invite-content {
		max-height: 30rem;
		display: flex;
		justify-content: center;
		align-items: center;
		flex-direction: column;
		gap: 1rem;
		padding: 2rem 2rem 3rem 2rem;
		backdrop-filter: blur(30px);
		box-shadow: 0 0.3px 0.7px rgba(0, 0, 0, 0.126),
		0 0.9px 1.7px rgba(0, 0, 0, 0.179),
		0 1.8px 3.5px rgba(0, 0, 0, 0.224),
		0 3.7px 7.3px rgba(0, 0, 0, 0.277),
		0 10px 20px rgba(0, 0, 0, 0.4);
		transition: 0.5s ease;
		&:hover {
			box-shadow: 0 0.7px 1px rgba(0, 0, 0, 0.157),
				0 1.7px 2.6px rgba(0, 0, 0, 0.224),
				0 3.5px 5.3px rgba(0, 0, 0, 0.28),
				0 7.3px 11px rgba(0, 0, 0, 0.346),
				0 20px 30px rgba(0, 0, 0, 0.5);
			}
	}

	.invite-btn {
		text-decoration: none;
		font-size: 2rem;
		border-radius: 0.3rem;
		background-color: black;
		color: orange;
		box-shadow: 0 0.5rem 0.5rem black;
		padding: 0.3rem 2rem;
		margin-top: 0.3rem;
		transition: 200ms;
		cursor: pointer;
		border: 1px solid orange;
		&:hover {
			box-shadow: 0 0.6rem 0.6rem black;
			margin-top: 0.2rem;
			margin-bottom: 0.1rem;
		}
	}

	@media screen and (max-width: 600px) {
		.invite {
			height: 50rem;
		}
	}
</style>
