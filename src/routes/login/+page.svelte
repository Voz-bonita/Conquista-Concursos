<script>
	import AuthForm from '$lib/components/auth_form.svelte';
	import { authStore } from '$lib/stores/authStore';
	import { goto } from '$app/navigation';

	export let data;

	authStore.subscribe((current) => {
		if (current.userLogged) {
			goto(`/${data.origin}`)
		} 
	})
</script>

<AuthForm />
