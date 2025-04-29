// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDtcMWmA3Xr5SwiThHERMwZOJt0C796HpU",
  authDomain: "netflix-gpt-442ff.firebaseapp.com",
  projectId: "netflix-gpt-442ff",
  storageBucket: "netflix-gpt-442ff.firebasestorage.app",
  messagingSenderId: "712032430159",
  appId: "1:712032430159:web:775fc1ef75fe7bddb4a23a",
  measurementId: "G-MWVET33BNL"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
// const auth = getAuth();
// export default auth;