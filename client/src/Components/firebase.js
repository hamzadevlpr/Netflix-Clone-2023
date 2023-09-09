import { initializeApp } from 'firebase/app';
import { getStorage } from 'firebase/storage';

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBucHlGMHmNzHYw1gx6E2fI8AQIEdzwYo4",
    authDomain: "netflix-clone-2023-45327.firebaseapp.com",
    projectId: "netflix-clone-2023-45327",
    storageBucket: "netflix-clone-2023-45327.appspot.com",
    messagingSenderId: "231965100955",
    appId: "1:231965100955:web:e858ad99f03f96f6be2f3e"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Storage
const storage = getStorage(app);

export { storage };