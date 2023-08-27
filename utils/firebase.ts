import { initializeApp } from "firebase/app";
import { FIREBASE_API } from "@/config-global";

const firebaseApp = initializeApp(FIREBASE_API);

export default firebaseApp;
