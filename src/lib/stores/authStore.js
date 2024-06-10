import { writable } from 'svelte/store';
import { auth } from '$lib/firebase';
import { signOut, GoogleAuthProvider } from 'firebase/auth';

export const GoogleProvider = new GoogleAuthProvider();

export const authStore = writable({
	currentUser: null,
	userLogged: false
});

export const authHandlers = {
	signOut: async () => {
		await signOut(auth);
	}
};
