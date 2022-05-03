<template>
  <div>
    <AppNavBar/>
    <router-view />
  </div>
</template>

<script>
import AppNavBar from '@/components/NavBar';

export default {
  name: 'App',

  components: {
    AppNavBar,
  }
}
</script>
