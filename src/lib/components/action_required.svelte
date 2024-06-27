<script>
    export let actionType = "error";
    let symbol = actionType == "error" ? "&#x1F7AC;": "&check;";
</script>

<div class="action-container {actionType}">
    <span class="action-symbol">{@html symbol}</span>
    <p class="action-text"><slot></slot></p>
</div>

<style>
    .action-container {
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: center;
        width: fit-content;
        margin: 2rem 0rem;
        padding: 0.1rem 1rem;
        border-radius: 0.3rem;
    }

    .success {
        background-color: rgb(120, 187, 58);
        border: 0.1rem solid rgb(79, 143, 19);
    }

    .error {
        background-color: rgb(255, 62, 62);
        border: 0.1rem solid rgb(160, 44, 44);
    }

    .action-symbol {
        color: white;
        font-size: 2rem;
        padding-right: 1rem;
    }

    .action-text {
        color: white;
        font-size: 1rem;
    }
</style>