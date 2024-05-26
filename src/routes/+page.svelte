<script>
	import ClickmeButton from '../lib/components/clickme_button.svelte';
	import { goto } from '$app/navigation'
	import FeatureList from '$lib/components/feature_list.svelte';
	import PricingList from '$lib/components/pricing_list.svelte';
	import Spinner from '$lib/components/spinner.svelte';
	import { loadingStore } from '$lib/stores/loadingStore.js';
	
	
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
</style>
