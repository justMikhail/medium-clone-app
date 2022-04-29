import {createApp} from 'vue';
import App from './App.vue';
import appRouter from './router';
import store from './store';

createApp(App)
  .use(store)
  .use(appRouter)
  .mount('#app');

