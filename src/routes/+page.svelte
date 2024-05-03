<script>
	import FeatureBox from '$lib/components/feature_box.svelte';
	import PricingCard from '$lib/components/pricing_card.svelte';
	import PricingField from '$lib/components/pricing_field.svelte';
	import bolt from '$lib/assets/bolt.svg';
	import explore from '$lib/assets/explore.svg';
	import medal from '$lib/assets/medal.svg';
	import ClickmeButton from '../lib/components/clickme_button.svelte';
	import { goto } from '$app/navigation'

	function freeContest() {
		goto("/simulados?q=free")
	}
</script>

<div class="feature-display">
	<div class="green-theme">
	<section class="grid-template">
		<div class="grid-item">
			<FeatureBox
				path={bolt}
				feature="Acelere seus estudos com IA"
				description="Contamos com inteligência artificial aplicada para criar exercícios inéditos que pareçam tão fidedignos quanto no dia da prova, além de te ajudar a entender as soluções"
			/>
		</div>
		<div class="grid-item">
			<FeatureBox
				path={explore}
				feature="+2 mil questões para você treinar"
				description="Acreditamos que a melhor forma de treinar exercícios é com exercícios da banca que vai elaborar a prova, atualmente nosso foco é no CNU"
			/>
		</div>
		<div class="grid-item">
			<FeatureBox
				path={medal}
				feature="Conquiste a vaga dos seus sonhos"
				description="Se o que te faltava para conquistar esse sonho era um bom simulado, então chegou a sua vez!"
			/>
		</div>
		
	</section>
	<div class="free-test">
		<ClickmeButton onClickFunction={freeContest}>Teste Gratuitamente</ClickmeButton>
	</div>	
	</div>
	<section class="grid-pricing white-theme">
		<div class="grid-item">
			<PricingCard plan_class="black-white-gradient-theme" name="Conhecimentos Gerais">
				<PricingField name="Preço">R$10,00</PricingField>
				<PricingField name="Tipo de Questão">Múltipla escolha de (A) a (E)</PricingField>
				<PricingField name="Uso de IA">Questões inéditas e suas soluções</PricingField>
				<PricingField name="Análise de Preformance"
					>Número de acertos (Há planos de incluir um leaderboard dos usuários)</PricingField
				>
			</PricingCard>
		</div>
		<div class="grid-item">
			<PricingCard plan_class="purple-theme" name="Conhecimentos Específicos">
				<PricingField name="Preço">R$20,00</PricingField>
				<PricingField name="Tipo de Questão">Múltipla escolha de (A) a (E)</PricingField>
				<PricingField name="Uso de IA">Questões inéditas e suas soluções</PricingField>
				<PricingField name="Análise de Preformance"
					>Número de acertos (Há planos de incluir um leaderboard dos usuários)</PricingField
				>
			</PricingCard>
		</div>
		<div class="grid-item">
			<PricingCard plan_class="green-theme" name="Discursiva/Redação">
				<PricingField name="Preço">R$30,00/Questão</PricingField>
				<PricingField name="Tipo de Questão">Discursiva com limite de 45 linhas</PricingField>
				<PricingField name="Uso de IA"
					>Questões inéditas, padrão de resposta e correção da sua submissão (Correção ainda não implementada)</PricingField
				>
				<PricingField name="Análise de Preformance">Correção da IA</PricingField>
			</PricingCard>
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

	.free-test {
		display: flex;
		align-items: center;
		justify-content: center;
		margin-bottom: 20px;
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
