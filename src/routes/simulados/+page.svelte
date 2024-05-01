<script>
	import { currentContest } from '$lib/stores/databaseStore.js';
	import ContestList from '$lib/components/contest_list.svelte';
	import ContestStepPicking from '$lib/components/contest_step_picking.svelte';
	import Contest from '$lib/components/contest.svelte';
	import { authStore } from '$lib/stores/authStore';
	import { loadingStore } from '$lib/stores/loadingStore';
	import { goto } from '$app/navigation';
	import { browser } from '$app/environment'; 
	import Spinner from '$lib/components/spinner.svelte';
	import ContestDiscursive from '$lib/components/contest_discursive.svelte';

	let userLogged
	authStore.subscribe((current) => {
		userLogged = current.userLogged;
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
			if(!userLogged && !choosenContest.title.includes('test')) {
				goto("/login?q=simulados")
			}
			pageCurrentState = 'contestStepForm';
		}
		if (current.questions != null) {
			questions = current.questions;
			pageCurrentState = 'contestOnGoing';
		}
	});
</script>

{#if $loadingStore.loading}
	<Spinner/>
{:else}
	<div class="green-theme main-div">
		{#if pageCurrentState == 'contestList'}
			<ContestList {contests} />
		{:else if pageCurrentState == 'contestStepForm'}
			<ContestStepPicking contest={choosenContest} />
		{:else if pageCurrentState == 'contestOnGoing'}
			{#if questions.length > 1}
				<Contest {questions} />
			{:else if questions.length == 1}
				<ContestDiscursive {questions}/>
			{/if}
			
		{/if}
	</div>
{/if}


<style>
	.main-div {
		min-height: calc(100vh - 8vh - 8vh);
	}
</style>
