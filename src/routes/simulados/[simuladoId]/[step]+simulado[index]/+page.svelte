<script>
    import ObjectiveQuestion from '$lib/components/objective_question.svelte';
    import ObjectiveQuestionAnswers from '$lib/components/objective_question_answers.svelte';
    import QuestionNavigationRadio from '$lib/components/question_navigation_radio.svelte';
    import { goto } from '$app/navigation'

    export let data
    const { questionsData } = data
    const questions = questionsData.questions
    let questionIndex = 0;
    const answers = Array.apply(null, Array(questions.length)).map(function () { return "" })
    let currentAnswer = "";
    let score = 0;
    let doingContest = true;
    
    const previous_question = () => {
        currentAnswer = answers[questionIndex-1]
        questionIndex--
    }

    const next_question = () => {
        currentAnswer = answers[questionIndex+1]
        questionIndex++
    }

    const cancel_contest = () => {
        const contest = questionsData.path.split("/")[2];
        goto(`/simulados/${contest}`)
    }

    const submit_results = () => {
        questions.forEach((question, i) => {
            score += Number(question.answer == answers[i])
        });
        doingContest = false
        questionIndex = 0
    }
</script>

<div class="page-body green-theme">
    <QuestionNavigationRadio questions={questions} bind:currentQuestionIndex={questionIndex}/>
    {#if doingContest}
        <ObjectiveQuestion question={questions[questionIndex]} questionIndex={questionIndex} bind:userSelected={answers[questionIndex]}/>
        <div class="directional-btns-div">
            {#if questionIndex == 0}
                <button class="navigattion-btn cancel-btn clickable" on:click|preventDefault={cancel_contest}>Cancelar</button>
            {:else}
                <button class="navigattion-btn back-btn clickable" on:click|preventDefault={previous_question}>Anterior</button>
            {/if}
            {#if questionIndex == questions.length - 1}
                <button class="navigattion-btn end-btn clickable" on:click|preventDefault={submit_results}>Finalizar</button>
            {:else}
                <button class="navigattion-btn next-btn clickable" on:click|preventDefault={next_question}>Próxima</button>
            {/if}
        </div>
    {:else}
        <div class="contest-result"><h1>Você acertou {score}/{questions.length} questões</h1></div>
        <ObjectiveQuestionAnswers questions={questions} index={questionIndex} answers={answers}/>
    {/if}
    
</div>


<style>
    .page-body{
        min-height: calc(100vh - 8vh - 8vh);
        display: flex;
        justify-content: center;
        flex-direction: column;
        align-items: center;
    }
    .navigattion-btn {
        font-size: 1.2vw;
        color: white;
        border-radius: 20px;
        border: 1px solid black;
        padding: 10px 40px 10px 40px;
        margin-left: 1vw;
    }
    .next-btn {
        background-color: steelblue;
    }
    .back-btn {
        background-color: rgb(172, 172, 172);
    }
    .cancel-btn{
        background-color: rgb(226, 9, 9);
    }
    .end-btn {
        background-color: greenyellow;
        color: black;
    }
    .directional-btns-div {
        margin-top: 1vh;
        margin-bottom: 2vh;
        width: 80%;
        display: flex;
        justify-content: flex-end;
    }
    .contest-result {
        width: 80%;
        display: flex;
        justify-content: center;
        background-color: whitesmoke;
        border-radius: 20px;
        margin-top: 2vh;
        border: 1px solid black;
    }
</style>