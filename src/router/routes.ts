import { RouteRecordRaw } from 'vue-router';

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    component: () => import('layouts/PublicLayout.vue'),
    children: [
      {
        path: '',
        name: 'Home',
        component: () => import('src/pages/public-pages/HomePage.vue'),
      },
    ],
  },
  {
    path: '/auth',
    component: () => import('layouts/AuthLayout.vue'),
    redirect: {
      name: 'Login',
    },
    children: [
      {
        path: 'login',
        name: 'Login',
        component: () => import('pages/auth-pages/LoginPage.vue'),
      },
      {
        path: 'register',
        name: 'Register',
        component: () => import('pages/auth-pages/RegisterPage.vue'),
      },
    ],
  },
  {
    path: '/app',
    component: () => import('src/layouts/AppLayout.vue'),
    children: [
      {
        path: '',
        name: 'AppDashboard',
        component: () => import('pages/app-pages/DashboardPage.vue'),
      },
      {
        path: 'users',
        name: 'AppUsers',
        component: () => import('pages/app-pages/UsersPage.vue'),
      },
    ],
  },
  // Always leave this as last one,
  // but you can also remove it
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/ErrorNotFound.vue'),
  },
];

export default routes;
