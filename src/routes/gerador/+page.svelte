<script>
    import { enhance, deserialize } from '$app/forms';
    
    import ContentDiv from '$lib/components/content_div.svelte'
    import FormField from '$lib/components/form_field.svelte'
	import FormRadio from '$lib/components/form_radio.svelte';
	import ShowHide from '$lib/components/show_hide.svelte';
	import Spinner from '$lib/components/spinner.svelte';
	import ActionRequired from '$lib/components/action_required.svelte';
	import ContestTextArea from '$lib/components/contest_text_area.svelte';

    function clearGenerator() {
        generatorState = 'generator';
        body = '';
        answer = '';
        score = '';
        questionType = 'objetiva'
    }

    export let form;
    let questionType = 'objetiva'
    let examiningBoard = 'cesgranrio'
    $: apiField = {type: "text", minlength: 8, id: "api-key", name: "api-key", value: form?.apiKey ?? ''};
    $: subjectField = {type: "text", minlength: 4, maxlength: 30, id: "subject", name: "subject", value: form?.subject ?? ''};

    let generatorState = 'generator'
    let questionBody = "";
    let questionAnswer = "";
    let baselineQuestionBody = "";

    let body, answer, score;
</script>

<div class="form-container green-theme">
    {#if generatorState == "generator"}
    <ContentDiv>
        <form class="form-generator" method="POST" action="?/generateQuestion" use:enhance={() => {
            return async ({ result }) => {
                form = result.data;
                if (result.type === 'success') {
                    generatorState = "loading";
                    const newQuestionResponse = await fetch(result.data.fetchCall, {
                        method: 'POST'
                    });
                    const newQuestionData = deserialize(await newQuestionResponse.text());
                    body = newQuestionData.questionBody;
                    answer = newQuestionData.questionAnswer;
                    score = newQuestionData.questionScore;
                    generatorState = "generated";
                }
                else {
                    generatorState = "generator";
                }
            }
        }}>
            <!-- <FormField inputProps={apiField}>Chave da API</FormField> -->
            <FormField inputProps={subjectField}>Assunto da Questão</FormField>
            <label for="examining-board" class="field-label">Banca Elaboradora</label>
            <div class="radio-type" role="radiogroup" name="examining-board" id="examining-board">
                <FormRadio id="cesgranrio" bind:groupValue={examiningBoard}>Cesgranrio</FormRadio>
                <FormRadio id="custom" bind:groupValue={examiningBoard}>Customizada</FormRadio>
            </div>
            {#if examiningBoard == "custom"}
                <ContestTextArea id="baseline-question-body" bind:userText={baselineQuestionBody}>Uma ou mais questões da banca desejada</ContestTextArea>
            {/if}
            <label for="question-type" class="field-label">Tipo de Questão</label>
            <div class="radio-type" role="radiogroup" name="question-type" id=""question-type>
                <FormRadio id="objetiva" bind:groupValue={questionType}>Objetiva</FormRadio>
                <FormRadio id="discursiva" bind:groupValue={questionType}>Discursiva</FormRadio>
                <FormRadio id="correcao" bind:groupValue={questionType}>Correção</FormRadio>
            </div>
            {#if questionType == "correcao"}
                <ContestTextArea id="question-body" bind:userText={questionBody}>Enunciado</ContestTextArea>
                <ContestTextArea id="question-answer" bind:userText={questionAnswer}>Resposta</ContestTextArea>
                <button class="submit-btn" type="submit">Corrigir</button>
            {:else}
                <button class="submit-btn" type="submit">Gerar</button>
            {/if}
            {#if form?.shortSubject}<ActionRequired>O Assunto da questão deve conter no mínimo 4 carácteres</ActionRequired>{/if}
            {#if form?.longSubject}<ActionRequired>O Assunto da questão não pode conter mais de 30 carácteres</ActionRequired>{/if}
            {#if form?.unselectedType}<ActionRequired>Por favor, selecione um tipo de questão</ActionRequired>{/if}
            {#if form?.unknownBaseline}<ActionRequired>Por favor, apresente uma questão para ser utilizada como linha de base</ActionRequired>{/if}
            {#if form?.invalidTextField}<ActionRequired>Todos os campos de texto devem ter entre 2450 e 5000 carácteres</ActionRequired>{/if}
        </form>
    </ContentDiv>
    {:else if generatorState=="generated"}
        {#if body}
            <ShowHide title="Enunciado" id="question-body">
                <ContentDiv>
                    <h2>Enunciado</h2>
                    <span class="question-body">{@html body}</span>
                </ContentDiv>
            </ShowHide>
        {/if}
        {#if answer}        
            <ShowHide title="Resposta" id="question-answer">
                <ContentDiv>
                    <h2>Resposta da IA</h2>
                    <span class="question-body">{@html answer}</span>
                </ContentDiv>
            </ShowHide>
        {/if}
        {#if score}
            <ShowHide title="Pontuação" id="question-score">
                <ContentDiv>
                    <h2>Avaliação da IA</h2>
                    <span class="question-body">{@html score}</span>
                </ContentDiv>
            </ShowHide>
        {/if}
        <button class="clear-generator" on:click|preventDefault={clearGenerator}>Gerar outra questão</button>
    {:else if generatorState == "loading"}
        <Spinner />
    {/if}
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

    .question-body {
        font-size: 1.5rem;
        white-space: pre-line;
    }

    .clear-generator {
        font-size: 1.3rem;
        min-width: fit-content;
        padding: 0.5rem 1rem;
        border-radius: 0.3rem;
        background-color: #2085d8;
        color: white;
        text-align: center;
        cursor: pointer;
        box-shadow: 0 0.2rem 0.3rem black;
        transition: 200ms;
        &:hover {
            margin-top: -0.1rem;
            margin-bottom: 0.1rem;
            box-shadow: 0 0.3rem 0.4rem black;
        }
    }
    .field-label {
        font-size: 1rem;
        color: grey;
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