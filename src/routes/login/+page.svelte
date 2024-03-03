<script>
	import { FirebaseCreateUserWithEmailAndPassword } from '../../firebase.js';
</script>

<form on:submit|preventDefault={FirebaseCreateUserWithEmailAndPassword}>
	<input type="email" name="email" placeholder="exemplo@email.com" />
	<input type="password" name="password" placeholder="*******" />
	<button type="submit">Logar</button>
</form>

<style></style>
