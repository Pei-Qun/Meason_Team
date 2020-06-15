<template>
  <div>
    <nuxt />
  </div>
</template>

<style>
</style>

<script>
import firebase from 'firebase/app'
export default {
  mounted () {
    const vm = this
    firebase.auth().onAuthStateChanged((userState) => {
      if (userState) {
        // 如果已經登入就繼續
        vm.$store.commit('auth/firebaseAuthState_Change', true)
        vm.$store.commit('auth/id_Change', userState.uid)
        vm.$store.commit('auth/photoURL_Change', userState.photoURL)
        vm.$store.commit('auth/displayName_Change', userState.displayName)
        vm.$store.commit('auth/email_Change', userState.email)
      } else {
        // 如果還沒登入就轉到登入頁
        vm.$store.commit('auth/firebaseAuthState_Change', false)
        vm.$store.commit('auth/id_Change', '')
        vm.$store.commit('auth/photoURL_Change', '')
        vm.$store.commit('auth/displayName_Change', '')
        vm.$store.commit('auth/email_Change', '')
      }
    })
  },
  head: () => {
    return {
      script: [
        {
          src: '/fontawesome.js',
          body: true
        }
      ]
    }
  }
}
</script>
