<script>
	import logo from '$lib/assets/logo.png';
	import account_icon from '$lib/assets/account.svg';
	import logout_icon from '$lib/assets/logout.svg';
	import menu_icon from '$lib/assets/menu.svg';
	import { authStore, authHandlers } from '$lib/stores/authStore';
	import { currentContest } from '$lib/stores/databaseStore.js';
	import { goto } from '$app/navigation';
	import { browser } from '$app/environment'

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

	// Hide navbar when user clicks on a navbar a tag
	if (browser) {
		const anchors = document.getElementsByTagName('a')
		const checkboxMenu = document.getElementById('checkmenu')
		checkboxMenu.checked = false;
		for (let i = 0; i < anchors.length; i++) {
			anchors[i].addEventListener('click', () => {
				checkboxMenu.checked = false;
			})
		}
	}
</script>

<header>
    <a href="/" class="logo"><img src={logo} alt=""/>Conquista Concursos</a>
	<label for="checkmenu">
		<input type="checkbox" id="checkmenu" class="input-menu">
		<img src={menu_icon} alt="" class="menu-icon">
	</label>
    <nav class="navbar">
		<a href="/simulados" class="contest" on:click={resetContest} data-sveltekit-preload-data="tap">Simulados do CNU</a>
		<a href="/sobre">Sobre</a>
		{#if $authStore.currentUser}
			<a href="/perfil" on:click|preventDefault={() => {}}
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
        height: 5rem;
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
		font-size: 1.5rem;
		font-weight: bold;
		width: 20vw;
	}

	.logo > img {
		width: auto;
		height: 4rem;
	}

	.navbar > a > img {
		width: 1.8rem;
		height: 1.8rem;
		padding-right: 5px;
	}

	.navbar {
		width: 75%;
		display: flex;
		flex-direction: row;
		justify-content: right;
	}

	.navbar > a {
		padding: 0.4rem 2rem;
		font-size: 1.2rem;
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

	@media screen and (orientation: portrait), screen and (max-width: 1200px) {
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
			z-index: 999;
		}

		.navbar > a {
			color: white;
			margin: 10px;
		}

		.navbar > a:hover {
			border: 1px solid white;
			color: white;
		}

		.logo {
			font-size: 0;
		}

		.menu-icon {
			display: block;
			width: 5rem;
			height: 4rem;
		}

		.account-icon {
			filter: invert(94%) sepia(6%) saturate(0%) hue-rotate(113deg) brightness(105%) contrast(108%);
		}
	}
</style>