import {
  createStore
} from 'vuex'

import cartsModules from './carts/index'
import productsModules from './products/index'
import authenticationModules from './authentication/index'


const store = createStore({
  modules: {
    products: productsModules,
    carts: cartsModules,
    auth: authenticationModules
  }
})

export default store