<script>
	import { currentContest } from '$lib/stores/databaseStore.js'
	import ContestList from '$lib/components/contest_list.svelte';
	import ContestStepPicking from '$lib/components/contest_step_picking.svelte';
	export let data;
	const { contests } = data;
	
	contests.forEach((contest) => {
		contest.icon = new URL(`../../lib/assets/${contest.icon}`, import.meta.url).href
	});
	let pageCurrentState = "contestList";
	let choosenContest;

	const unsubscribe = currentContest.subscribe((current) => {
		if (current.index != null) {
			choosenContest = contests[current.index];
			pageCurrentState = "contestStepForm"
		}
	})
	
</script>

<div class="green-theme main-div">
	{#if pageCurrentState == "contestList"}
		<ContestList contests={contests} choosenContest={choosenContest}/>
	{:else if pageCurrentState == "contestStepForm"}
		<ContestStepPicking contest={choosenContest}/>
	{/if}
</div>


<style>
	.main-div {
		min-height: calc(100vh - 8vh - 8vh)
	}
</style>
