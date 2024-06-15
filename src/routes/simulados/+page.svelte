<script>
	import { currentContest } from '$lib/stores/databaseStore.js';
	import ContestList from '$lib/components/contest_list.svelte';
	import ContestStepPicking from '$lib/components/contest_step_picking.svelte';
	import Contest from '$lib/components/contest.svelte';
	import { authStore } from '$lib/stores/authStore';
	import { loadingStore } from '$lib/stores/loadingStore';
	import { goto } from '$app/navigation';
	import Spinner from '$lib/components/spinner.svelte';
	import DiscursiveQuestion from '$lib/components/discursive_question.svelte';

	let userLogged
	authStore.subscribe((current) => {
		userLogged = current.userLogged;
	});

	export let data;

	const { contests, query } = data;

	contests.forEach((contest) => {
		contest.icon = new URL(`../../lib/assets/${contest.icon}`, import.meta.url).href;
	});
	let pageCurrentState = 'contestList';
	let choosenContest;
	let questions;

	if(query !== null && query === 'free') {
		currentContest.update(() => {
			return {index: 0, questions: null}
		})
	} 
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
	let choosenStep = ""
</script>

{#if $loadingStore.loading}
	<Spinner/>
{/if}
<div class="green-theme main-div" style="display: {$loadingStore.loading ? 'none' : 'block'};">
	{#if pageCurrentState == 'contestList'}
		<ContestList {contests} />
	{:else if pageCurrentState == 'contestStepForm'}
		<ContestStepPicking contest={choosenContest} bind:step={choosenStep}/>
	{:else if pageCurrentState == 'contestOnGoing'}
		{#if questions.length > 1}
			<Contest {questions} />
		{:else if questions.length == 1}
			<DiscursiveQuestion question={questions[0]} contest={choosenStep}/>
		{/if}
	{/if}
</div>


<style>
	.main-div {
		min-height: calc(100vh - 8vh - 8vh);
	}
</style>
