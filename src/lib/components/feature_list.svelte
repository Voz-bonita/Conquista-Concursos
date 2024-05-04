<script>
    import bolt from '$lib/assets/bolt.svg';
	import explore from '$lib/assets/explore.svg';
	import medal from '$lib/assets/medal.svg';
    import FeatureBox from '$lib/components/feature_box.svelte';
</script>

<section class="grid-template">
    <FeatureBox
        path={bolt}
        feature="Acelere seus estudos com IA"
        description="Contamos com inteligência artificial aplicada para criar exercícios inéditos que pareçam tão fidedignos quanto no dia da prova, além de te ajudar a entender as soluções"
    />
    <FeatureBox
        path={explore}
        feature="+2 mil questões para você treinar"
        description="Acreditamos que a melhor forma de treinar exercícios é com exercícios da banca que vai elaborar a prova, atualmente nosso foco é no CNU"
    />
    <FeatureBox
        path={medal}
        feature="Conquiste a vaga dos seus sonhos"
        description="Se o que te faltava para conquistar esse sonho era um bom simulado, então chegou a sua vez!"
    />
</section>

<style>
    .grid-template {
        display: flex;
        flex-direction: row;
        align-items: stretch;
        justify-content: space-evenly;
    }
    @media screen and (orientation: portrait), screen and (max-width: 700px) { 
        .grid-template {
            display: grid;
            grid-auto-rows: 1fr;
            gap: 10px;
        }
    }
</style>