<script>
    export let groupValue;
    export let id;
</script>

<label for={id} class="type-label">
    <input type="radio" id={id} name={id} bind:group={groupValue} value={id}/>
    <label for={id} style="cursor: pointer;"><slot></slot></label>
</label>

<style>
    .type-label {
        font-size: 1.5rem;
        padding: 0.3rem 1rem;
        border-radius: 0.3rem;
        border: 1px solid black;
        cursor: pointer;
        box-shadow: 0 0.3rem 0.3rem black;
        text-align: center;
    }

    label:has(> input[type='radio']:checked) {
        background: linear-gradient(145deg, #2085d8, #3230b6);
        color: white;
        box-shadow: 0 0.4rem 0.4rem black;
        margin-top: -0.2rem;
        margin-bottom: 0.2rem;
        transition: 150ms;
	}

    input {
        display: none;
    }

    @media screen and (max-width: 600px) {
        .type-label {
            font-size: 1rem;
            padding: 0.15rem 1rem;
        }
    }
</style>