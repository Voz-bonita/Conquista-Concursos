<script>
    import ContestOption from '$lib/components/contest_option.svelte'
    import ContestIndexButton from '$lib/components/contest_index_button.svelte'
    export let data;
    const { contestData } = data
    const contests = [1, 2, 3, 4, 5]
    const stepCount = contestData.steps.length
    const iconUrl = new URL(`../../../lib/assets/${contestData.icon}`, import.meta.url).href
</script>

<div class="green-theme container">
    <p class="contest-general">{contestData.short_name} - {contestData.full_name}</p>
    <div class="contest-frame">
        <img src={iconUrl} class={contestData.icon_style} alt="" width="4%" height="4%">
        <p class="contest-title">{contestData.title}</p>
        <p class="contest-subtitle">{contestData.subtitle}</p>
        <div class="contest-option-row">
            {#each contestData.steps as contestStep, i (i)}
                <ContestOption 
                    id={contestStep.id}
                    name={contestStep.name} 
                    numberOfQuestions={contestStep.question_count} 
                    numberOfCards={stepCount}
                    index={i}
                />
            {/each}
        </div>
        <div class="contest-option-row">
            {#each contests as i}
                <ContestIndexButton index={i}/>
            {/each}
        </div>
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
</style>