<script>
    export let index = "";
</script>

<label for={index} class="index clickable">
    <input id={index} type="radio" name="contest_index" style="display: none;"/>
    <label for={index} class="contest-option-name">Simulado {index}</label>
</label>


<style>
    .index {
        display: flex;
        align-items: center;
        justify-content: center;
        background-color: rgb(220, 220, 220);
        color: black;
        border-radius: 7px;
        border: 2px solid black;
        padding: 1vh;
        width: 15%;
        height: 10vh;
        font-size: 1.2vw;
    }

    label:has(>input[type="radio"]:checked) {
        background: rgb(26, 25, 25);
        color: white;
    }

</style>