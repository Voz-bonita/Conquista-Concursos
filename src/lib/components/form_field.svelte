<script>
    export let inputProps;
    const text = inputProps.name;
</script>

<div class="field-div">
    <label class="field-label" for={inputProps.id}>{text}</label>
    <input {...inputProps} class="field" >
</div>

<style>
    .field-div {
        display: flex;
        flex-direction: column;
        width: 30%;
        margin: 0.5rem;
    }
    .field-label {
        font-size: 1rem;
        color: grey;
    }

    .field {
        width: 100%;
        font-size: 1.8rem;
        border-radius: 0.3rem;
        border: 1px solid black;
        margin: 0.2rem;
        padding: 0.2rem 0.8rem;
        &:focus {
            box-shadow: 0 0 1rem black;
        }
    }
</style>