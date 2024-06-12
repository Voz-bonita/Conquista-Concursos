<script>
	import AuthForm from '$lib/components/auth_form.svelte';
	import { authStore } from '$lib/stores/authStore';
	import { goto, beforeNavigate } from '$app/navigation';

	export let data;

	const unsubscribe = authStore.subscribe((current) => {
		if (current.userLogged) {
			goto(`/${data.origin}`);
		}
	});

	beforeNavigate(() => {
		unsubscribe();
	})
</script>

<div style="border-top: 1px solid black">
	<AuthForm />
</div>
