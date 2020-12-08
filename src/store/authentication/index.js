import usersMutations from './mutations'
import usersActions from './actions'
import usersGetters from './getters'

export default {
  namespaced: true,
  state() {
    return {
      isLoggedIn: false,
    }
  },
  mutations: usersMutations,
  actions: usersActions,
  getters: usersGetters
}