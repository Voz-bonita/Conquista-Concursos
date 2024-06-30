<script>
    export let id;
    export let name;
</script>

<div class="check-div">
    <input type="checkbox" required id={id} name={name}>
    <label class="check-text" for={id}><slot></slot></label>
</div>

<style>
    .check-div {
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: row;
        gap: 0.1rem;
    }

    .check-text {
        font-size: 1rem;
    }
</style>