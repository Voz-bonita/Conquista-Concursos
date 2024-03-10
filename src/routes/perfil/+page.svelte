<script>
	import { authStore } from '$lib/stores/authStore';

	let name;
	authStore.subscribe((curr) => {
		name = curr?.currentUser?.email;
	});
</script>

{#if $authStore.currentUser}
	{name}
{:else}
	<div>Carregando...</div>
{/if}

<style>
</style>
