<script>
    import ContestOption from '$lib/components/contest_option.svelte'
    import ContestIndexButton from '$lib/components/contest_index_button.svelte'
    export let data;
    const { contestData } = data
    const contests = [1, 2, 3, 4, 5]
    const objectiveKeys = Object.keys(contestData.objective_steps)
    const nonObjectiveKeys = contestData.nonobjective_steps
</script>

<div class="green-theme container">
    <div class="contest-frame">
        <p class="contest-general">{contestData.contest}</p>
        <img src={contestData.icon} class={contestData.icon_style} alt="" width="100%" height="100%">
        <p class="contest-title">{contestData.title}</p>
        <p class="contest-subtitle">{contestData.subtitle}</p>
        <div class="contest-option-row">
            {#each objectiveKeys as key}
                <ContestOption name={key} numberOfQuestions={contestData.objective_steps[key]}/>
            {/each}
            {#each nonObjectiveKeys as key}
                <ContestOption name={key}/>
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
        color: steelblue;
    }
    .contest-subtitle {
        font-size: 1.2vw;
		margin: 6px;
    }
</style>