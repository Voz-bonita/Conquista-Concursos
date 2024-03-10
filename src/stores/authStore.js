import { writable } from 'svelte/store';
import { auth } from '$lib/firebase';
import {
	createUserWithEmailAndPassword,
	sendPasswordResetEmail,
	signInWithEmailAndPassword,
	signOut,
	updateEmail,
	updatePassword,
	GoogleAuthProvider,
	signInWithPopup,
	signInWithRedirect,
	updateProfile
} from 'firebase/auth';

const provider = new GoogleAuthProvider();
export const authStore = writable({
	isLoading: true,
	currentUser: null
});

export const authHandlers = {
	signUp: async (name, email, password) => {
		try {
			await createUserWithEmailAndPassword(auth, email, password);
			await updateProfile(auth.currentUser, { displayName: name });
			return '200';
		} catch (err) {
			return err;
		}
	},
	signIn: async (email, password) => {
		await signInWithEmailAndPassword(auth, email, password);
	},
	signOut: async () => {
		await signOut(auth);
	},
	resetPassword: async (email) => {
		await sendPasswordResetEmail(auth, email);
	},
	updateEmail: async (email) => {
		await updateEmail(email);
	},
	updatePassword: async (email) => {
		await updatePassword(auth, email);
	},
	GoogleSignIn: async () => {
		await signInWithPopup(auth, provider);
	},
	GoogleMobileSignIn: async () => {
		await signInWithRedirect(auth, provider);
	}
};
