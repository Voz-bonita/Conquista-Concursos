<script>
	import Navbar from '../lib/navbar.svelte';
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
		max-width: 70%;
		/* Altura da tela - navbar - footer - padding do slot */
		min-height: calc(100vh - 60px - 60px - 40px);
		margin: auto;
		padding: 20px;
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
