<script>
	import FormField from "./form_field.svelte";
    import { enhance } from '$app/forms';

    const emailField = {type: "email", name: "E-mail", id: "email"}
    const nameField = {type: "text", name: "Primeiro nome", minlength: 2, id: "name"}
    const surnameField = {type: "text", name: "Último nome", minlength: 2, id: "surname"}
    const passwordField = {type: "password", name: "Senha", minlength: 6, id: "password"}
    const confirmPasswordField = {type: "password", name: "Confirme a senha", minlength: 6, id: "cpassword"}

    let state = "login";

    function changeToLoginState() {
        state = "login";
    }
    function changeToRegisterState() {
        state = "register";
    }
    function changeToRecoverState() {
        state = "recover";
    }
</script>

<form method="POST" class="auth-form" action="?/{state}">
    <FormField inputProps={emailField}/>
    {#if state == "register"}
        <FormField inputProps={nameField}/>
        <FormField inputProps={surnameField}/>
        <FormField inputProps={passwordField}/>
        <FormField inputProps={confirmPasswordField}/>
        <div class="form-state-btns-div">
            <button class="form-btn blue-theme" on:click|preventDefault={changeToLoginState}>Já tenho uma conta</button>
        </div>
    {:else if state == "login"}
        <FormField inputProps={passwordField}/>
        <div class="form-state-btns-div">
            <button class="form-btn blue-theme" on:click|preventDefault={changeToRecoverState}>Recuperar senha</button>
            <button class="form-btn blue-theme" on:click|preventDefault={changeToRegisterState}>Criar conta</button>
        </div>
    {:else if state == "recover"}
        <div class="form-state-btns-div">
            <button class="form-btn blue-theme" on:click|preventDefault={changeToLoginState}>Já tenho uma conta</button>
            <button class="form-btn blue-theme" on:click|preventDefault={changeToRegisterState}>Criar conta</button>
        </div>
    {/if}
    <button class="form-btn basic-black-theme" type="submit">Enviar</button>
</form>

<style>
    .auth-form {
        display: flex;
        flex-direction: column;
        align-items: center;
        padding: 5vh 0vw;
    }

    .form-btn {
        font-size: 1.2rem;
        border-radius: 1rem;
        cursor: pointer;
        padding: 0.4rem 1.6rem;
        margin: auto;
    }

    .form-state-btns-div {
        width: 35%;
		display: flex;
        align-items: stretch;
        justify-content: space-between;
        margin: 2rem;
    }
</style>