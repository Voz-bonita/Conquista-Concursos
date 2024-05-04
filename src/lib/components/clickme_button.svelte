<script>
    export let onClickFunction;
</script>

<button class="clickme" on:click={onClickFunction}><slot></slot></button>

<style>
    :root {
        --bottom-offset: 10px;
        --negative-bottom-offeset: -10px;
        --secondary-color: rgb(255, 191, 73);
    }
    .clickme {
        display: flex;
        align-items: center;
        justify-content: center;
        text-align: center;
        background-color: rgb(21, 21, 21);
        color: var(--secondary-color);
        cursor: pointer;
        border: 2px solid var(--secondary-color);
        border-radius: 7px;
        font-size: 1.2vw;
        animation: pulse 1s linear infinite;
        padding: 10px 20px;

        transition: 0.2s;
        box-shadow: 0px var(--bottom-offset) 5px rgba(0, 0, 0, 1);
        &:hover {
            box-shadow: 0 0 1px rgba(0, 0, 0, 1);
            margin-top: var(--bottom-offset);
            margin-bottom: var(--negative-bottom-offeset);
        }
    }

    @media screen and (orientation: portrait), screen and (max-width: 700px) {
        .clickme {
            font-size: 4vw;
        }
    }
</style>