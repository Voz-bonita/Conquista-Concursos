<script>
	import FeatureBox from '../lib/feature_box.svelte';
</script>

<div class="feature-display">
	<section class="grid-template features">
		<div class="grid-item">
			<FeatureBox path="explore.svg" feature="+2 mil questões para você treinar" />
		</div>
		<div class="grid-item">
			<FeatureBox path="medal.svg" feature="Conquiste a vaga dos seus sonhos" />
		</div>
		<div class="grid-item">
			<FeatureBox path="settings_heart.svg" feature="Caderno de questões do seu jeitinho" />
		</div>
		<div class="grid-item">
			<FeatureBox path="explore.svg" feature="+2 mil questões para você treinar" />
		</div>
		<div class="grid-item">
			<FeatureBox path="medal.svg" feature="Conquiste a vaga dos seus sonhos" />
		</div>
		<div class="grid-item">
			<FeatureBox path="bolt.svg" feature="Acelere seus estudos com IA" />
		</div>
	</section>
	<section class="call">
		<p>Tá esperando o quê?</p>
		<button>Comece a conquistar</button>
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
		flex-direction: row;
	}

	.features {
		width: 70%;
	}

	.call {
		width: 30%;
		padding: 15px;
		background: linear-gradient(90deg, #eaecc6, #7b2be4);
		color: black;
		border-radius: 7px;
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
</style>
