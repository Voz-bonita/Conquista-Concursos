<script>
    import googleLogo from '$lib/assets/google.svg';
    import { authHandlers } from '$lib/stores/authStore';

    async function handleProviderLogin() {
		if (window.outerWidth <= 700) {
			window.sessionStorage.setItem('pending', 1);
			await authHandlers.GoogleMobileSignIn();
		} else {
			await authHandlers.GoogleSignIn().catch((error) => {
				console.log(error.code);
			});
		}
	}
</script>

<button type="button" class="provider-btn clickable" on:click={handleProviderLogin}>    
    <img src={googleLogo} alt="" class="provider-logo" />
    <span class="provider-text"> Continue com Google </span>
</button>
<style>
    .provider-btn {
		background: whitesmoke;
		color: black;
		height: 5vh;
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: center;
        border-radius: 20px;
        min-width: 20vw;
        padding: 0px 20px 0px 20px;
	}
    .provider-logo {
        height: 80%;
        padding: 10px;
    }

	.provider-text {
		font-size: 1vw;
	}

    @media screen and (orientation: portrait), screen and (max-width: 700px) {
        .provider-text {
            font-size: 3vw;
	}
    }
</style>