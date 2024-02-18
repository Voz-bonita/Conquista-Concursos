<script>
	import CardSimulado from '../../lib/card_simulado.svelte';
	let white_icon =
		'filter: invert(94%) sepia(6%) saturate(0%) hue-rotate(113deg) brightness(105%) contrast(108%)';
	let blue_icon =
		'filter: invert(31%) sepia(66%) saturate(551%) hue-rotate(143deg) brightness(90%) contrast(92%)';
	let green_icon =
		'filter: invert(51%) sepia(88%) saturate(398%) hue-rotate(21deg) brightness(103%) contrast(100%)';
	let red_icon =
		'filter: invert(17%) sepia(71%) saturate(4452%) hue-rotate(348deg) brightness(92%) contrast(100%)';
	let money_green_icon =
		'filter: invert(47%) sepia(62%) saturate(467%) hue-rotate(66deg) brightness(95%) contrast(91%)';
	let beige_icon =
		'filter: invert(68%) sepia(50%) saturate(390%) hue-rotate(345deg) brightness(85%) contrast(91%)';
	let yellow_icon =
		'filter: invert(97%) sepia(28%) saturate(7146%) hue-rotate(312deg) brightness(93%) contrast(98%)';
</script>

<div class="frame main_theme">
	<div class="frame-features">
		<div class="frame-row">
			<CardSimulado
				branch="Bloco 1"
				description="Infraestrutura, exatas e engenharia"
				icon_path="engineer.svg"
				icon_style={white_icon}
			/>
			<CardSimulado
				branch="Bloco 2"
				description="Tecnologia, dados e informação"
				icon_path="query_stats.svg"
				icon_style={blue_icon}
			/>
			<CardSimulado
				branch="Bloco 3"
				description="Ambiental, agrário e biológicas"
				icon_path="nature.svg"
				icon_style={green_icon}
			/>
			<CardSimulado
				branch="Bloco 4"
				description="Trabalho e saúde do servidor"
				icon_path="conditions.svg"
				icon_style={red_icon}
			/>
		</div>
	</div>
</div>
<div class="frame secondary_theme">
	<div class="frame-features">
		<div class="frame-row">
			<CardSimulado
				branch="Bloco 5"
				description="Educação, saúde, desenvolvimento social e direitos humanos"
				icon_path="medical_information.svg"
				icon_style={red_icon}
			/>
			<CardSimulado
				branch="Bloco 6"
				description="Setores econômicos e regulação"
				icon_path="money_report.svg"
				icon_style={money_green_icon}
			/>
			<CardSimulado
				branch="Bloco 7"
				description="Gestão governamental e administração pública"
				icon_path="government.svg"
				icon_style={beige_icon}
			/>
			<CardSimulado
				branch="Bloco 8"
				description="Nível intermediário"
				icon_path="school.svg"
				icon_style={yellow_icon}
			/>
		</div>
	</div>
</div>

<style>
	.frame {
		display: flex;
		flex-direction: row;
		border-radius: 7px;
		align-items: space-evenly;
		justify-content: space-evenly;
	}

	.main_theme {
		background: linear-gradient(to right, #2be4ad, #eaecc6);
	}

	.secondary_theme {
		background: linear-gradient(to right, #eaecc6, #8b2be4);
	}

	.frame-features {
		width: 90%;
		display: flex;
		flex-direction: column;
	}

	.frame-row {
		display: flex;
		flex-direction: row;
		justify-content: space-evenly;
		align-items: space-evenly;
		margin: 30px;
	}
</style>
