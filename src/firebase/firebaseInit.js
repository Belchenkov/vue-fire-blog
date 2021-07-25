import firebase from 'firebase/app';
import 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyCsGacpopgHWTvg_s29Ul_aYBXsBdokWr8",
    authDomain: "vue-fire-blog-ca9ca.firebaseapp.com",
    projectId: "vue-fire-blog-ca9ca",
    storageBucket: "vue-fire-blog-ca9ca.appspot.com",
    messagingSenderId: "177319490879",
    appId: "1:177319490879:web:0889c46e46451ef5468f8a"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const timestamp = firebase.firestore.FieldValue.serverTimestamp;

export { timestamp };
export default firebaseApp.firestore();