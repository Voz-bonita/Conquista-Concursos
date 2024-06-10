import { fail } from '@sveltejs/kit';
import { auth } from '$lib/firebase';
import {
	createUserWithEmailAndPassword,
	sendPasswordResetEmail,
	signInWithEmailAndPassword,
	updateProfile
} from 'firebase/auth';

export const actions = {
	login: async ({ request }) => {
		const data = await request.formData();
		const email = data.get('email');
		const password = data.get('password');

		if (password.length < 6) {
			return fail(400, { email, shortPassword: true });
		}

		if (!email || !password) {
			return fail(400, { email, fillEveryField: true });
		}

		try {
			await signInWithEmailAndPassword(auth, email, password);
			return { success: true };
		} catch (err) {
			console.log(err);
			if (err.code === 'auth/invalid-credential') {
				return fail(403, { email, invalidCredentials: true });
			} else if (err.code === 'auth/invalid-email') {
				return fail(403, { invalidEmail: true });
			}
		}

		return fail(500, { unknownError: true });
	},
	register: async ({ request }) => {
		const data = await request.formData();
		const email = data.get('email');
		const name = data.get('name');
		const surname = data.get('surname');
		const password = data.get('password');
		const cpassword = data.get('cpassword');

		if (password.length < 6) {
			return fail(400, { email, shortPassword: true });
		}

		if (password != cpassword) {
			return fail(400, { email, name, surname, matchPassword: true });
		}

		if (!email || !name || !surname || !password || !cpassword) {
			return fail(400, { email, name, surname, password, cpassword, fillEveryField: true });
		}

		const fullName = `${name} ${surname}`;

		try {
			await createUserWithEmailAndPassword(auth, email, password).then((userCredential) => {
				const user = userCredential.user;
				updateProfile(user, { displayName: fullName });
			});
			return { success: true };
		} catch (err) {
			if (err.code === 'auth/email-already-in-use') {
				return fail(403, { name, surname, password, cpassword, takenEmail: true });
			} else if (err.code === 'auth/invalid-email') {
				return fail(403, { invalidEmail: true });
			}
		}

		return fail(500, { unknownError: true });
	},
	recover: async ({ request }) => {
		const data = await request.formData();
		const email = data.get('email');

		if (!email) {
			return fail(400, { email, fillEveryField: true });
		}

		try {
			await sendPasswordResetEmail(auth, email);
			return { email, success: true, checkEmail: true };
		} catch (err) {
			if (err.code === 'auth/invalid-email') {
				return fail(403, { invalidEmail: true });
			}
		}
		return fail(500, { unknownError: true });
	}
};
