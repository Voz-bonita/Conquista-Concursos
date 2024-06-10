<script>
	import { auth } from '$lib/firebase';
	import { signInWithPopup } from 'firebase/auth';

	export let logo;
	export let provider;

	async function handleProviderLogin() {
		await signInWithPopup(auth, provider);
	}
</script>

<button type="button" class="provider-btn clickable" on:click={handleProviderLogin}>
	<img src={logo} alt="" class="provider-logo" />
	<span class="provider-text"> <slot></slot> </span>
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
