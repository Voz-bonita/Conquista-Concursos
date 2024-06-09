<script>

</script>

<div class="action-container">
    <span class="action-symbol">&#x1F7AC;</span>
    <p class="action-text"><slot></slot></p>
</div>

<style>
    .action-container {
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: center;
        background-color: rgb(255, 62, 62);
        width: 100%;
        margin: 2rem 0rem;
        padding: 0.1rem 0.1rem;
        border: 0.1rem solid rgb(160, 44, 44);
        border-radius: 0.3rem;
    }

    .action-symbol {
        color: white;
        font-size: 2rem;
        padding: 0rem 1rem;
    }

    .action-text {
        color: white;
        font-size: 1rem;
    }
</style>