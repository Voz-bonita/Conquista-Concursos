<script>
    import ContentDiv from "$lib/components/content_div.svelte";
    import ShowHide from "$lib/components/show_hide.svelte";
    import { startChat, getChatResponse, cleanModelResponse } from "$lib/stores/geminiStore.js"
    import { databaseHandler } from '$lib/stores/databaseStore.js'
    import { auth } from '$lib/firebase.js'
	import AuthFormModal from "$lib/components/auth_form_modal.svelte";
    import { authStore } from '$lib/stores/authStore';
    import { setLoading, unsetLoading } from '$lib/stores/loadingStore';

    export let contest;
    export let question;
    const body = question.body;
    const answer = question.full_answer;

    setLoading()

    let userSubmited = false;
    let userTriedSubmit = false;
    let modelResponse = "";

    async function submitSolution() {
        userTriedSubmit = true;
        const answerIsValid = character_count >= 2450 & character_count < 3500;
        if (answerIsValid & auth.currentUser != null) {
            setLoading();
            const chat = startChat(body, answer)
            modelResponse = await getChatResponse(chat, userAnswer);
            await databaseHandler.saveDiscursiveAnswer(contest, userAnswer, modelResponse);
            userSubmited = true;
            unsetLoading();
            return
        }
        if (auth.currentUser === null) {
            promptUserToLogIn = true;
        }
    }

    authStore.subscribe((current) => {
        if(current.userLogged && userTriedSubmit) {
            setLoading();
            databaseHandler.getDiscursiveAnswer(contest).then((existingAnswer) => {
            if (Object.keys(existingAnswer).length != 0) {
                userAnswer = existingAnswer["user_answer"];
                modelResponse = existingAnswer["model_answer"];
                userTriedSubmit = false;
                userSubmited = true;
                unsetLoading();
                return;
            }}).catch(() => {
                unsetLoading();
                submitSolution();
            })
        }
    })
    
    let promptUserToLogIn = false;
    
    let userAnswer = "";
    $: character_count = userAnswer.length;

    databaseHandler.getDiscursiveAnswer(contest).then((existingAnswer) => {
        if (Object.keys(existingAnswer).length != 0) {
            userAnswer = existingAnswer["user_answer"];
            modelResponse = existingAnswer["model_answer"];
            userTriedSubmit = false;
            userSubmited = true;
        }
        unsetLoading();
    }).catch(() => {
        unsetLoading();
    })
    
</script>

<AuthFormModal bind:active={promptUserToLogIn}/>
<div class="question-container">
{#if !userSubmited}
    <ContentDiv>
        <h2>Questão 1</h2>
        <span class="question-body">{@html body}</span>
    </ContentDiv>
    <ContentDiv>
        <label for="user-answer"><h2>Escreva sua resposta</h2></label>
        <textarea id="user-answer" maxlength="3500" class="user-answer" rows="10" bind:value={userAnswer}/>
        <span class="character-count">{character_count} / 2450 (Mínimo) ------------- {character_count} / 3500 (Máximo)</span>
    </ContentDiv>

    <div class="contest-navigation-btns">
        <button class="contest-nav-btn cancel-btn">Retornar</button>
        <button class="contest-nav-btn submit-btn" on:click|preventDefault={submitSolution}>Enviar</button>
    </div>
{:else}
    <ShowHide title="Enunciado" id="question-body">
        <ContentDiv>
            <h2>Questão 1</h2>
            <span class="question-body">{@html body}</span>
        </ContentDiv>
    </ShowHide>
    <ShowHide title="Padrão de Resposta" id="question-answer">
        <ContentDiv>
            <h2>Padrão de Resposta</h2>
            <span class="question-body">{@html answer}</span>
        </ContentDiv>
    </ShowHide>
    <ShowHide title="Sua Resposta" id="user-answer">
        <ContentDiv>
            <h2>Sua resposta</h2>
            <span class="question-body">{userAnswer}</span>
        </ContentDiv>
    </ShowHide>
    <ShowHide title="Correção" id="model-answer">
        <ContentDiv>
            <h2>Correção da IA</h2>
            <span class="question-body">{@html cleanModelResponse(modelResponse)}</span>
        </ContentDiv>
    </ShowHide>
    {/if}
</div>


<style>
    .question-container {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        padding: 2vh 0vw;
    }
    .user-answer {
        width: 80%;
        font-size: 1.5rem;
        font-family: sans-serif;
    }

    .question-body {
        font-size: 1.5rem;
        white-space: pre-line;
    }

    .character-count {
        float: right;
    }

    .contest-navigation-btns {
        width: 80%;
        display: flex;
        align-items: stretch;
        justify-content: right;
    }

    .contest-nav-btn {
        width: 10rem;
        padding: 0.4rem 1.6rem;
        margin: 0px 0px 10px 10px;
        border-radius: 1rem;
        cursor: pointer;
        font-size: 1.4rem;
        text-align: center;

    }

    .cancel-btn {
        background-color: rgb(247, 201, 51);
    }

    .submit-btn {
        background-color: #2085d8;
    }


</style>