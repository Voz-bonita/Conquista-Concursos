<script>
	import Navbar from '$lib/navbar.svelte';
	import '../globals.css';
	import { onMount } from 'svelte';
	import { onAuthStateChanged } from 'firebase/auth';
	import { authStore } from '../stores/authSotre';

	onMount(() => {
		const unsubscribe = onAuthStateChanged((user) => {
			authStore.update((curr) => {
				return { ...curr, isLoading: false, currentUser: user };
			});
		});
	});
</script>

<header>
	<Navbar />
</header>
<main>
	<slot />
</main>
<footer>
	<p>Copyright © 2024 Conquista Concursos</p>
</footer>

<style>
	header {
		justify-content: center;
	}
	main {
		min-width: 100%;
		/* Altura da tela - navbar - footer - padding do slot */
		min-height: 84vh;
		margin: auto;
	}
	footer {
		min-height: 8vh;
		width: 100%;
		display: flex;
		justify-content: center;
		align-items: center;
		text-align: center;
		color: white;
		background-color: rgb(0, 12, 23);
	}
</style>
