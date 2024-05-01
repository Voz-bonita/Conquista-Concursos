<script>
	import logo from '$lib/assets/logo.png';
	import account_icon from '$lib/assets/account.svg';
	import logout_icon from '$lib/assets/logout.svg';
	import menu_icon from '$lib/assets/menu.svg';
	import { authStore, authHandlers } from '$lib/stores/authStore';
	import { currentContest } from '$lib/stores/databaseStore.js';
	import { goto } from '$app/navigation';

	let name;
	authStore.subscribe((curr) => {
		name = curr?.currentUser?.displayName;
	});

	async function handleLogout() {
		await authHandlers.signOut();
		goto('/login');
		return;
	}

	function resetContest() {
		currentContest.update(() => {
			return { index: null, questions: null };
		});
	}
</script>

<header>
    <a href="/" class="logo"><img src={logo} alt=""/>Conquista Concursos</a>
	<label for="checkmenu">
		<input type="checkbox" id="checkmenu" class="input-menu">
		<img src={menu_icon} alt="" class="menu-icon">
	</label>
    <nav class="navbar">
		<a href="/simulados" class="contest" on:click={resetContest}>Simulados do CNU</a>
		<a href="/sobre">Sobre</a>
		{#if $authStore.currentUser}
			<a href="/perfil"
				><img src={account_icon} alt="" class="account-icon" />{name
					? name
					: 'Atualize a página'}</a
			>

			<a href="/login" class="logout-btn" on:click|preventDefault={handleLogout}
				style="color: red;"><img src={logout_icon} alt="" class="red-icon logout-icon" />Sair</a
			>
		{:else}
			<a href="/login">Login</a>
		{/if}
    </nav>
</header>

<style>
    header {
        position: absolute;
        height: 8vh;
        width: 99.14vw;
		display: flex;
		flex-direction: row;
		align-items: center;
		justify-content: space-between;
    }

	a {
		text-decoration: none;
		color: black;
		display: flex;
		align-items: center;
		flex-direction: row;
		white-space: nowrap;
	}

	.logo {
		margin-left: 2vw;
		font-size: 1.2vw;
		font-weight: bold;
		width: 20vw;
	}

	.logo > img {
		width: 15%;
		height: 15%;
	}

	img {
		width: 1.5vw;
		height: 4vh;
		padding-right: 5px;
	}

	.navbar {
		width: 75%;
		display: flex;
		flex-direction: row;
		justify-content: right;
	}

	.navbar > a {
		padding: 1vh 2vw;
		font-size: 1vw;
		border-radius: 20px;
		margin: 0 1px;
	}

	.navbar > a:hover {
		border: 1px solid black;
		color: black;
	}

	.contest {
		background-color: steelblue;
		color: white;
	}

	.menu-icon {
		display: none;
	}
	.input-menu {
		display: none;
	}

	@media screen and (orientation: portrait), screen and (max-width: 700px) {
		label:has(.input-menu:checked) + .navbar {
			display: flex;
		}
		.navbar {
			display: none;
			position: absolute;
			top: 100%;
			flex-direction: column;
			align-items: center;
			justify-content: right;
			background-color: rgb(21, 21, 21);
			width: 100vw;
		}

		.navbar > a {
			color: white;
			border-radius: 20px;
			font-size: 3.5vw;
			margin: 10px;
		}

		.navbar > a:hover {
			border: 1px solid white;
			color: white;
		}

		.logo {
			font-size: 0;
		}

		.logo > img {
			width: 50%;
			height: 50%;
		}

		.menu-icon {
			display: block;
			width: 8vw;
		}

		img {
			width: 6vw;
			height: 4vh;
			padding-right: 5px;
		}

		.account-icon {
			filter: invert(94%) sepia(6%) saturate(0%) hue-rotate(113deg) brightness(105%) contrast(108%);
		}
	}
</style>