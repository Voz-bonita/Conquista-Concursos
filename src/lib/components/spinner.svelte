<div class="center green-theme">
	<div class="ring"></div>
	<span class="loading">Carregando...</span>
</div>

<style>
	.center {
		display: flex;
		align-items: center;
		justify-content: center;
		text-align: center;
        min-height: calc(100vh - 8vh - 8vh);
	}
	.ring {
		position: absolute;
		width:25vw;
		height: 25vw;
		border-radius: 50%;
        border-top: 5px solid;
        border-bottom: 5px dashed;
        border-left: 5px dashed;
        border-right: 5px dashed;
        border-color: #000000;
        animation: spin 1s linear infinite;
	}

	.ring:before {
		content: "";
		position: absolute;
		left: 0;
		height: 0;
		height: 100%;
		width: 100%;
		border-radius: 50%;
	}
    
	@keyframes spin {
		0% {
				transform: rotate(0deg);
		}
		100% {
                transform: rotate(360deg);
		}
	}
    

	.loading {
		animation: fade 2s ease-in-out infinite;
		display: inline-block;
        font-size: 1.8vw;
	}

	@keyframes fade{
		0% {
			color: black;
		}
		50% {
			color: transparent;
		}
		100% {
			color: black;
		}
	}
</style>
