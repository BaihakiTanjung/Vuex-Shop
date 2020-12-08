export default {
  addProductToCart(context, payload) {
    // console.log(context.rootState.carts.cart)
    context.commit('addProductToCart', payload)
  },
  removeProductFromCart(context, payload) {
    context.commit('removeProductFromCart', payload)
  }
}