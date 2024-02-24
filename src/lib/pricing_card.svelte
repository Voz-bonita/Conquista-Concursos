<script>
	export let name = '';
	export let description = '';
	export let price = '';
	export let pros = '';
	export let call = '';
	export let plan_class = '';
</script>

<div class={plan_class}>
	<p class="plan-name">{name}</p>
	<p class="plan-description">{description}</p>
	<p class="plan-price">{price}</p>
	<p class="plan-pros">{pros}</p>
	<button class="plan-call">{call}</button>
</div>

<style>
	div {
		width: 20vw;
		height: 30vw;
		border: 1px solid;
		border-color: black;
		/* border-style: inset; */
		border-radius: 7px;
		margin: 20px;
		display: flex;
		flex-direction: column;
		align-items: center;
	}

	.plan-name {
		font-weight: bold;
		font-size: 2vw;
	}

	.plan-description {
		font-size: 1.2vw;
		text-align: justify;
		margin: 0 3% 0 3%;
	}

	.plan-price {
		font-size: 1.4vw;
		font-weight: bolder;
	}

	@media only screen and (hover: none) and (pointer: coarse) {
		div {
			width: 80vw;
			height: 50vh;
		}

		.plan-name {
			font-weight: bold;
			font-size: 10vw;
		}

		.plan-description {
			font-size: 4vw;
			text-align: justify;
			margin: 0 3% 0 3%;
		}

		.plan-price {
			font-size: 6.5vw;
		}
	}
</style>
