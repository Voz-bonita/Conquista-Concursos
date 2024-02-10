<script>
	import FeatureBox from '../lib/feature_box.svelte';
</script>

<div class="frame">
	<div class="frame-features">
		<div class="frame-row">
			<FeatureBox path="explore.svg" feature="+2 mil questões para você treinar" />
			<FeatureBox path="medal.svg" feature="Conquiste a vaga dos seus sonhos" />
			<FeatureBox path="settings_heart.svg" feature="Caderno de questões do seu jeitinho" />
		</div>
		<div class="frame-row">
			<FeatureBox path="explore.svg" feature="+2 mil questões para você treinar" />
			<FeatureBox path="medal.svg" feature="Conquiste a vaga dos seus sonhos" />
			<FeatureBox path="bolt.svg" feature="Acelere seus estudos com IA" />
		</div>
	</div>
	<div class="frame-call">
		<p>Tá esperando o quê?</p>
		<button>Comece já</button>
	</div>
</div>

<style>
	.frame {
		display: flex;
		flex-direction: row;
		background: linear-gradient(to right, #2be4ad, #eaecc6);
		border-radius: 7px;
		/* align-items: center;
		justify-content: center; */
	}

	.frame-features {
		width: 70%;
		display: flex;
		flex-direction: column;
	}

	.frame-call {
		width: 30%;
		padding: 15px;
		background-color: black;
		color: white;
		border-radius: 7px;
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		text-align: center;
	}

	.frame-call button {
		width: 50%;
		background: linear-gradient(to left, #2be4ad, #eaecc6);
		border-radius: 7px;
		font-size: 24px;
		cursor: pointer;
	}
	.frame-row {
		display: flex;
		flex-direction: row;
		justify-content: space-evenly;
		margin: 30px;
	}
</style>
