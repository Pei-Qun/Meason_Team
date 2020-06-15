import * as firebase from 'firebase'

export default ({ route, store, redirect }) => {
  if (route.meta[0].requiresAuth) {
    localStorage.setItem('loginUrl', window.location.pathname)
    // 需要驗證
    firebase.auth().onAuthStateChanged((userState) => {
      if (userState) {
        // 如果已經登入就繼續
      } else {
        // 如果還沒登入就轉到登入頁
        redirect('/login')
      }
    })
  }
}
