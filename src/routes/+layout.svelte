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

<div class="page">
	<Navbar />
	<main>
		<slot />
	</main>
	<footer>
		<p>Copyright © 2024 Conquista Concursos - Todos os direitos reservados</p>
		<a href="/termosDeUso">Termos de Uso e Serviço</a>
		<a href="/politicasDePrivacidade">Política de Privacidade</a>
	</footer>
</div>


<style>
	.page {
		display: flex;
		flex-direction: column;
	}
	main {
		min-width: 100%;
		/* Altura da tela - navbar - footer - padding do slot */
		min-height: 84vh;
		margin-top: 5rem;
	}
	footer {
		min-height: 8vh;
		width: 100%;
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		text-align: center;
		color: white;
		padding-bottom: 2rem;
		gap: 0.1rem;
		background-color: rgb(0, 12, 23);
	}
</style>
