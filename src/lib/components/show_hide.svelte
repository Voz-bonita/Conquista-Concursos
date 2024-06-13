<script>
    export let title = "";
    export let id;

    let isChecked = true;
    $: symbol = isChecked ? "&#11167;" : "&#11165;";
</script>


<div class="show-hide-container">
    <label for={id} class="show-hide-btn">{title}
        <input id={id} type="checkbox" style="display: none;" bind:checked={isChecked}>
        <span class="symbol">{@html symbol}</span>
    </label>
    <div class="show-hide-content-div"><slot></slot></div>
</div>



<style>
    .show-hide-btn {
        width: 20rem;
        padding: 1rem 1.5rem;
        max-width: 70vw;
        font-size: 1.5rem;
        text-align: center;
        border: 1px solid black;
        background: white;
        display: block;
        border-radius: 1rem;
        cursor: pointer;
        box-shadow: 0rem 0.4rem 5px rgb(53, 84, 187);
        transition: 200ms;
        &:hover {
            margin-top: -3px;
            margin-bottom: 3px;
            box-shadow: 0rem calc(0.4rem + 3px) 5px rgb(53, 84, 187);
            background: rgb(243, 243, 243);
        }
    }

    .show-hide-container {
        margin: 5vh 0vh;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }

    .show-hide-content-div {
        display: flex;
        justify-content: center;
    }

    label:has(input:checked) + .show-hide-content-div {
        display: none;
    }

    .symbol {
        /* font-size: 1.5rem; */
        float: right;
    }
</style>