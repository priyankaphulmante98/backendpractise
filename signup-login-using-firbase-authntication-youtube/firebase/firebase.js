import * as firebase from "firebase/app"
import 'firebase/auth'
import 'firebase/firebase-firestore'  //use krenge
import config from  "./config"

firebase.initializeApp(config)

const auth = firebase.auth()

const db = firebase.firestore()

export { auth, db };

