<script>
    import ContentDiv from '$lib/components/content_div.svelte'
	import AuthForm from '$lib/components/auth_form.svelte';
    import { authStore } from '$lib/stores/authStore';

    window.onclick = function(event) {
    if (active) {
        const modal = document.getElementById("auth-modal");
        if (event.target == modal) {
            active = false;
        }
    }
    }

    function closeModal() {
        active = false;
    }

    export let active = false;

    authStore.subscribe((current) => {
        if(current.userLogged) {
            active = false;
        }
    })
</script>

{#if active}
    <div class="modal" id="auth-modal">
        <ContentDiv>
            <div class="modal-prompt">
                <p>Faça login para utilizar esta funcionalidade</p>
                <button class="close-modal" on:click|preventDefault={closeModal}>&times</button>
            </div>
            <AuthForm />
        </ContentDiv>
    </div>
{/if}

<style>
    .close-modal {
        background: transparent;
        border: 0px;
        float: right;
        text-align: right;
        color: rgb(245, 64, 64);
        font-size: 2rem;
        font-weight: bold;
        &:hover {
            cursor: pointer;
        }
    }

    .modal {
        position: fixed;
        z-index: 1;
        padding-top: 5vh;
        left: 0;
        top: 0;
        width: 100%;
        height: 100%;
        background-color: rgb(0,0,0);
        background-color: rgba(0,0,0,0.4);
        overflow: auto;
        display: flex;
        flex-direction: column;
        align-items: center;
    }

    .modal-prompt {
        display: flex;
        justify-content: space-between;
        font-size: 1.3rem;
    }
</style>