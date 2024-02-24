<script>
	export let name = '';
	export let description = '';
	export let price = '';
	export let call = '';
	export let plan_class = '';
	export let n_tests = '1';
	export let ai = '';
	export let performance = '';
</script>

<div class="card">
	<div class="name {plan_class}">
		<h2 class="plan-name">{name}</h2>
	</div>
	<div class="info">
		<ul>
			<div class="plan-item">
				<li class="item-name">Mensalidade</li>
				<li class="item-value">{price}</li>
			</div>
			<div class="plan-item">
				<li class="item-name">Quantidade de simulados</li>
				<li class="item-value">{n_tests}</li>
			</div>
			<div class="plan-item">
				<li class="item-name">Recursos de IA</li>
				<li class="item-value">{ai}</li>
			</div>
			<div class="plan-item">
				<li class="item-name">Análise de desempenho</li>
				<li class="item-value">{performance}</li>
			</div>
			<div class="plan-item">
				<li class="item-name">Objetivo</li>
				<li class="item-value">{description}</li>
			</div>
		</ul>
	</div>
	<button class="{plan_class} call-btn">{call}</button>
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
		align-items: center;
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

	.info li {
		list-style: none;
	}
	.info ul {
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

	.call-btn {
		margin-top: auto;
		margin-bottom: 4%;
		min-width: 40%;
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

	@media only screen and (hover: none) and (pointer: coarse) {
		.card {
			width: 70vw;
			min-height: 60vh;
		}
		.plan-item li {
			display: inline-block;
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
