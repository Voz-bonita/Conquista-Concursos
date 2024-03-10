<script>
	import { authStore, authHandlers } from '$lib/stores/authStore';

	let name;
	authStore.subscribe((curr) => {
		name = curr?.currentUser?.displayName;
	});

	async function handleLogout() {
		await authHandlers.signOut();
		window.location.href = '/login';
		return;
	}
</script>

<nav class="top-nav">
	<div class="nav-title">
		<img src="award_star.svg" alt="" width="10%" height="10%" />
		<a href="/">Conquista Concursos</a>
	</div>
	<input id="menu-toggle" type="checkbox" />
	<label class="menu-button-container" for="menu-toggle">
		<div class="menu-button"></div>
	</label>
	<ul class="nav-menu">
		<li><a href="/simulados" class="simulado">Simulados do CNU</a></li>
		<li><a href="/sobre">Sobre</a></li>
		{#if $authStore.currentUser}
			<li><a href="/perfil"><img src="account.svg" alt="" class="account-icon" />{name}</a></li>
			<li>
				<a href="/" class="logout-btn" on:click|preventDefault={handleLogout}
					><img src="logout.svg" alt="" />Sair</a
				>
			</li>
		{:else}
			<li><a href="/login">Login</a></li>
		{/if}
	</ul>
</nav>

<style>
	.top-nav {
		display: flex;
		justify-content: space-between;
		flex-direction: row;
		align-items: center;
		background: rgb(241, 241, 241);
		height: 8vh;
		padding: 0 3vw 0 3vw;
	}

	.nav-title {
		display: flex;
		align-items: center;
		justify-content: space-around;
	}

	.nav-title a {
		text-decoration: none;
		color: black;
		font-size: large;
		font-weight: bold;
		font-size: 2vh;
	}

	.nav-menu a {
		text-decoration: none;
		padding: 1vh 2.5vw;
		margin-left: 0.5vw;
		border-radius: 20px;
		transition: 0.3s;
		cursor: pointer;
		font-size: 1.8vh;
	}

	ul li a {
		display: flex;
		color: black;
	}

	ul li a:hover {
		box-shadow: 0 0 0 1px black;
	}

	.simulado {
		color: white;
		background-color: steelblue;
	}

	.simulado:hover {
		color: black;
		background-color: steelblue;
	}

	.logout-btn {
		color: red;
	}
	.logout-btn > img {
		filter: invert(17%) sepia(71%) saturate(4452%) hue-rotate(348deg) brightness(92%) contrast(100%);
	}

	.nav-menu {
		display: flex;
		flex-direction: row;
		list-style-type: none;
		margin: 0;
		padding: 0;
	}

	.menu-button-container {
		display: none;
		max-height: 10px;
		width: 30px;
		cursor: pointer;
		flex-direction: column;
		justify-content: center;
		align-items: center;
	}

	#menu-toggle {
		display: none;
	}

	.menu-button,
	.menu-button::before,
	.menu-button::after {
		display: block;
		background-color: black;
		position: absolute;
		height: 0.4vh;
		width: 6vw;
		transition: transform 400ms cubic-bezier(0.23, 1, 0.32, 1);
		border-radius: 2px;
	}

	.menu-button::before {
		content: '';
		margin-top: -30%;
	}

	.menu-button::after {
		content: '';
		margin-top: 30%;
	}

	#menu-toggle:checked + .menu-button-container .menu-button::before {
		margin-top: 0px;
		transform: rotate(405deg);
	}

	#menu-toggle:checked + .menu-button-container .menu-button {
		background: rgba(255, 255, 255, 0);
	}

	#menu-toggle:checked + .menu-button-container .menu-button::after {
		margin-top: 0px;
		transform: rotate(-405deg);
	}

	@media screen and (orientation: portrait), screen and (max-width: 700px) {
		.menu-button-container {
			display: flex;
		}
		.nav-menu {
			position: absolute;
			top: 0;
			margin-top: 8vh;
			left: 0;
			flex-direction: column;
			width: 100%;
			justify-content: center;
			align-items: center;
		}
		#menu-toggle ~ .nav-menu li {
			height: 0;
			margin: 0;
			padding: 0;
			border: 0;
			transition: height 400ms cubic-bezier(0.23, 1, 0.32, 1);
		}
		#menu-toggle:checked ~ .nav-menu li {
			border: 1px solid #333;
			height: 5vh;
			padding: 0.5vh;
			transition: height 400ms cubic-bezier(0.23, 1, 0.32, 1);
		}
		.nav-menu > li {
			display: flex;
			justify-content: right;
			align-items: center;
			padding-right: 5vw;
			width: 100%;
			background-color: #363636;
			overflow: hidden;
		}

		.nav-menu > li > a {
			margin-right: 3vw;
			color: white;
		}

		.logout-btn {
			color: red !important;
		}
		.nav-menu > li:not(:last-child) {
			border-bottom: 1px solid #444;
		}
		.account-icon {
			filter: invert(94%) sepia(6%) saturate(0%) hue-rotate(113deg) brightness(105%) contrast(108%);
		}
	}
</style>
