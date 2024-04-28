<script>
	import Navbar from '$lib/components/navbar.svelte';
	import '../globals.css';
	import { onMount } from 'svelte';
	import { auth } from '$lib/firebase';
	import { onAuthStateChanged } from 'firebase/auth';
	import { authStore } from '$lib/stores/authStore';

	onMount(() => {
		const unsubscribe = onAuthStateChanged(auth, (user) => {
			if (user) {
				authStore.update(() => {
					return { currentUser: user, userLogged: true };
				});
			} else {
				authStore.update(() => {
					return { currentUser: null, userLogged: false };
				});
			}
		});
		return unsubscribe;
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
