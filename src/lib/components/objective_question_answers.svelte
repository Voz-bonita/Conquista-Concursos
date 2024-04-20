<script>
    export let questions;
    export let index;
</script>


<div class="question-frame">
    <p class="question-index">Questão {index + 1}</p>
    <p class="question-body">{questions[index].body}</p>
    <div class="alternatives-group">
        {#each questions[index].alternatives as alternative}
        {#if alternative.slice(1, 2) == questions[index].answer}
            <div class="alternative-container green-theme">
                <p class="alternative-index" for={index}>{alternative.slice(0, 3)}</p>
                <p class="alternative-body" for={index}>{alternative.slice(3)}</p>
            </div>
        {:else if alternative.slice(1, 2) == questions[index].userAnswer}
            <div class="alternative-container wrong-choice">
                <p class="alternative-index" for={index}>{alternative.slice(0, 3)}</p>
                <p class="alternative-body" for={index}>{alternative.slice(3)}</p>
            </div>
        {:else}
            <div class="alternative-container">
                <p class="alternative-index" for={index}>{alternative.slice(0, 3)}</p>
                <p class="alternative-body" for={index}>{alternative.slice(3)}</p>
            </div>
        {/if}
        {/each}
    </div>
    <p class="question-index">Resposta da IA:</p>
    <p class="full-answer">{questions[index].full_answer}</p>
</div>


<style>
    .question-frame {
        display: flex;
        flex-direction: column;
        color: black;
        width: 80%;
        background-color: whitesmoke;
        border: 1px solid black;
        border-radius: 20px;
        padding: 0 2vw 3vh 2vw;
        margin: 5vh 0 1vh 0;
    }
    .question-index {
        font-weight: bold;
        font-size: 1.2vw;
    }
    .question-body {
        font-size: 1.3vw;
    }
    .alternatives-group {
        display: flex;
        flex-direction: column;
    }
    .alternative-container {
        display: flex;
        flex-direction: row;
        padding: 0 1vw 0 1vw;
        border-radius: 20px;
        border: 1px solid black;
        margin: 5px;
    }
    .alternative-index {
        font-size: 1.2vw;
        font-weight: bold;
        cursor: pointer;
    }
    .alternative-body {
        font-size: 1.2vw;
        cursor: pointer;
    }
    .wrong-choice {
        background-color: linear-gradient(90deg, #eb3312, #e4942b);
    }
    .full-answer {
        font-size: 1.3vw;
    }
    
</style>