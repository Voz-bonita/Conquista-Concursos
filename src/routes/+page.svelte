<script>
	import FeatureBox from '../lib/feature_box.svelte';
</script>

<div class="feature-display">
	<section class="grid-template">
		<div class="grid-item">
			<FeatureBox
				path="bolt.svg"
				feature="Acelere seus estudos com IA"
				description="Contamos com inteligência artificial aplicada para criar exercícios inéditos que pareçam tão fidedignos quanto no dia da prova, além de te ajudar a entender as soluções"
			/>
		</div>
		<div class="grid-item">
			<FeatureBox
				path="explore.svg"
				feature="+2 mil questões para você treinar"
				description="Acreditamos que a melhor forma de treinar exercícios é com exercícios da banca que vai elaborar a prova, atualmente nosso foco é no CNU"
			/>
		</div>
		<div class="grid-item">
			<FeatureBox
				path="medal.svg"
				feature="Conquiste a vaga dos seus sonhos"
				description="Se o que te faltava para conquistar esse sonho era um bom simulado, então chegou a sua vez!"
			/>
		</div>
	</section>
</div>

<style>
	.grid-template {
		display: grid;
		grid-template-columns: 33% 33% 33%;
		min-height: 50vh;
		justify-content: center;
		background: linear-gradient(90deg, #2be4ad, #eaecc6);
	}

	.grid-item {
		display: flex;
		justify-content: center;
		align-items: center;
	}
	.feature-display {
		display: flex;
		flex-direction: column;
	}

	.features {
		width: 70%;
	}

	.call {
		width: 30%;
		padding: 15px;
		background: linear-gradient(90deg, #eaecc6, #7b2be4);
		color: black;
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		text-align: center;
	}

	.call p {
		font-size: 20px;
	}
	.call button {
		width: 50%;
		background: transparent;
		/* background: linear-gradient(90deg, #eaecc6, #7b2be4); */
		border-radius: 7px;
		font-size: 24px;
		cursor: pointer;
	}

	@media only screen and (hover: none) and (pointer: coarse) {
		.grid-template {
			display: grid;
			grid-template-columns: 100%;
			min-height: 50vh;
			justify-content: center;
			background: linear-gradient(90deg, #2be4ad, #eaecc6);
		}
		.call button {
			font-size: 3vw;
		}
		.features {
			width: 60%;
		}

		.call {
			width: 40%;
			padding: 15px;
			background: linear-gradient(90deg, #eaecc6, #7b2be4);
			color: black;
			display: flex;
			flex-direction: column;
			justify-content: center;
			align-items: center;
			text-align: center;
		}
	}
</style>
