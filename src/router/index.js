import { createRouter, createWebHistory } from 'vue-router';
import RegisterPage from '@/views/RegisterPage';
import LoginPage from '@/views/LoginPage';
import HomePage from '@/views/HomePage';

const routes = [
  {
    path: '/',
    name: 'global-feed',
    component: HomePage
  },
  {
    path: '/register',
    name: 'register',
    component: RegisterPage
  },
  {
    path: '/login',
    name: 'login',
    component: LoginPage
  },
  {
    path: '/login',
    name: 'login',
    component: LoginPage
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes: routes
})

export default router
