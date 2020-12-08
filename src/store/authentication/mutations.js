export default {
  usersSetting(state, payload) {
    state.isLoggedIn = payload.users
  }
}