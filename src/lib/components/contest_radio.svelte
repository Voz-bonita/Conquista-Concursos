<script>
    export let steps;
    export let userSelected = steps[0].id
    const widthPercent = 0.8/steps.length*100;
    const styleWidth = `width: ${widthPercent}%;`;
</script>

<div class="contest-option-row" role="radiogroup">
    {#each steps as step}
        <label for={step.name} class="card clickable" style={styleWidth}>
            <input id={step.name} type="radio" name="contest_kind" style="display: none;" value={step.id} bind:group={userSelected}/>
            <label for={step.name} class="contest-option-name">{step.name}</label>
            <label for={step.name} class="extra-info">{step.question_count} {step.question_count > 1 ? "Questões": "Questão"}</label>
        </label>
    {/each}
</div>


<style>
    .card {
        display: flex;
        flex-direction: column;
        /* align-items: center; */
        justify-content: center;
        color: black;
        border: 2px solid black;
        border-radius: 7px;
        padding: 1vw;
        height: 10vh;
        background-color: rgb(220, 220, 220);
    }

    .card:hover {
        box-shadow: 1px black;
    }

    .contest-option-name {
        font-size: 1vw;
        font-weight: bold;
        cursor: pointer;
    }
    .extra-info {
        font-size: 0.9vw;
        cursor: pointer;
    }
    label:has(>input[type="radio"]:checked) {
        background: linear-gradient(90deg, #5e12eb, #a92be4);
        color: black;
    }
    .contest-option-row {
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: space-evenly;
        width: 100%;
        margin: 1vh;
    }
</style>