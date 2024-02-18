<script>
	export let branch = '';
	export let description = '';
	export let icon_path = '';
	export let icon_style = '';
</script>

<div class="card">
	<img src={icon_path} alt="" style={icon_style} width="20%" height="20%" />
	<p class="branch">{branch}</p>
	<p>{description}</p>
</div>

<style>
	.card {
		height: 400px;
		width: 200px;
		background-color: rgb(51, 51, 51);
		border-radius: 7px;
		padding: 5px;
		/* border: 3px solid; */
		/* border-color: rgba(168, 175, 168, 0.5); */
		justify-content: center;
		align-items: center;
		display: flex;
		flex-direction: column;
		font-size: 0.6em;
		text-align: center;
		color: whitesmoke;
	}
	.branch {
		font-weight: bold;
		font-size: 1.5em;
	}
</style>
