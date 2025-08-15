// src/router/index.js
import { createRouter, createWebHistory } from 'vue-router'

// Your pages are in src/components (per your screenshot)
import Home from '../components/Home.vue'
import About from '../components/About.vue'
import Product from '../components/Product.vue'
import Contactus from '../components/Contactus.vue'

// Optional placeholders so other menu items don’t 404
const Products = { template: '<div class="p-4"><h1>Products</h1></div>' }
const Shop = { template: '<div class="p-4"><h1>Shop</h1></div>' }
const Contact = { template: '<div class="p-4"><h1>Contact</h1></div>' }

const routes = [
  { path: '/', name: 'Home', component: Home },
  { path: '/about', name: 'About', component: About },
  { path: '/product', name: 'Product', component: Product },
  { path: '/shop', name: 'Shop', component: Shop },
  { path: '/ContactUs', name: 'Contact', component: Contactus }
]

const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior() {
    return { top: 0 }
  }
})

export default router
