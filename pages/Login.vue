<template>
  <main>
    <Menu />
    <Banner zone="publication" title="立即登入" bio="請登入以繼續" />
    <div id="firebaseui-auth-container" />
  </main>
</template>
<script>
import firebase from 'firebase/app'
import * as firebaseui from 'firebaseui'
// import 'firebaseui/dist/firebaseui.css'
import axios from 'axios'
import Menu from '~/components/Menu.vue'
import Banner from '~/components/Banner.vue'
import '~/assets/scss/_custom_firebaseui.scss'

export default {
  components: {
    Menu, Banner
  },
  data () {
    return {
      isLoading: false,
      errorCode: ''
    }
  },
  mounted () {
    const vm = this
    const uiConfig = {
      // signInSuccessUrl: '/',
      signInOptions: [
        // firebase.auth.FacebookAuthProvider.PROVIDER_ID,
        firebase.auth.GoogleAuthProvider.PROVIDER_ID
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
                vm.$router.push('/posts/add_post')
              }
            })
          }
        },
        uiShown () {
          vm.isLoading = false
        }
      },
      signInFlow: 'popup'
    }
    let ui = firebaseui.auth.AuthUI.getInstance()
    if (!ui) {
      ui = new firebaseui.auth.AuthUI(firebase.auth())
    }
    ui.start('#firebaseui-auth-container', uiConfig)
  },
  methods: {
    loginApi (req, gUser) {
      const vm = this
      const url = 'https://glacial-bayou-94392.herokuapp.com/fbLogin'
      axios.post(url, { uid: req.uid, user: req.user }).then((response) => {
        // console.log('登入/註冊成功', response)
      }).then(() => {
        vm.storeData(gUser)
        vm.$router.push('/publication')
      }).catch(function (error) {
        console.error('寫入使用者資訊錯誤', error)
      })
    },
    storeData (gUser) {
      const vm = this
      // vm.$store.commit('auth/firebaseAuthState_Change', true)
      vm.$store.commit('auth/id_Change', gUser.uid)
      vm.$store.commit('auth/photoURL_Change', gUser.photoURL)
      vm.$store.commit('auth/displayName_Change', gUser.displayName)
      vm.$store.commit('auth/email_Change', gUser.email)
    }
  },
  head () {
    return {
      title: '登入或註冊',
      meta: [
        {
          hid: 'Meason Team',
          name: 'Meason Team',
          content: '迷聲音樂開發團隊及平台介紹'
        }, {
          name: 'twitter:title',
          content: '登入或註冊'
        }, {
          name: 'twitter:description',
          content: '迷聲音樂開發團隊及平台介紹'
        }, {
          name: 'twitter:image',
          content: this.$store.state.metaImg
        }, {
          name: 'twitter:card',
          content: this.$store.state.metaImg
        }, {
          name: 'og:title',
          content: '登入或註冊'
        }, {
          name: 'og:description',
          content: '迷聲音樂開發團隊及平台介紹'
        }, {
          name: 'og:type',
          content: 'music'
        }, {
          name: 'og:image',
          content: this.$store.state.metaImg
        }, {
          itemprop: 'image',
          content: this.$store.state.metaImg
        }, {
          itemprop: 'description',
          content: '迷聲音樂開發團隊及平台介紹'
        }
      ]
    }
  }
}
</script>
