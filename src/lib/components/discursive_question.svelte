<script>
    import ContentDiv from "$lib/components/content_div.svelte";
    import ShowHide from "$lib/components/show_hide.svelte";
    
    export let body;

    function submitSolution() {
        if (character_count >= 1000 & character_count < 1500) {
            userSubmited = true;
        }
    }
    
    let userSubmited = false;
    let answer = "";
    $: character_count = answer.length;
</script>

{#if !userSubmited}

    <ContentDiv>
        <h3>Questão 1</h3>
        <span class="question-body">{@html body}</span>
    </ContentDiv>
    <ContentDiv>
        <label for="user-answer"><h3>Escreva sua resposta</h3></label>
        <textarea id="user-answer" maxlength="1500" class="user-answer" rows="10" bind:value={answer}/>
        <span class="character-count">{character_count} / 1000 (Mínimo) ------------- {character_count} / 1500 (Máximo)</span>
    </ContentDiv>

    <div class="contest-navigation-btns">
        <button class="contest-nav-btn cancel-btn">Retornar</button>
        <button class="contest-nav-btn submit-btn" on:click|preventDefault={submitSolution}>Enviar</button>
    </div>
{:else}
    <ShowHide title="Enunciado" id="question-body">
        <ContentDiv>
            <h3>Questão 1</h3>
            <span class="question-body">{@html body}</span>
        </ContentDiv>
    </ShowHide>
    <ShowHide title="Sua Resposta" id="user-answer">
        <ContentDiv>
            <h3>Sua resposta</h3>
            <span class="question-body">{answer}</span>
        </ContentDiv>
    </ShowHide>
{/if}


<style>
    .user-answer {
        width: 80%;
        font-size: 1.2rem;
        font-family: sans-serif;
    }

    .question-body {
        font-size: 1.2rem;
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
        width: 8rem;
        padding: 0.4rem 1.6rem;
        margin: 0px 0px 10px 10px;
        border-radius: 1rem;
        cursor: pointer;
        font-size: 1rem;
        text-align: center;

    }

    .cancel-btn {
        background-color: rgb(247, 201, 51);
    }

    .submit-btn {
        background-color: #2085d8;
    }


</style>