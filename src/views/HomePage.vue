<template>
  <div>
    <div class='home-page'>
      BANNER
      <div class='container page'>
        <div class='row'>

          <div class='col-md-9'>
            <AppFeed :api-url='apiUrl'/>
          </div>

          <div class='col-md-3'>
            Popular Tags
          </div>

        </div>
      </div>
    </div>
  </div>
</template>

<script>
import AppFeed from '@/components/AppFeed';

export default {
  name: 'HomePage',

  components: {
    AppFeed,
  },

  data() {
    return {
      apiUrl: '/articles'
    }
  }
}
</script>
