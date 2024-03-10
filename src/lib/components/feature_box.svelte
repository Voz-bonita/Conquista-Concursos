<script>
	export let path = '';
	export let feature = '';
	export let description = '';
</script>

<div class="box">
	<img src={path} alt="" width="15%" height="15%" />
	<p class="feature-title">{feature}</p>
	<p class="feature-description">{description}</p>
</div>

<style>
	.box {
		height: 15vw;
		width: 20vw;
		border-radius: 7px;
		border: 2px solid;
		border-color: black;
		justify-content: center;
		align-items: center;
		display: flex;
		flex-direction: column;
		font-size: 0.6em;
		text-align: center;
		color: black;
		margin: 25px;
	}

	.feature-title {
		font-size: 1vw;
		margin: 6px;
		font-weight: bold;
	}
	.feature-description {
		font-size: 0.8vw;
	}

	@media screen and (orientation: portrait), screen and (max-width: 700px) {
		.box {
			height: auto;
			width: 90vw;
		}
		.feature-title {
			font-size: 6vw;
		}

		.feature-description {
			font-size: 3.8vw;
		}
	}
</style>
