import { createRouter, createWebHistory } from 'vue-router';
import HomePage from '@/views/HomePage';
import RegisterPage from '@/views/RegisterPage';

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

]

const router = createRouter({
  history: createWebHistory(),
  routes: routes
})

export default router
