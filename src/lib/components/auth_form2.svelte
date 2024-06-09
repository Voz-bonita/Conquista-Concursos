<script>
	import FormField from "$lib/components/form_field.svelte";
    import { enhance } from '$app/forms';
	import ActionRequired from "$lib/components/action_required.svelte";
	import AuthProviderBtn from "$lib/components/auth_provider_btn.svelte";
    
    let form;  

    $: emailField = {type: "email", lab_text: "E-mail", minlength: 4, id: "email", name: "email", value: form?.email ?? ''}
    $: nameField = {type: "text", lab_text: "Primeiro nome", minlength: 2, id: "name", name: "name", value: form?.name ?? ''}
    $: surnameField = {type: "text", lab_text: "Último nome", minlength: 2, id: "surname", name: "surname", value: form?.surname ?? ''}
    $: passwordField = {type: "password", lab_text: "Senha", minlength: 6, id: "password", name: "password", value: form?.password ?? ''}
    $: confirmPasswordField = {type: "password", lab_text: "Confirme a senha", minlength: 6, id: "cpassword", value: form?.cpassword ?? ''}
    $: recoverCodeField = {type: "text", lab_text: "Código de confirmação", minlength: 1, id: "cpassword", id: "recover-code", value: form?.recoverCode ?? ''}

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

<form method="POST" class="auth-form" action="?/{state}" use:enhance={() => {
    return async ({ result }) => {
        if(result.type === "failure") {
            form = result.data;
            if (result.status == 499) {
                state = "recoverCheck";
            }
        }
    }
}}>
    <AuthProviderBtn />
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
    {:else if state == "recoverCheck"}
        <FormField inputProps={recoverCodeField}/>
        <FormField inputProps={passwordField}/>
        <FormField inputProps={confirmPasswordField}/>
    {/if}
    <button class="form-btn basic-black-theme" type="submit">Enviar</button>
    {#if form?.shortPassword}<ActionRequired>A senha deve conter no mínimo 6 carácteres</ActionRequired>{/if}
    {#if form?.matchPassword}<ActionRequired>As senhas não concidem</ActionRequired>{/if}
    {#if form?.fillEveryField}<ActionRequired>Por favor, preencha todos os campos</ActionRequired>{/if}
    {#if form?.takenEmail}<ActionRequired>O e-mail informado já foi registrado</ActionRequired>{/if}
    {#if form?.invalidCredentials}<ActionRequired>E-mail e/ou senha incorretos</ActionRequired>{/if}
    {#if form?.invalidEmail}<ActionRequired>Por favor, digite um e-mail válido</ActionRequired>{/if}
    {#if form?.unknownError}<ActionRequired>Um erro desconhecido ocorreu</ActionRequired>{/if}
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