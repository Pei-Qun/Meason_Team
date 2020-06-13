export const state = () => ({
  firebaseAuthState: false,
  userData_id: '',
  userData_photoURL: '',
  userData_displayName: '',
  userData_email: ''
})

export const mutations = {
  firebaseAuthState_Change (state, status) {
    state.firebaseAuthState = status
  },
  id_Change (state, data) {
    state.userData_id = data
  },
  photoURL_Change (state, data) {
    state.userData_photoURL = data
  },
  displayName_Change (state, data) {
    state.userData_displayName = data
  },
  email_Change (state, data) {
    state.userData_email = data
  }
}
