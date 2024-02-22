<script>
	import Navbar from '../lib/navbar.svelte';
	import '../globals.css';
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
		min-height: calc(100vh - 60px - 60px);
		margin: auto;
	}
	footer {
		height: 60px;
		width: 100%;
		display: flex;
		justify-content: center;
		align-items: center;
		text-align: center;
		color: white;
		background-color: rgb(0, 12, 23);
	}
</style>
