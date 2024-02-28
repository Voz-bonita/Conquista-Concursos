<script>
	import FeatureBox from '../lib/feature_box.svelte';
	import PricingCard from '../lib/pricing_card.svelte';
</script>

<div class="feature-display">
	<section class="grid-template green-theme">
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
	<section class="grid-pricing white-theme">
		<div class="grid-item">
			<PricingCard
				plan_class="black-white-gradient-theme"
				name="Básico"
				price="R$0,00"
				description="Pensado para quem quer fazer um test drive na plataforma"
				n_tests="1"
				ai="Questões inéditas"
				performance="Nenhum"
				call="Teste"
			/>
		</div>
		<div class="grid-item">
			<PricingCard
				plan_class="purple-theme"
				name="Concurseiro"
				price="R$5,00"
				description="Se você pretende fazer mais de 1 simulado, esse pode ser o plano certo pra você"
				n_tests="10"
				ai="Questões inéditas e comentadas"
				performance="Rankeamento por média"
				call="Estude"
			/>
		</div>
		<div class="grid-item">
			<PricingCard
				plan_class="green-theme"
				name="Conquistador"
				price="R$20,00"
				description="Perfeito para quem tem fome de conquistar e deseja utilizar os melhores recursos"
				n_tests="Ilimitado"
				ai="Todos"
				performance="Completa"
				call="Conquiste"
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
	}

	.grid-pricing {
		display: grid;
		grid-template-columns: 20% 20% 20%;
		min-height: 50vh;
		justify-content: center;
		align-items: center;
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

	@media screen and (orientation: portrait), screen and (max-width: 700px) {
		.grid-template {
			display: grid;
			grid-template-columns: 100%;
			min-height: 50vh;
			justify-content: center;
		}

		.grid-pricing {
			display: grid;
			grid-template-columns: 100%;
			min-height: 50vh;
			justify-content: center;
		}
	}
</style>
