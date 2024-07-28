import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyB7kpvttPulZHVBi2iZ075_shY6n1n9ZwQ",
  authDomain: "organick-afa5d.firebaseapp.com",
  projectId: "organick-afa5d",
  storageBucket: "organick-afa5d.appspot.com",
  messagingSenderId: "842509436671",
  appId: "1:842509436671:web:322d445b61c1e34fefaeca",
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export default app
