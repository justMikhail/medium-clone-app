<template>
  <AppNavBar />
  <router-view />
</template>

<script>
import AppNavBar from '@/components/AppNavBar';
import {actionTypes} from '@/store/modules/auth';

export default {
  name: 'App',

  components: {
    AppNavBar
  },

  mounted() {
    this.$store.dispatch(actionTypes.getCurrentUser);
  }
};
</script>
