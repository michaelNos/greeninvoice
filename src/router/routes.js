import store from '../store/auth'

const ifAuthenticated = (to, from, next) => {
  if (store.getters.isAuthenticated(store.state)) {
    next()
    return
  }
  next('/')
}

const ifNotAuthenticated = (to, from, next) => {
  if (!store.getters.isAuthenticated(store.state)) {
    next()
    return
  }
  next('/welcome')
}

const routes = [
  {
    path: '/',
    component: () => import('layouts/MyLayout.vue'),
    children: [
      { path: '', component: () => import('pages/Index.vue') }
    ],
    beforeEnter: ifNotAuthenticated
  },
  {
    path: '/welcome',
    component: () => import('layouts/MyLayout.vue'),
    children: [
      { path: '', component: () => import('pages/Welcome.vue') }
    ],
    beforeEnter: ifAuthenticated
  }
]

// Always leave this as last one
if (process.env.MODE !== 'ssr') {
  routes.push({
    path: '*',
    component: () => import('pages/Error404.vue')
  })
}

export default routes
