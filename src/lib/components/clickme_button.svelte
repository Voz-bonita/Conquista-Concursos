<script>
    export let onClickFunction;
</script>

<button class="clickme" on:click={onClickFunction}><slot></slot></button>

<style>
    .clickme {
        display: flex;
        align-items: center;
        justify-content: center;
        text-align: center;
        background-color: rgb(21, 21, 21);
        color: rgb(255, 191, 73);
        cursor: pointer;
        border: 2px solid rgb(255, 191, 73);
        border-radius: 7px;
        font-size: 1.2vw;
        animation: pulse 1s linear infinite;
        padding: 10px 20px;

        transition: 0.2s;
        &:hover {
            box-shadow: 0 0 0 2px rgb(255, 191, 73);
            transform: scale(1.05);
        }
    }

    @media screen and (orientation: portrait), screen and (max-width: 700px) {
        .clickme {
            font-size: 4vw;
        }
    }
</style>