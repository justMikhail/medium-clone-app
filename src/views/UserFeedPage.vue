<template>
  <div class='home-page'>
    <AppBanner />
    <div class='container page'>
      <div class='row'>

        <div class='col-md-9'>
          <AppFeed :api-url='apiUrl' />
        </div>

        <div class='col-md-3'>
          <AppTags />
        </div>

      </div>
    </div>
  </div>
</template>

<script>
import AppFeed from '@/components/AppFeed';
import AppTags from '@/components/AppTags';
import AppBanner from '@/components/AppBanner';

export default {
  name: 'UserFeedPage',

  components: {
    AppFeed,
    AppTags,
    AppBanner,
  },

  data() {
    return {
      apiUrl: '/articles/feed'
    };
  }
};
</script>
