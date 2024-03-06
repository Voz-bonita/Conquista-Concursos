<script>
	import {
		FirebaseCreateUserWithEmailAndPassword,
		FirebaseLoginWithGoogle
	} from '../../firebase.js';
</script>

<section class="green-theme login-section">
	<form on:submit|preventDefault={FirebaseCreateUserWithEmailAndPassword} class="login-form">
		<div class="provider-div">
			<button type="button" class="provider-btn" on:click={FirebaseLoginWithGoogle}
				><div class="provider-login">
					<img src="gmail.svg" alt="" width="100%" height="70%" />
					<span class="provider-text"> Login com Google </span>
				</div></button
			>
		</div>
		<div class="login-data">
			<input type="email" name="email" placeholder="exemplo@email.com" />
			<input type="password" name="password" placeholder="*******" />
		</div>
		<div class="login-interaction">
			<div class="login-alternatives">
				<a href="/">Esqueci minha senha</a>
			</div>
			<div class="login-buttons">
				<button type="button">Criar conta</button>
				<button type="submit">Logar</button>
			</div>
		</div>
	</form>
</section>

<style>
	.login-section {
		display: flex;
		justify-content: center;
		font-size: 1vw;
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

	.login-buttons {
		display: flex;
		justify-content: space-evenly;
	}

	.login-alternatives {
		display: flex;
		flex-direction: column;
		align-items: center;
		margin-bottom: 1vh;
	}

	form > div > input {
		padding: 1vh;
		margin: 1vh;
		width: 30vw;
		height: 3vh;
		border-radius: 20px;
	}

	button {
		width: 10vw;
		height: 5vh;
		border-radius: 20px;
		background: rgb(55, 55, 55);
		color: white;
		cursor: pointer;
		font-size: 1vw;
	}

	.provider-btn {
		background: whitesmoke;
		color: black;
		width: 15vw;
		height: 7vh;
	}

	.provider-login {
		display: grid;
		grid-template-columns: 20% 80%;
		justify-content: center;
		align-items: center;
	}

	.provider-text {
		font-size: 1.2vw;
	}
	.provider-div {
		display: flex;
		justify-content: center;
	}

	@media screen and (orientation: portrait), screen and (max-width: 700px) {
		.login-section {
			font-size: 3.4vw;
		}
		.login-form {
			width: 80vw;
		}

		form > div > input {
			width: 70vw;
		}

		button {
			width: 30vw;
			font-size: 3.4vw;
		}
	}
</style>
