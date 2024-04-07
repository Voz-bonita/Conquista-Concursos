<script>
    export let name = "";
    export let numberOfQuestions = 1;
    export let numberOfCards = 4;
    const widthPercent = 0.8/numberOfCards*100;
    const styleWidth = `width: ${widthPercent}%;`;

</script>

<label for={name} class="card clickable" style={styleWidth}>
    <input id={name} type="radio" name="contest_kind" style="display: none;"/>
    <label for={name} class="contest-option-name">{name}</label>
    <label for={name} class="extra-info">{numberOfQuestions} {numberOfQuestions > 1 ? "Questões": "Questão"}</label>
</label>

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
    }
    label:has(>input[type="radio"]:checked) {
        background: linear-gradient(90deg, #5e12eb, #a92be4);
        color: black;
    }
</style>