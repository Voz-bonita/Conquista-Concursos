<script>
    export let question;
    export let question_index;
    export let userSelected = "";
</script>

<div class="question-frame">
    <p class="question-index">Questão {question_index + 1}</p>
    <p class="question-body">{question.body}</p>
    <div class="radio-group" role="radiogroup">
    {#each question.alternatives as alternative, i (i)}
        <label for={i} class="alternative-frame">
            <input type="radio" id={i} style="display: none;" value={alternative.slice(1, 2)} bind:group={userSelected}>
            <label class="alternative-index" for={i}>{alternative.slice(0, 3)}</label>
            <label class="alternative-body" for={i}>{alternative.slice(3)}</label>
        </label>
    {/each}
    </div>
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
        font-size: 1.5vw;
    }
    .question-body {
        font-size: 1.5vw;
    }
    .alternative-frame {
        cursor: pointer;
        padding: 0 1vw 0 1vw;
        border-radius: 20px;
        border: 1px solid black;
        margin: 5px;
    }
    .alternative-index {
        font-size: 1.5vw;
        font-weight: bold;
        cursor: pointer;
    }
    .alternative-body {
        font-size: 1.5vw;
        cursor: pointer;
    }
    label:has(>input[type="radio"]:checked) {
        background: linear-gradient(90deg, #5e12eb, #a92be4);
        color: black;
    }
    .radio-group {
        display: flex;
        flex-direction: column;
    }
</style>