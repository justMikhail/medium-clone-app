import { createRouter, createWebHashHistory } from 'vue-router';
import HomePage from '@/views/HomePage';
import Register from '@/views/Register';

const AppRoutes = [
  {
    path: '/',
    name: 'HomePage',
    component: HomePage
  },
  {
    path: '/register',
    name: 'register',
    component: Register
  },

]

const appRouter = createRouter({
  history: createWebHashHistory(),
  routes: AppRoutes
})

export default appRouter
