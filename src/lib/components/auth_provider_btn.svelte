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
		background-color: azure;
		color: black;
		display: flex;
		flex-direction: row;
		align-items: center;
		justify-content: center;
		border-radius: 0.5rem;
		padding: 0rem 1rem;
		width: min(25rem, 70vw);
		margin-bottom: 2rem;
		min-width: fit-content;
	}
	.provider-logo {
		height: 2.2rem;
		padding: 0rem 0.5rem 0rem 1rem;
	}

	.provider-text {
		font-size: 1.2rem;
		padding: 0.1rem 1rem 0.1rem 0.5rem;
	}
</style>
