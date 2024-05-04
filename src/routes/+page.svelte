<script>
	import ClickmeButton from '../lib/components/clickme_button.svelte';
	import { goto } from '$app/navigation'
	import FeatureList from '$lib/components/feature_list.svelte';
	import PricingList from '$lib/components/pricing_list.svelte';
	PricingList

	function freeContest() {
		goto("/simulados?q=free")
	}
</script>

<div class="feature-display">
	<div class="green-theme feature-body">
		<FeatureList />
		<div class="free-test">
			<ClickmeButton onClickFunction={freeContest}>Teste Gratuitamente</ClickmeButton>
		</div>	
	</div>
	<PricingList />
</div>

<style>
	.feature-display {
		display: flex;
		flex-direction: column;
	}
	.feature-body {
		padding-top: 5vh;
		padding-bottom: 2vh;
	}
	.free-test {
		display: flex;
		align-items: center;
		justify-content: center;
		margin-bottom: 20px;
		margin-top: 20px;
	}
</style>
