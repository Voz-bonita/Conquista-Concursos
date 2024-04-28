<script>
	import { currentContest } from '$lib/stores/databaseStore.js';
	import ContestList from '$lib/components/contest_list.svelte';
	import ContestStepPicking from '$lib/components/contest_step_picking.svelte';
	import Contest from '$lib/components/contest.svelte';
	import { authStore } from '$lib/stores/authStore';
	import { goto } from '$app/navigation';

	authStore.subscribe((current) => {
		if (!current.userLogged) {
			goto('/login?q=simulados');
		}
	});

	export let data;

	const { contests } = data;

	contests.forEach((contest) => {
		contest.icon = new URL(`../../lib/assets/${contest.icon}`, import.meta.url).href;
	});
	let pageCurrentState = 'contestList';
	let choosenContest;
	let questions;

	const unsubscribe = currentContest.subscribe((current) => {
		if (current.index === null) {
			questions = null;
			choosenContest = null;
			pageCurrentState = 'contestList';
		}
		if (current.index != null) {
			choosenContest = contests[current.index];
			pageCurrentState = 'contestStepForm';
		}
		if (current.questions != null) {
			questions = current.questions;
			pageCurrentState = 'contestOnGoing';
		}
	});
</script>

<div class="green-theme main-div">
	{#if pageCurrentState == 'contestList'}
		<ContestList {contests} />
	{:else if pageCurrentState == 'contestStepForm'}
		<ContestStepPicking contest={choosenContest} />
	{:else if pageCurrentState == 'contestOnGoing'}
		<Contest {questions} />
	{/if}
</div>

<style>
	.main-div {
		min-height: calc(100vh - 8vh - 8vh);
	}
</style>
