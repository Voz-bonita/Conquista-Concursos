<script>

</script>

<div class="question-frame"><slot></slot></div>

<style>
	.question-frame {
		display: flex;
		flex-direction: column;
		color: black;
		width: 80%;
		background-color: whitesmoke;
		border: 1px solid black;
		border-radius: 20px;
		padding: 1em 1.5em;
		margin: 1vh 0 1vh 0;
	}
	
	@media screen and (orientation: portrait), screen and (max-width: 700px) {
		
	}
</style>
