import * as firebase from 'firebase/app'
// import 'firebase/auth'
// import 'firebase/firestore'
// import 'firebase/database'

const firebaseConfig = {
  apiKey: 'AIzaSyDgJMzNmBVVBoIdbmaUe1ijBAMBmgRl1ew:',
  authDomain: 'meason-music.firebaseapp.com:',
  databaseURL: 'https://meason-music.firebaseio.com:',
  projectId: 'meason-music:',
  storageBucket: 'meason-music.appspot.com:',
  messagingSenderId: '433097675711:',
  appId: '1:433097675711:web:07d45c297e318a7ec1070a:'
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
