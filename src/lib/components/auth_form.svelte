<script>
	import { authHandlers } from '$lib/stores/authStore';
	import AuthProviderBtn from '$lib/components/auth_provider_btn.svelte';

	let register = false;
	let recover = false;
	let recoverMessage = '';
	var anyError = false;
	var errorMessage = '';
	let name = '';
	let surname = '';
	let email = '';
	let password = '';
	let confirmPassword = '';
	let checkTerms = false;
	let checkPolitics = false;

	async function handleSubmit() {
		if (
			register &&
			!recover &&
			email &&
			password &&
			name &&
			surname &&
			checkPolitics &&
			checkTerms
		) {
			if (password === confirmPassword) {
				const fullName = `${name} ${surname}`;
				const signUpResult = await authHandlers.signUp(fullName, email, password);
				if (signUpResult !== '200') {
					anyError = true;
					switch (signUpResult.code) {
						case 'auth/email-already-in-use':
							errorMessage = 'E-mail já cadastrado';
							break;
					}
				}
			} else {
				anyError = true;
				errorMessage = 'Senhas não coincidem';
			}
		} else if (!register && !recover && email && password) {
			await authHandlers.signIn(email, password).catch((error) => {
				const code = error.code;
				anyError = true;
				switch (code) {
					case 'auth/invalid-credential':
						errorMessage = 'E-mail e/ou senha inválida';
						break;
				}
			});
		} else if (recover && email) {
			await authHandlers.resetPassword(email);
			recoverMessage = 'E-mail de recuperação enviado';
		} else {
			anyError = true;
			errorMessage = 'Preencha todos os campos';
		}
	}
</script>

<!-- TODO
	Prettify the Frontend
	Add responsiveness by media query
	Send e-mail verification
	Add general error message
 -->
<section class="green-theme login-section">
	<form on:submit|preventDefault={handleSubmit} class="login-form">
		<div class="provider-div">
			<AuthProviderBtn />
		</div>

		<div class="login-data">
			{#if register}
				<input
					bind:value={name}
					type="text"
					minlength="2"
					name="name"
					placeholder="Primeiro mome"
				/>
				<input
					bind:value={surname}
					type="text"
					minlength="2"
					name="surname"
					placeholder="Último nome"
				/>
			{/if}
			<input bind:value={email} type="email" name="email" placeholder="exemplo@email.com" />
			{#if !recover}
				<input bind:value={password} type="password" name="password" placeholder="Senha" />
			{/if}
			{#if register}
				<input
					bind:value={confirmPassword}
					type="password"
					name="confirmPassword"
					placeholder="Confirme a senha"
				/>
				<label class="terms" for="useTerms">
					<input type="checkbox" id="useTerms" name="useTerms" bind:value={checkTerms} />
					<label for="useTerms"
						>Declaro que li e concordo com os <a
							href="/termosDeUso"
							target="_blank"
							rel="noopener noreferrer">Termos de Uso e de Serviço</a
						></label
					>
				</label>
				<label class="terms" for="usePolitics">
					<input type="checkbox" id="usePolitics" name="usePolitics" bind:value={checkPolitics} />
					<label for="usePolitics"
						>Declaro que li e concordo com a <a
							href="/politicasDePrivacidade"
							target="_blank"
							rel="noopener noreferrer">Política de Privacidade</a
						></label
					>
				</label>
			{/if}
			{#if anyError}
				<p class="error-message">{errorMessage}</p>
			{/if}
		</div>
		<div class="login-interaction">
			<div class="login-alternatives">
				{#if !register && !recover}
					<button
						type="button"
						class="forgot-password"
						on:click={() => {
							recover = true;
							register = false;
						}}
					>
						Esqueci minha senha
					</button>
				{/if}
				{#if recover}
					<p class="recover-sent">{recoverMessage}</p>
				{/if}
			</div>

			<div class="login-buttons">
				{#if recover}
					<button
						type="button"
						on:click|preventDefault={() => {
							register = false;
							recover = false;
							anyError = false;
						}}>Voltar ao login</button
					>
				{/if}
				<button
					type="button"
					on:click|preventDefault={() => {
						register = !register;
						anyError = false;
					}}>{register ? 'Já tenho uma conta' : 'Criar conta'}</button
				>
				<button type="submit"
					>{register ? 'Finalizar cadastro' : recover ? 'Recuperar' : 'Login'}</button
				>
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

	.provider-div {
		display: flex;
		justify-content: center;
		margin-bottom: 2vh;
	}
	.error-message {
		font-size: 1.1vw;
		color: red;
		text-decoration: underline;
	}

	.forgot-password {
		background-color: transparent;
		text-decoration: underline;
		color: peru;
		border: none;
		cursor: pointer;
		min-width: 20vw;
	}

	.recover-sent {
		color: rgb(0, 0, 0);
		font-size: 1vw;
		text-decoration: underline;
	}
	.terms {
		display: flex;
		flex-direction: row;
		font-size: 1vw;
		margin-right: auto;
		margin-left: 5vw;
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
