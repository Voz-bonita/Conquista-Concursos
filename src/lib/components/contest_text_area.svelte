<script>
    export let min = 2450;
    export let max = 5000;
    export let id;

    let userText = "";
    $: quserTextLength = userText.length;
</script>

<label for={id}><h2><slot></slot></h2></label>
<textarea class="user-text" rows="10" bind:value={userText} id={id} name={id} minlength={min} maxlength={max}/>
<span class="character-count">
    {quserTextLength} / {min} (Mínimo) ------------- {quserTextLength} / {max} (Máximo)
</span>

<style>
    .user-text {
        font-size: 1.5rem;
        columns: 10;
        width: 80%;
    }
</style>