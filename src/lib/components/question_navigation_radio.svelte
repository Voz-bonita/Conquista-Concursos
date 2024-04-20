<script>
    export let questions;
    export let currentQuestionIndex;
</script>

<div class="navigation" role="radiogroup">
    {#each questions as question, i (i)}
        <label for={`Q${i}`} class="indexing-btn clickable">
            <input id={`Q${i}`} style="display: none;" type="radio" value={i} bind:group={currentQuestionIndex}>
            <label for={`Q${i}`} class="index">{i + 1}</label>
        </label>
    {/each}
</div>

<style>
    .navigation {
        max-width: 80%;
        margin-top: 2vh;
    }
    .indexing-btn {
        background-color: whitesmoke;
        color: black;
        margin: 3px;
        text-align: center;
        display: flex;
        align-items: center;
        justify-content: center;
        padding: 3px;
        border-radius: 7px;
        border: 1px solid black;
        min-width: 1.6vw;
        max-height: 3vh;
        display: inline-block;
    }
    label:has(>input[type="radio"]:checked) {
        background: rgb(26, 25, 25);
        color: white;
    }
    .index {
        cursor: pointer;
        font-size: 0.8vw;
        
    }
</style>