import { writable } from 'svelte/store';
import { auth } from '$lib/firebase';
import {
	createUserWithEmailAndPassword,
	sendPasswordResetEmail,
	signInWithEmailAndPassword,
	signOut,
	updateEmail,
	updatePassword
} from 'firebase/auth';

export const authStore = writable({
	isLoading: true,
	currentUser: null
});

export const authHandlers = {
	signUp: async (email, password) => {
		await createUserWithEmailAndPassword(auth, email, password);
	},
	signIn: async (email, password) => {
		await signInWithEmailAndPassword(auth, email, password);
	},
	signOut: async () => {
		await signOut(auth);
	},
	resetPassword: async (email) => {
		await sendPasswordResetEmail(email);
	},
	updateEmail: async (email) => {
		await updateEmail(email);
	},
	updatePassword: async (email) => {
		await updatePassword(auth, email);
	}
};
