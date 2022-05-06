import { createRouter, createWebHistory } from 'vue-router';
import RegisterPage from '@/views/RegisterPage';
import LoginPage from '@/views/LoginPage';
import GlobalFeedPage from '@/views/GlobalFeedPage';
import UserFeedPage from '@/views/UserFeedPage';
import TagFeedPage from '@/views/TagFeedPage';
import ArticlePage from '@/views/ArticlePage'
import CreateArticlePage from '@/views/CreateArticlePage';

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
    component: GlobalFeedPage
  },
  {
    path: '/feed',
    name: 'user-feed',
    component: UserFeedPage
  },
  {
    path: '/tags/:slug',
    name: 'tag',
    component: TagFeedPage
  },
  {
    path: '/articles/new',
    name: 'createArticle',
    component: CreateArticlePage
  },
  {
    path: '/articles/:slug',
    name: 'article',
    component: ArticlePage
  },
  {
    path: '/articles/:slug/edit',
    name: 'editArticle',
    component: GlobalFeedPage
  },
  {
    path: '/settings',
    name: 'settings',
    component: GlobalFeedPage
  },
  {
    path: '/profiles/:slug',
    name: 'userProfile',
    component: GlobalFeedPage
  },
  {
    path: '/profiles/:slug/favorites',
    name: 'userProfileFavorites',
    component: GlobalFeedPage
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes: routes
})

export default router
