export default {
  carts(state) {
    return state.cart
  },
  products(state) {
    return state.cart.items
  },
  totalSum(state) {
    return state.cart.total
  },
  quantity(state) {
    return state.cart.qty
  }
}