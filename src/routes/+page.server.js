import { fail } from '@sveltejs/kit';
import { auth } from '$lib/firebase';
import {
	createUserWithEmailAndPassword,
	sendPasswordResetEmail,
	confirmPasswordReset,
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

		await signInWithEmailAndPassword(email, password)
			.then(() => {
				return { success: true };
			})
			.catch((err) => {
				if (err.code === 'auth/invalid-credential') {
					return fail(403, { invalidCredentials: true });
				}
				return fail(500, { unknownError: true });
			});
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

		await createUserWithEmailAndPassword(auth, email, password)
			.then((userCredential) => {
				const user = userCredential.user;
				updateProfile(user, { displayName: fullName })
					.then(() => {
						return { success: true };
					})
					.catch(() => {
						return fail(500, { unknownError: true });
					});
			})
			.catch((err) => {
				if (err.code === 'auth/email-already-in-use') {
					return fail(403, { name, surname, takenEmail: true });
				}
				return fail(500, { unknownError: true });
			});
	},
	recover: async ({ request }) => {
		const data = await request.formData();
		const email = data.get('email');

		if (!email) {
			return fail(400, { email, fillEveryField: true });
		}

		try {
			await sendPasswordResetEmail(auth, email);
		} catch (err) {
			return fail(500, { unknownError: true });
		}

		return fail(499, { email, checkCode: true });
	},
	recoverCheck: async ({ request }) => {
		const data = await request.formData();
		const email = data.get('email');
		const password = data.get('password');
		const cpassword = data.get('cpassword');
		const recoverCode = data.get('confirmation_code');

		if (!email || !password || !cpassword || !recoverCode) {
			return fail(400, { password, cpassword, code: recoverCode, fillEveryField: true });
		}

		if (password != cpassword) {
			return fail(400, { code: recoverCode, matchPassword: true });
		}

		await confirmPasswordReset(auth, recoverCode, password)
			.then(() => {
				return { success: true };
			})
			.catch(() => {
				return fail(500, { unknownError: true });
			});
	}
};
