<script>
    export let inputProps;
    const text = inputProps.lab_text;
</script>

<div class="field-div">
    <label class="field-label" for={inputProps.id}>{text}</label>
    <input {...inputProps} class="field" >
</div>

<style>
    .field-div {
        display: flex;
        flex-direction: column;
        width: min(30rem, 80vw);
        margin: 0.5rem;
    }
    .field-label {
        font-size: 1rem;
        color: grey;
    }

    .field {
        background-color: azure;
        width: 96%;
        height: 2rem;
        font-size: 1.4rem;
        border-radius: 0.3rem;
        border: 1px solid black;
        margin: 0.2rem;
        padding: 0.2rem 1%;
    }
</style>