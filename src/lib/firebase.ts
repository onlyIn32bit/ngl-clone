import { initializeApp, type FirebaseApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getAnalytics } from 'firebase/analytics';

const firebaseConfig = {
	apiKey: 'AIzaSyBUCVl1n17cRXRTbxSEJU6BLzleta44HG4',
	authDomain: 'dedu-8d0ce.firebaseapp.com',
	projectId: 'dedu-8d0ce',
	storageBucket: 'dedu-8d0ce.appspot.com',
	messagingSenderId: '187420501022',
	appId: '1:187420501022:web:3882e30e5da28986cdfa0f',
	measurementId: 'G-BTG8P7C7QY'
};

const app: FirebaseApp = initializeApp(firebaseConfig);
const db = getFirestore(app);
// const analytics = getAnalytics(app);

export { app, db };
