<script>
	import CardSimulado from '$lib/components/card_simulado.svelte';
</script>

<div>
	<section class="grid-template green-theme">
		<div class="grid-item">
			<CardSimulado
				branch="Bloco 1"
				description="Infraestrutura, exatas e engenharia"
				icon_path="engineer.svg"
			/>
		</div>
		<div class="grid-item">
			<CardSimulado
				branch="Bloco 2"
				description="Tecnologia, dados e informação"
				icon_path="query_stats.svg"
				icon_class="blue-icon"
			/>
		</div>
		<div class="grid-item">
			<CardSimulado
				branch="Bloco 3"
				description="Ambiental, agrário e biológicas"
				icon_path="nature.svg"
				icon_class="green-icon"
			/>
		</div>
		<div class="grid-item">
			<CardSimulado
				branch="Bloco 4"
				description="Trabalho e saúde do servidor"
				icon_path="conditions.svg"
				icon_class="red-icon"
			/>
		</div>
		<div class="grid-item">
			<CardSimulado
				branch="Bloco 5"
				description="Educação, saúde, desenvolvimento social e direitos humanos"
				icon_path="medical_information.svg"
				icon_class="red-icon"
			/>
		</div>
		<div class="grid-item">
			<CardSimulado
				branch="Bloco 6"
				description="Setores econômicos e regulação"
				icon_path="money_report.svg"
				icon_class="money-green-icon"
			/>
		</div>
		<div class="grid-item">
			<CardSimulado
				branch="Bloco 7"
				description="Gestão governamental e administração pública"
				icon_path="government.svg"
				icon_class="beige-icon"
			/>
		</div>
		<div class="grid-item">
			<CardSimulado
				branch="Bloco 8"
				description="Nível intermediário"
				icon_path="school.svg"
				icon_class="yellow-icon"
			/>
		</div>
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
