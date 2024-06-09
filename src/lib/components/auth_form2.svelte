<script>
	import FormField from "$lib/components/form_field.svelte";
    import { enhance } from '$app/forms';
    import { auth } from '$lib/firebase';
    import { signInWithEmailAndPassword } from 'firebase/auth';
	import ActionRequired from "$lib/components/action_required.svelte";
	import AuthProviderBtn from "$lib/components/auth_provider_btn.svelte";

    let form;  

    $: emailField = {type: "email", lab_text: "E-mail", minlength: 4, id: "email", name: "email", value: form?.email ?? ''}
    $: nameField = {type: "text", lab_text: "Primeiro nome", minlength: 2, id: "name", name: "name", value: form?.name ?? ''}
    $: surnameField = {type: "text", lab_text: "Último nome", minlength: 2, id: "surname", name: "surname", value: form?.surname ?? ''}
    $: passwordField = {type: "password", lab_text: "Senha", minlength: 6, id: "password", name: "password", value: form?.password ?? ''}
    $: confirmPasswordField = {type: "password", lab_text: "Confirme a senha", minlength: 6, id: "cpassword", name: "cpassword", value: form?.cpassword ?? ''}
    $: recoverCodeField = {type: "text", lab_text: "Código de confirmação", minlength: 1, id: "recover-code", name: "recover-code", value: form?.recoverCode ?? ''}

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

<form method="POST" class="auth-form" action="?/{state}" use:enhance={({ formData }) => {
    console.log();
    return async ({ result, update }) => {
        if(result.type === "failure") {
            form = result.data;
            if (result.status == 499) {
                state = "recoverCheck";
            }
        } else {
            const email = formData.get("email");
            const password = formData.get("password");
            await signInWithEmailAndPassword(auth, email, password);
            update();
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
        <button class="form-btn blue-theme submit-btn" type="submit">Criar</button>
        <div class="form-state-btns-div">
            <button class="form-btn basic-black-theme" on:click|preventDefault={changeToLoginState}>Já tenho uma conta</button>
        </div>
    {:else if state == "login"}
        <FormField inputProps={passwordField}/>
        <button class="form-btn blue-theme submit-btn" type="submit">Entrar</button>
        <div class="form-state-btns-div">
            <button class="form-btn basic-black-theme" on:click|preventDefault={changeToRecoverState}>Recuperar senha</button>
            <button class="form-btn basic-black-theme" on:click|preventDefault={changeToRegisterState}>Criar conta</button>
        </div>
    {:else if state == "recover"}
        <button class="form-btn blue-theme submit-btn" type="submit">Recuperar</button>
        <div class="form-state-btns-div">
            <button class="form-btn basic-black-theme" on:click|preventDefault={changeToLoginState}>Já tenho uma conta</button>
            <button class="form-btn basic-black-theme" on:click|preventDefault={changeToRegisterState}>Criar conta</button>
        </div>
    {:else if state == "recoverCheck"}
        <FormField inputProps={recoverCodeField}/>
        <FormField inputProps={passwordField}/>
        <FormField inputProps={confirmPasswordField}/>
        <button class="form-btn blue-theme submit-btn" type="submit">Confirmar</button>
    {/if}
    
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
        border-radius: 0.3rem;
        cursor: pointer;
        padding: 0.4rem 1.6rem;
        text-align: center;
        min-width: fit-content;
        flex: 1;
    }

    .form-state-btns-div {
        width: min(25rem, 80vw);
		display: flex;
        align-items: stretch;
        justify-content: center;
        gap: 1rem;
        margin: 2rem;
    }

    .submit-btn {
        margin-top: 1rem;
        width: min(20rem, 70vw);
        height: 3rem;
        border: 0.1rem solid rgb(27, 78, 99);
        box-shadow: 0rem 0.3rem 5px rgb(53, 84, 187);
        transition: 200ms;
        &:hover {
            box-shadow: 0rem 0.5rem 5px rgb(53, 84, 187);
        }
    }

    @media screen and (max-width: 600px) {
        .form-state-btns-div {
            display: grid;
            grid-auto-rows: 1fr;
            justify-content: center;
            gap: 1rem;
        }
    }
</style>