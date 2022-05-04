import { createRouter, createWebHistory } from 'vue-router';
import RegisterPage from '@/views/RegisterPage';
import LoginPage from '@/views/LoginPage';
import HomePage from '@/views/HomePage';

const routes = [
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
  {
    path: '/',
    name: 'global-feed',
    component: HomePage
  },
  {
    path: '/feed',
    name: 'your-feed',
    component: HomePage
  },
  {
    path: '/tags/:slug',
    name: 'tag',
    component: HomePage
  },
  {
    path: '/articles/new',
    name: 'createArticle',
    component: HomePage
  },
  {
    path: '/articles/:slug',
    name: 'article',
    component: HomePage
  },
  {
    path: '/articles/:slug/edit',
    name: 'editArticle',
    component: HomePage
  },
  {
    path: '/settings',
    name: 'settings',
    component: HomePage
  },
  {
    path: '/profiles/:slug',
    name: 'userProfile',
    component: HomePage
  },
  {
    path: '/profiles/:slug/favorites',
    name: 'userProfileFavorites',
    component: HomePage
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes: routes
})

export default router
