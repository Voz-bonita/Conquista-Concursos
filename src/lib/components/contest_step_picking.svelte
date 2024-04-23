<script>
    import ContestRadio from '$lib/components/contest_radio.svelte'
    import ContestIndexButton from '$lib/components/contest_index_button.svelte'
    
    export let contest;
    export let questionListId;
    
    const contestReplicates = 5;
    const contests = Array.apply(null, Array(contestReplicates)).map(function (_, i) { return i + 1})
</script>

<div class="container">
    <p class="contest-general">{contest.short_name} - {contest.full_name}</p>
    <div class="contest-frame">
        <img src={contest.icon} class={contest.icon_style} alt="" width="4%" height="4%">
        <p class="contest-title">{contest.title}</p>
        <p class="contest-subtitle">{contest.subtitle}</p>
        <ContestRadio steps={contest.steps} bind:userSelected={questionListId}/>
        <div class="contest-option-row">
            {#each contests as i}
                <ContestIndexButton index={i}/>
            {/each}
        </div>
    </div>

    <div class="directional-btns-div">
        <button class="start-button clickable" on:click|preventDefault={() => {}}>Começar</button>
    </div>
</div>



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