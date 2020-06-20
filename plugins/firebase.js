import * as firebase from 'firebase/app'
// import 'firebase/auth'
// import 'firebase/firestore'
// import 'firebase/database'

const firebaseConfig = {
  apiKey: process.env.apiKey,
  authDomain: process.env.authDomain,
  databaseURL: process.env.databaseURL,
  projectId: process.env.projectId,
  storageBucket: process.env.storageBucket,
  messagingSenderId: process.env.messagingSenderId
}

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig)
}

// !firebase.apps.length ? firebase.initializeApp(config) : ''
// export const GoogleProvider = new firebase.auth.GoogleAuthProvider()
// export const GoogleProvider = new firebase.auth.GoogleAuthProvider()
// export const auth = firebase.auth()
// export const DB = firebase.database()
// export const StoreDB = firebase.firestore()
// export default firebase
