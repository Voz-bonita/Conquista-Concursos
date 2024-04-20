<script>
    import ObjectiveQuestion from '$lib/components/objective_question.svelte';
    import { goto } from '$app/navigation'

    export let data
    const { questionsData } = data
    const questions = questionsData.questions
    let questionIndex = 0;
    const answers = Array.apply(null, Array(questions.length)).map(function () { return "" })
    let currentAnswer = "";
    
    const previous_question = () => {
        answers[questionIndex] = currentAnswer
        currentAnswer = answers[questionIndex-1]
        questionIndex--
    }

    const next_question = () => {
        answers[questionIndex] = currentAnswer
        currentAnswer = answers[questionIndex+1]
        questionIndex++
    }

    const cancel_contest = () => {
        const contest = questionsData.path.split("/")[2];
        goto(`/simulados/${contest}`)
    }

    const submit_results = () => {
        
    }
</script>

<div class="page-body green-theme">
    <ObjectiveQuestion question={questions[questionIndex]} question_index={questionIndex} bind:userSelected={currentAnswer}/>
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
</style>