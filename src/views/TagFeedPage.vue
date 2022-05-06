<template>
  <div class='home-page'>
    <AppBanner />
    <div class='container page'>
      <div class='row'>

        <div class='col-md-9'>
          <AppFeedToggler :tag-name='tagName'/>
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
import AppFeedToggler from '@/components/AppFeedToggler';

export default {
  name: 'TagFeedPage',

  components: {
    AppFeed,
    AppTags,
    AppBanner,
    AppFeedToggler,
  },

  computed: {
    tagName() {
      return this.$route.params.slug
    },

    apiUrl() {
      return `./articles?tag=${this.tagName}`
    }
  }
};
</script>
