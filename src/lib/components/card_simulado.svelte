<script>
	export let branch = '';
	export let description = '';
	export let icon_path = '';
	export let icon_class = '';
</script>

<div class="card">
	<img src={icon_path} alt="" class={icon_class} width="20%" height="20%" />
	<p class="branch">{branch}</p>
	<p class="description">{description}</p>
</div>

<style>
	.card {
		height: 80%;
		width: 90%;
		border-radius: 20px;
		padding: 5px;
		border: 2px solid;
		border-color: black;
		justify-content: center;
		align-items: center;
		display: flex;
		flex-direction: column;
		font-size: 0.6em;
		text-align: center;
		color: black;
		background: rgb(241, 241, 241);
	}
	.branch {
		font-weight: bold;
		font-size: 2vw;
		margin: 6px;
	}

	.description {
		font-size: 1vw;
		margin: 6px;
	}

	.card:hover {
		cursor: pointer;
		box-shadow: 0 0 0 1px black;
	}
	@media screen and (orientation: portrait), screen and (max-width: 700px) {
		.branch {
			font-size: 5vw;
		}
		.description {
			font-size: 3vw;
		}

		.card {
			height: 90%;
		}
	}
</style>
