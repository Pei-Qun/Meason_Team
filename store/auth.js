export const state = () => ({
  firebaseAuthState: false,
  userData: {}
})

export const mutations = {
  firebaseAuthState_Change (state, status) {
    state.firebaseAuthState = status
  },
  userData_Change (state, { data }) {
    const obj = {
      // uid: data.uid,
      // photoURL: data.photoURL,
      // displayName: data.displayName,
      // email: data.email
    }
    console.log(data, obj)
    state.userData = obj
  }
}
