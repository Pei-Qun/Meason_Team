<template>
  <div>
    <div id="firebaseui-auth-container" />
  </div>
</template>
<script>
import firebase from 'firebase/app'
import * as firebaseui from 'firebaseui'
import 'firebaseui/dist/firebaseui.css'
import axios from 'axios'

export default {
  data () {
    return {
      isLoading: false,
      errorCode: ''
    }
  },
  mounted () {
    const vm = this
    const loginUrl = localStorage.getItem('loginUrl')
    const uiConfig = {
      // signInSuccessUrl: '/',
      signInOptions: [
        firebase.auth.GoogleAuthProvider.PROVIDER_ID,
        firebase.auth.FacebookAuthProvider.PROVIDER_ID
      ],
      callbacks: {
        signInSuccessWithAuthResult (result) {
          vm.isLoading = true
          if (firebase.auth().currentUser) {
            firebase.auth().currentUser.getIdToken().then(function (token) {
              // 使用者資料
              const gUser = result.user
              if (result.additionalUserInfo.isNewUser) {
                // 如果是新使用者
                const reqData = {
                  uid: gUser.uid,
                  user: {
                    email: gUser.email,
                    displayName: gUser.displayName,
                    photoURL: gUser.photoURL,
                    echoin: 0,
                    uid: gUser.uid
                  }
                }
                vm.loginApi(reqData, gUser)
              } else {
                vm.isLoading = true
                vm.storeData(gUser)
                vm.$router.push(loginUrl)
              }
            })
          }
        },
        uiShown () {
          vm.isLoading = false
        }
      }
      // signInFlow: "popup"
    }
    // const firebaseConfig = {
    //   apiKey: process.env.apiKey,
    //   authDomain: process.env.authDomain,
    //   databaseURL: process.env.databaseURL,
    //   projectId: process.env.projectId,
    //   storageBucket: process.env.storageBucket,
    //   messagingSenderId: process.env.messagingSenderId
    // }
    // firebase.initializeApp(firebaseConfig)

    // const ui = new firebaseui.auth.AuthUI(firebase.auth())
    let ui = firebaseui.auth.AuthUI.getInstance()
    if (!ui) {
      ui = new firebaseui.auth.AuthUI(firebase.auth())
    }
    ui.start('#firebaseui-auth-container', uiConfig)
  },
  methods: {
    loginApi (req, gUser) {
      const vm = this
      const url = `${process.env.API}/fbLogin`
      const loginUrl = localStorage.getItem('loginUrl')
      axios.post(url, { uid: req.uid, user: req.user }).then((response) => {
        console.log('登入/註冊成功', response)
      }).then(() => {
        vm.storeData(gUser)
        vm.$router.push(loginUrl)
      }).catch(function (error) {
        console.error('寫入使用者資訊錯誤', error)
      })
    },
    storeData (gUser) {
      const vm = this
      vm.$store.commit('auth/firebaseAuthState_Change', true)
      vm.$store.commit('auth/id_Change', gUser.uid)
      vm.$store.commit('auth/photoURL_Change', gUser.photoURL)
      vm.$store.commit('auth/displayName_Change', gUser.displayName)
      vm.$store.commit('auth/email_Change', gUser.email)
    }
  }
}
</script>
