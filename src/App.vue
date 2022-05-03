<template>
  <AppNavBar />
  <router-view />
</template>

<script>
import AppNavBar from '@/components/NavBar';
import {actionTypes} from '@/store/modules/auth';

export default {
  name: 'App',

  components: {
    AppNavBar
  },

  mounted() {
    this.$store.dispatch(actionTypes.getCurrentUser);
    //console.log('Hello App');
  }
};
</script>
