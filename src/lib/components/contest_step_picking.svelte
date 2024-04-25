<script>
    import ContestRadio from '$lib/components/contest_radio.svelte'
	import ContestIndexRadio from '$lib/components/contest_index_radio.svelte';
    import { enhance } from '$app/forms'
    import { databaseHandler, currentContest } from '$lib/stores/databaseStore.js';
    import { sanitizeQuestions } from '$lib/index.js'

    export let contest;
    export let questionListId;
    export let version;
    
    const contestReplicates = 5;
</script>

<form class="container" method="POST" use:enhance={() => {
    return async ({ result }) => {
        const contestDocument = result.data.document
        databaseHandler.getContestById(contestDocument).then((snapshot) => {
            const formData = snapshot.data();
            const questions = sanitizeQuestions(formData.questions)
            currentContest.update((current) => {
                return {...current, questions: questions}
            })
        })
    }
    }}
>
    <p class="contest-general">{contest.short_name} - {contest.full_name}</p>
        <div class="contest-frame">
            <img src={contest.icon} class={contest.icon_style} alt="" width="4%" height="4%">
            <p class="contest-title">{contest.title}</p>
            <p class="contest-subtitle">{contest.subtitle}</p>
            <ContestRadio steps={contest.steps} bind:userSelected={questionListId}/>
            <ContestIndexRadio {contestReplicates} bind:userSelected={version}/>
        </div>

        <div class="directional-btns-div">
            <button class="start-button clickable">Começar</button>
        </div>
</form>



<style>
    .container {
        width: 100vw;
        min-height: calc(100vh - 8vh - 8vh);
        display: flex;
        flex-direction: column;
        align-items: center;
    }
    .contest-frame {
        background: rgb(241, 241, 241);
        color: black;
        border: 2px solid black;
        border-radius: 7px;
        width: 80%;
        margin-top: 2vh;
        padding-bottom: 2vh;
        padding-top: 2vh;
        display: flex;
        flex-direction: column;
        align-items: center;
    }
    .contest-option-row {
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: space-evenly;
        width: 100%;
        margin: 1vh;
    }
    .contest-title {
        font-weight: bold;
		font-size: 1.8vw;
		margin: 6px;
    }
    .contest-general {
        font-weight: bold;
		font-size: 2vw;
		margin: 6px;
        color: rgb(71, 126, 117);
        margin-top: 2vh;
    }
    .contest-subtitle {
        font-size: 1.4vw;
		margin: 6px;
    }
    .start-button {
        font-size: 1.2vw;
        background: steelblue;
        color: white;
        border-radius: 20px;
        border: 1px solid black;
        padding: 10px 40px 10px 40px;
        float: right;
    }
    .directional-btns-div {
        margin-top: 1vh;
        width: 80%;
    }
</style>