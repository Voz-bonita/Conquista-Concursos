<div class="nav-div">
	<div class="nav-title">
		<img src="award_star.svg" alt="" />
		<a href="/">Conquista Concursos</a>
	</div>
	<ul>
		<li><a href="/simulados" class="simulado">Simulados do CNU</a></li>
		<li><a href="/sobre">Sobre</a></li>
		<li><a href="/">Login</a></li>
	</ul>
</div>

<style>
	.nav-div {
		display: flex;
		justify-content: space-between;
		align-items: center;
		padding: 15px 3%;
		background: rgb(241, 241, 241);
		height: 30px;
	}

	.nav-title a {
		text-decoration: none;
		color: black;
		font-size: large;
		font-weight: bold;
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
		padding: 15px 25px;
		border-radius: 20px;
		transition: 0.3s;
		cursor: pointer;
	}

	ul li a:hover {
		box-shadow: 0 0 0 0.1rem black;
		font-size: 50;
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
</style>
