<script>
    import ContestRadio from '$lib/components/contest_radio.svelte'
    import ContestIndexButton from '$lib/components/contest_index_button.svelte'
    import { goto } from '$app/navigation'
    
    export let data;
    let contestId;
    const startContest = () => {
        const contestUrl = `${contestData.route}/${contestId}+simulado1`
        goto(contestUrl)
    }

    const { contestData } = data
    const contests = [1, 2, 3, 4, 5]
    
    const iconUrl = new URL(`../../../lib/assets/${contestData.icon}`, import.meta.url).href

</script>

<div class="green-theme container">
    <p class="contest-general">{contestData.short_name} - {contestData.full_name}</p>
    <div class="contest-frame">
        <img src={iconUrl} class={contestData.icon_style} alt="" width="4%" height="4%">
        <p class="contest-title">{contestData.title}</p>
        <p class="contest-subtitle">{contestData.subtitle}</p>
        <ContestRadio steps={contestData.steps} bind:userSelected={contestId}/>
        <div class="contest-option-row">
            {#each contests as i}
                <ContestIndexButton index={i}/>
            {/each}
        </div>
    </div>

    <div class="directional-btns-div">
        <button class="start-button clickable" on:click|preventDefault={startContest}>Começar</button>
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