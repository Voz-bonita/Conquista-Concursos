<script>
    import ContentDiv from '$lib/components/content_div.svelte'
    import FormField from '$lib/components/form_field.svelte'
	import FormRadio from '$lib/components/form_radio.svelte';

    export let form;
    $: questionType = form?.questionType ?? 'objetiva'
    $: apiField = {type: "text", minlength: 8, id: "api-key", name: "api-key", value: form?.apiKey ?? ''};
    $: subjectField = {type: "text", minlength: 6, id: "subject", name: "subject", value: form?.subject ?? ''};

    let questionBody = "";
    let questionAnswer = "";
    $: questionBodyLength = questionBody.length;
    $: questionAnswerLength = questionAnswer.length;
</script>

<div class="form-container green-theme">
    <ContentDiv>
        <form class="form-generator">
            <FormField inputProps={apiField}>Chave da API</FormField>
            <FormField inputProps={subjectField}>Assunto da Questão</FormField>
            <div class="radio-type" role="radiogroup" name="question-type">
                <FormRadio id="objetiva" bind:groupValue={questionType}>Objetiva</FormRadio>
                <FormRadio id="discursiva" bind:groupValue={questionType}>Discursiva</FormRadio>
                <FormRadio id="correcao" bind:groupValue={questionType}>Correção</FormRadio>
            </div>
            {#if questionType == "correcao"}
                <label for="question-body"><h2>Enunciado</h2></label>
                <textarea class="user-text" rows="10" bind:value={questionBody} id="question-body" name="question-body"></textarea>
                <span class="character-count">{questionBodyLength} / 2450 (Mínimo) ------------- {questionBodyLength} / 3500 (Máximo)</span>

                <label for="question-answer"><h2>Resposta</h2></label>
                <textarea class="user-text" rows="10" bind:value={questionAnswer} id="question-answer" name="question-answer"></textarea>
                <span class="character-count">{questionAnswerLength} / 2450 (Mínimo) ------------- {questionAnswerLength} / 3500 (Máximo)</span>
                <button class="submit-btn" type="submit">Corrigir</button>
            {:else}
                <button class="submit-btn" type="submit">Gerar</button>
            {/if}
            
        </form>
    </ContentDiv>
</div>

<style>
    .form-container {
        min-height: inherit;
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;
        padding: 1rem;
    }
    .form-generator {
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;
        gap: 1rem;
    }

    .radio-type {
        display: flex;
        justify-content: center;
        align-items: center;
        gap: 1rem;
        padding: 0.2rem;
    }
    
    .submit-btn {
        font-size: 1.5rem;
        padding: 0.3rem 2rem;
        border-radius: 0.3rem;
        cursor: pointer;
        margin-top: 2rem;
        box-shadow: 0 0.3rem 0.3rem grey;
        background-color: black;
        color: white;
        transition: 150ms;
        &:hover {
            margin-top: 2.2rem;
            margin-bottom: -0.2rem;
            box-shadow: 0 0 0 0 grey;
        }
    }

    .user-text {
        font-size: 1.5rem;
        columns: 10;
        width: 80%;
    }

    @media screen and (max-width: 600px) {
        .radio-type {
            display: grid;
            grid-template-columns: 1fr 1fr;
            justify-content: center;
            gap: 1rem;
        }
    }
</style>