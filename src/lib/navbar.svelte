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
		<li><a href="/">Login</a></li>
	</ul>
</nav>

<style>
	.top-nav {
		display: flex;
		justify-content: space-between;
		align-items: center;
		background: rgb(241, 241, 241);
		height: 8vh;
	}

	.nav-title a {
		text-decoration: none;
		color: black;
		font-size: large;
		font-weight: bold;
		font-size: 2vh;
	}

	ul {
		list-style: none;
	}

	ul li {
		display: inline-block;
	}

	ul li a {
		text-decoration: none;
		color: black;
		padding: 1vh 2.5vw;
		border-radius: 20px;
		transition: 0.3s;
		cursor: pointer;
		font-size: 1.8vh;
	}

	ul li a:hover {
		box-shadow: 0 0 0 0.1rem black;
		color: black;
		background-color: #a5c599;
	}

	.simulado {
		color: white;
		background-color: steelblue;
	}

	.simulado:hover {
		color: black;
		background-color: steelblue;
		/* box-shadow: 0 0 0 0.03 black; */
	}

	.top-nav {
		display: flex;
		flex-direction: row;
		align-items: center;
		justify-content: space-between;
		background: rgb(241, 241, 241);
		/* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
		padding: 0 3vw 0 3vw;
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
		height: min(4px, 1vh);
		width: 25px;
		transition: transform 400ms cubic-bezier(0.23, 1, 0.32, 1);
		border-radius: 2px;
	}

	.menu-button::before {
		content: '';
		margin-top: max(-8px, -2vh);
	}

	.menu-button::after {
		content: '';
		margin-top: min(8px, 2vh);
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

	@media (max-width: 700px) {
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
		.nav-menu > li:not(:last-child) {
			border-bottom: 1px solid #444;
		}
	}
</style>
