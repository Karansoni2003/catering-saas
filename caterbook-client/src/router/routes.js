const routes = [
 {
    path: '/',
    component: () => import('@/layouts/MainLayout.vue'),
    children: [ 
      { path: '', component: () => import('@/pages/IndexPage.vue') },
     
    ], 
  },
  {
    path: '/auth',
    component: () => import('@/layouts/AuthLayout.vue'),
    children: [ 
      { path: 'signup', component: () => import('@/pages/SignUpPage.vue') },
      { path: 'login', component: () => import('@/pages/LoginPage.vue') },
    ], 
  },
  {
    path: '/app',
    component: () => import('@/layouts/MainLayout.vue'),

 meta: {
    requiresAuth: true
  },


    children: [
      { path: '', component: () => import('@/pages/IndexPage.vue') },
      { path: 'dashboard', component: () => import('@/pages/DashboardPage.vue') },
    ], 
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '/:catchAll(.*)*',
    component: () => import('@/pages/ErrorNotFound.vue'),
  }
]

export default routes
