<script>
    import PricingCard from '$lib/components/pricing_card.svelte';
	import PricingField from '$lib/components/pricing_field.svelte';
</script>

<section class="pricing white-theme">
    <PricingCard plan_class="black-white-gradient-theme" name="Conhecimentos Gerais">
        <PricingField name="Preço">R$10,00</PricingField>
        <PricingField name="Tipo de Questão">Múltipla escolha de (A) a (E)</PricingField>
        <PricingField name="Uso de IA">Questões inéditas e suas soluções</PricingField>
        <PricingField name="Análise de Preformance"
            >Número de acertos (Há planos de incluir um leaderboard dos usuários)</PricingField
        >
    </PricingCard>
    <PricingCard plan_class="purple-theme" name="Conhecimentos Específicos">
        <PricingField name="Preço">R$20,00</PricingField>
        <PricingField name="Tipo de Questão">Múltipla escolha de (A) a (E)</PricingField>
        <PricingField name="Uso de IA">Questões inéditas e suas soluções</PricingField>
        <PricingField name="Análise de Preformance"
            >Número de acertos (Há planos de incluir um leaderboard dos usuários)</PricingField
        >
    </PricingCard>
    <PricingCard plan_class="green-theme" name="Discursiva/Redação">
        <PricingField name="Preço">R$30,00/Questão</PricingField>
        <PricingField name="Tipo de Questão">Discursiva com limite de 45 linhas</PricingField>
        <PricingField name="Uso de IA"
            >Questões inéditas, padrão de resposta e correção da sua submissão</PricingField
        >
        <PricingField name="Análise de Preformance">Correção da IA</PricingField>
    </PricingCard>
</section>

<style>
    .pricing {
        display: flex;
        align-items: stretch;
        justify-content: center;
        width: 100%;
    }
    
    @media screen and (orientation: portrait), screen and (max-width: 700px) {
        .pricing {
            display: grid;
            grid-auto-rows: 1fr;
            gap: 10px;
        }
    }
</style>