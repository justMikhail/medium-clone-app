import { createRouter, createWebHistory } from 'vue-router';
import HomePage from '@/views/HomePage';
import RegisterPage from '@/views/RegisterPage';
import LoginPage from '@/views/LoginPage';

const routes = [
  {
    path: '/',
    name: 'home',
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
]

const router = createRouter({
  history: createWebHistory(),
  routes: routes
})

export default router
