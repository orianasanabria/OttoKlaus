import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [{
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/login',
    name: 'Login',
    component: () => import( /* webpackChunkName: "login" */ '../views/Login.vue')
  },
  {
    path: '/inventario',
    name: 'Inventario',
    component: () => import( /* webpackChunkName: "inventario" */ '../views/Inventario.vue')
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

router.beforeEach((to, from, next) => {
  const isAuthenticated = localStorage.getItem("login")
  if (to.name !== 'Login' && !isAuthenticated) next({
    name: 'Login'
  })
  else if (to.name === 'Login' && isAuthenticated) next({
    name: 'Home'
  })
  else next()
})

export default router;