<script>
    export let index = "";
    export let checked = false;
    let btnClass = "index clickable";
    if (checked) {btnClass = btnClass + " checked"}
</script>

<button class={btnClass}>Simulado {index}</button>

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

    .checked {
        background-color: steelblue;
        color: white;
    }

</style>