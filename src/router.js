import {
  createRouter,
  createWebHistory
} from 'vue-router';
import {
  defineAsyncComponent
} from 'vue'

// import ProductsList from './pages/ProductsList.vue';
// import UserCart from './pages/UserCart.vue';
// import ShopAdmin from './pages/ShopAdmin.vue';

const ProductsList = defineAsyncComponent(() => import('./pages/ProductsList.vue'));
const UserCart = defineAsyncComponent(() => import('./pages/UserCart.vue'))
const ShopAdmin = defineAsyncComponent(() => import('./pages/ShopAdmin.vue'))

const router = createRouter({
  history: createWebHistory(),
  routes: [{
      path: '/',
      redirect: '/products'
    },
    {
      path: '/products',
      component: ProductsList
    },
    {
      path: '/cart',
      component: UserCart
    },
    {
      path: '/admin',
      component: ShopAdmin
    },
  ]
});

export default router;