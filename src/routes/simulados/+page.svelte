<script>
	import CardSimulado from '$lib/components/card_simulado.svelte';
	export let data;
	const { contests } = data;

	contests.forEach((contest) => {
		contest.icon = new URL(`../../lib/assets/${contest.icon}`, import.meta.url).href
	});
</script>

<div>
	<section class="grid-template green-theme">
		{#each contests as contest}
		<div class="grid-item">
			<CardSimulado
				contestId={contest.id}
				branch={contest.title}
				description={contest.subtitle}
				icon_path={contest.icon}
				icon_class={contest.icon_style}/>
		</div>
		{/each}
	</section>
</div>

<style>
	.grid-template {
		display: grid;
		grid-template-columns: 40% 40%;
		min-height: calc(100vh - 8vh - 8vh);
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
