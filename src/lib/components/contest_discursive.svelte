<script>
	import ObjectiveQuestionAnswers from '$lib/components/objective_question_answers.svelte';
	import { currentContest } from '$lib/stores/databaseStore.js';

	export let questions;

    let answer = "";
    let questionIndex = 0;
    const answers = [answer]

	const cancel_contest = () => {
		currentContest.update((current) => {
			return { index: current.index, questions: null };
		});
	};
</script>

<div class="page-body">
    <ObjectiveQuestionAnswers {questions} index={questionIndex} {answers} />
    <div class="directional-btns-div">
        <button
            class="navigattion-btn cancel-btn clickable"
            on:click|preventDefault={cancel_contest}>Voltar</button
        >
    </div>
</div>

<style>
	.page-body {
		min-height: calc(100vh - 8vh - 8vh);
		display: flex;
		justify-content: center;
		flex-direction: column;
		align-items: center;
	}
	.navigattion-btn {
		font-size: 1.2vw;
		background-color: bisque;
		color: black;
		border-radius: 20px;
		border: 1px solid black;
		padding: 10px 40px 10px 40px;
		margin-left: 1vw;
	}

	.directional-btns-div {
		margin-top: 1vh;
		margin-bottom: 2vh;
		width: 80%;
		display: flex;
		justify-content: flex-end;
	}

</style>
