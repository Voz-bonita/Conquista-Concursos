<script>
	import ContestCard from '$lib/components/contest_card.svelte';
    export let contests;
</script>

<section class="grid-template">
    {#each contests as contest, i (i)}
        <div class="grid-item">
            <ContestCard
                contestIndex={i}
                branch={contest.title}
                description={contest.subtitle}
                icon_path={contest.icon}
                icon_class={contest.icon_style}
            />
        </div>
    {/each}
</section>

<style>
    .grid-template {
		display: grid;
		grid-template-columns: 40% 40%;
		justify-content: center;
	}

	.grid-item {
		display: flex;
		justify-content: center;
		align-items: center;
		margin: 1vh 0 1vh 0;
	}

	@media screen and (orientation: portrait), screen and (max-width: 700px) {
		.grid-template {
			grid-template-columns: 75%;
			min-height: calc(100vh - 8vh - 8vh);
			justify-content: center;
		}
	}
</style>