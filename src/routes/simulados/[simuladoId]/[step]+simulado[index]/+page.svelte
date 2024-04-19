<script>
    import ObjectiveQuestion from '$lib/components/objective_question.svelte';
    export let data
    const { questionsData } = data
    const questions = questionsData.questions
    let questionIndex = 0;
    const answers = Array.apply(null, Array(questions.length)).map(function () { return "" })
    let currentAnswer = "";
    
    const next_question = () => {
        questionIndex++
        answers[questionIndex] = currentAnswer
        console.log(answers)
        currentAnswer = ""
    }
</script>

<div class="page-body green-theme">
    <ObjectiveQuestion question={questions[questionIndex]} question_index={questionIndex} bind:userSelected={currentAnswer}/>
    <div class="directional-btns-div">
        <button class="next-button clickable" on:click|preventDefault={next_question}>Próxima</button>
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
    .next-button {
        font-size: 1.2vw;
        background: steelblue;
        color: white;
        border-radius: 20px;
        border: 1px solid black;
        padding: 10px 40px 10px 40px;
        float: right;
        margin-bottom: 1vh;
    }
    .directional-btns-div {
        margin-top: 1vh;
        width: 80%;
    }
</style>