import { initializeApp, type FirebaseApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getAnalytics, isSupported } from 'firebase/analytics';

const firebaseConfig = {
	apiKey: 'AIzaSyAgxVMiQLpYg8FjdqyYkqcQJlqH60YkXE0',
	authDomain: 'ngl-clone-f8634.firebaseapp.com',
	projectId: 'ngl-clone-f8634',
	storageBucket: 'ngl-clone-f8634.firebasestorage.app',
	messagingSenderId: '87689311826',
	appId: '1:87689311826:web:7472ee6f294a8a9a2e118b',
	measurementId: 'G-22MC3CGQQP'
};

const app: FirebaseApp = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { app, db };
