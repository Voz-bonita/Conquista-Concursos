// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth';
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
