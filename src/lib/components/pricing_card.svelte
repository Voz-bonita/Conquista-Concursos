<script>
	export let name = '';
	export let plan_class = '';
</script>

<div class="card">
	<div class="name {plan_class}">
		<h2 class="plan-name">{name}</h2>
	</div>
	<ul>
		<slot>
		</slot>
	</ul>
	<a href="/simulados" class="anchor-contest-page"><button class="{plan_class} call-btn">Simulados</button></a>
</div>

<style>
	.card {
		min-width: 15vw;
		min-height: 30vh;
		border: 1px solid;
		border-color: black;
		/* border-style: inset; */
		border-radius: max(1vw, 10px);
		margin: 20px;
		display: flex;
		flex-direction: column;
	}

	.card:hover {
		box-shadow: 0 0 0 1px black;
	}

	.name {
		width: 95%;
		height: 12%;
		display: flex;
		margin: 2.5%;
		border-radius: max(1vw, 10px);
		align-items: center;
	}
	ul {
		margin: 3%;
		padding: 2px;
	}

	.plan-item {
		border-style: none none solid none;
		border-width: 1px;
		border-color: black;
		margin: 5%;
	}

	.item-name {
		color: rgb(83, 83, 83);
		font-size: 0.8vw;
	}

	.item-value {
		font-size: 0.9vw;
	}
	.plan-name {
		font-weight: bold;
		font-size: 1vw;
		margin: 4%;
	}

	.anchor-contest-page {
		margin: auto auto 0px auto;
		width: 70%;
	}

	.call-btn {
		margin-bottom: 4%;
		width: 100%;
		min-height: 4vh;
		border-radius: 20px;
		border-width: 1px;
		border-color: black;
		cursor: pointer;
		font-size: 1vw;
	}

	.call-btn:hover {
		box-shadow: 0 0 0 1px black;
	}

	@media screen and (orientation: portrait), screen and (max-width: 700px) {
		.card {
			width: 70vw;
			min-height: 60vh;
		}

		.item-name {
			font-size: 3.5vw;
		}

		.item-value {
			font-size: 4vw;
		}

		.plan-name {
			font-weight: bold;
			font-size: 4.5vw;
			margin: 4%;
		}

		.call-btn {
			font-size: 4vw;
			width: 35%;
		}
	}
</style>
