<script>
	export let path = '';
	export let feature = '';
</script>

<div class="box">
	<img src={path} alt="" width="20%" height="20%" />
	<p class="description">{feature}</p>
</div>

<style>
	.box {
		height: min(200px, 15vw);
		width: min(200px, 15vw);
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
	}

	.description {
		font-size: 1vw;
		margin: 6px;
	}
</style>
