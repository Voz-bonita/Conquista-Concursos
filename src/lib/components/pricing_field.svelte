<script>
    export let name;
</script>

<div class="plan-item">
    <li class="item-name">{name}</li>
    <li class="item-value"><slot></slot></li>
</div>

<style>
    .plan-item {
		border-style: none none solid none;
		border-width: 1px;
		border-color: black;
		margin: 5%;
	}
    li {
		list-style: none;
	}
    .item-name {
		color: rgb(83, 83, 83);
		font-size: 0.8vw;
	}

	.item-value {
		font-size: 0.9vw;
	}
    @media screen and (orientation: portrait), screen and (max-width: 700px) {
        .item-name {
			font-size: 3.5vw;
		}

		.item-value {
			font-size: 4vw;
		}
        .plan-item li {
			display: inline-block;
		}
    }
</style>