<script>
	import { FirebaseCreateUserWithEmailAndPassword } from '../../firebase.js';
</script>

<section class="green-theme login-section">
	<form on:submit|preventDefault={FirebaseCreateUserWithEmailAndPassword} class="login-form">
		<div class="login-data">
			<input type="email" name="email" placeholder="exemplo@email.com" />
			<input type="password" name="password" placeholder="*******" />
		</div>
		<div class="login-interaction">
			<button type="button">Criar conta</button>
			<button type="submit">Logar</button>
		</div>
	</form>
</section>

<style>
	.login-section {
		display: flex;
		justify-content: center;
	}
	.login-form {
		display: flex;
		flex-direction: column;
		justify-content: center;
		min-height: 84vh;
		width: 40vw;
	}

	.login-data {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
	}

	.login-interaction {
		display: flex;
		justify-content: space-evenly;
	}

	form > div > input {
		padding: 1vh;
		margin: 1vh;
		width: 30vw;
		height: 3vh;
		border-radius: 20px;
	}

	form > div > button {
		width: 10vw;
		height: 5vh;
		border-radius: 20px;
		background: rgb(55, 55, 55);
		color: white;
		cursor: pointer;
	}
</style>
