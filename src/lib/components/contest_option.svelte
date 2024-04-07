<script>
    export let name = "";
    export let numberOfQuestions = 0;
</script>

<div class="card purple-theme clickable">
    <p class="contest-option-name">{name}</p>
    {#if numberOfQuestions}
        <p class="extra-info">{numberOfQuestions} Questões</p>
    {/if}
</div>

<style>
    .card {
        /* display: flex; */
        flex-direction: column;
        /* align-items: center; */
        /* justify-content: center; */
        color: black;
        border: 2px solid black;
        border-radius: 7px;
        padding: 1vw;
    }

    .card:hover {
        box-shadow: 1px black;
    }

    .contest-option-name {
        font-size: 1vw;
        font-weight: bold;
    }
</style>