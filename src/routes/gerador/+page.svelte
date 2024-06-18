<script>
    import ContentDiv from '$lib/components/content_div.svelte'
    import FormField from '$lib/components/form_field.svelte'

    export let form;
    let questionType = "objetiva"
    $: apiField = {type: "text", minlength: 8, id: "api-key", name: "api-key", value: form?.apiKey ?? ''};
    $: topicField = {type: "text", minlength: 6, id: "topic", name: "topic", value: form?.topic ?? ''};

    let questionBody = "";
    let questionAnswer = "";
    $: questionBodyLength = questionBody.length;
    $: questionAnswerLength = questionAnswer.length;
</script>

<div class="form-container green-theme">
    <ContentDiv>
        <form class="form-generator">
            <FormField inputProps={apiField}>Chave da API</FormField>
            <FormField inputProps={topicField}>Assunto da Questão</FormField>
            <div class="radio-type" role="radiogroup">
                <label for="objetiva" class="type-label">
                    <input type="radio" id="objetiva" name="objetiva" bind:group={questionType} value="objetiva"/>
                    <label for="objetiva" style="cursor: pointer;">Objetiva</label>
                </label>
                <label for="discursiva" class="type-label">
                    <input type="radio" id="discursiva" name="discursiva" bind:group={questionType} value="discursiva"/>
                    <label for="discursiva" style="cursor: pointer;">Discursiva</label>
                </label>
                <label for="discursiva" class="type-label">
                    <input type="radio" id="correcao" name="correcao" bind:group={questionType} value="correcao"/>
                    <label for="correcao" style="cursor: pointer;">Correção</label>
                </label>
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

    .type-label {
        font-size: 1.5rem;
        padding: 0.3rem 1rem;
        border-radius: 0.3rem;
        border: 1px solid black;
        cursor: pointer;
        box-shadow: 0 0.3rem 0.3rem black;
    }

    label:has(> input[type='radio']:checked) {
        background: linear-gradient(145deg, #2085d8, #3230b6);
        color: white;
        box-shadow: 0 0.4rem 0.4rem black;
        margin-top: -0.2rem;
        margin-bottom: 0.2rem;
        transition: 150ms;
	}

    .radio-type > label > input{
        display: none;
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
</style>