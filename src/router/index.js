import { createRouter, createWebHashHistory } from 'vue-router'
// import the components...
import ProductView from '../views/ProductView/ProductView.vue'
import CategoryView from '../views/CategoryView/CategoryView.vue'
import UserView from '../views/UserView/UserView.vue'
// define the routes...
const routes = [
  {
    path: '/',
    name: 'product',
    component: ProductView
  },
  {
    path: '/categories',
    name: 'Categories',
    component: CategoryView
  },
  {
    path: '/users',
    name: 'Users',
    component: UserView
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
