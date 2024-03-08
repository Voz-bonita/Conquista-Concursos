// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import {
	getAuth,
	createUserWithEmailAndPassword,
	GoogleAuthProvider,
	signInWithPopup,
	signInWithRedirect,
	getRedirectResult,
	setPersistence,
	browserLocalPersistence
} from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
	apiKey: 'AIzaSyBySdqy9nlvaVouCtUw5uvPw3LF6jaTQnw',
	authDomain: 'conquista-concursos-c7e0a.firebaseapp.com',
	projectId: 'conquista-concursos-c7e0a',
	storageBucket: 'conquista-concursos-c7e0a.appspot.com',
	messagingSenderId: '507368556518',
	appId: '1:507368556518:web:b48ea17c9cb999314e7827',
	measurementId: 'G-KYEDRRWFHM'
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app);

export const FirebaseCreateUserWithEmailAndPassword = (e) => {
	const form = e.target;
	const email = form.email.value;
	const password = form.password.value;
	createUserWithEmailAndPassword(auth, email, password)
		.then((userCredential) => {
			// Signed up
			const user = userCredential.user;
			console.log(user);
			// ...
		})
		.catch((error) => {
			const errorCode = error.code;
			const errorMessage = error.message;
			// ..
		});
};

const provider = new GoogleAuthProvider();
export const FirebaseLoginWithGoogle = (e) => {
	if (window.outerWidth <= 700) {
		signInWithRedirect(auth, provider);
		getRedirectResult(auth)
			.then((result) => {
				// This gives you a Google Access Token. You can use it to access Google APIs.
				const credential = GoogleAuthProvider.credentialFromResult(result);
				const token = credential.accessToken;

				// The signed-in user info.
				const user = result.user;
				console.log(user);
				// IdP data available using getAdditionalUserInfo(result)
				// ...
			})
			.catch((error) => {
				// Handle Errors here.
				const errorCode = error.code;
				const errorMessage = error.message;
				// The email of the user's account used.
				const email = error.customData.email;
				// The AuthCredential type that was used.
				const credential = GoogleAuthProvider.credentialFromError(error);
				// ...
			});
	} else {
		setPersistence(auth, browserLocalPersistence)
			.then(() => {
				// Existing and future Auth states are now persisted in the current
				// session only. Closing the window would clear any existing state even
				// if a user forgets to sign out.
				// ...
				// New sign-in will be persisted with session persistence.
				return signInWithPopup(auth, provider);
			})
			.catch((error) => {
				// Handle Errors here.
				const errorCode = error.code;
				const errorMessage = error.message;
			});
	}
};
