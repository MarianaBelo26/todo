import { initializeApp } from "firebase/app"
import { getFirestore } from "firebase/firestore"

const firebaseConfig = {
    apiKey: "",
    authDomain: "",
    projectId: "",
    StorageBucket: "",
    messagingSenderId: "ID",
    appId: "APP_ID"
}

const app = initializeApp(firebaseConfig)
const db = getFirestore(app)

export {db}