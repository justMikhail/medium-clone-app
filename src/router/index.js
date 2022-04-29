import { createRouter, createWebHashHistory } from 'vue-router';
import Home from '@/views/Home';
import Register from '@/views/Register';

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/register',
    name: 'register',
    component: Register
  },

]

const appRouter = createRouter({
  history: createWebHashHistory(),
  routes
})

export default appRouter
