<template>
  <AppBasicLoader v-if='isLoading' />
  <AppBasicError v-if='tagsError' />

  <section v-if='tagsData' class='sidebar'>
    <h2 class='popover-title'>
      Popular Tags
    </h2>
    <ul class='tag-list'>
      <router-link
        v-for='tag in tagsData'
        :key='tag'
        :to='{name: "tag", params: {slug:tag}}'
        class='tag-default tag-pill'
      >
        {{ tag }}
      </router-link>
    </ul>
  </section>
</template>

<script>
import {mapState} from 'vuex';
import {actionTypes} from '@/store/modules/tags';
import AppBasicLoader from '@/components/AppBasicLoader';
import AppBasicError from '@/components/AppBasicError';

export default {
  name: 'AppTags',

  computed: {
    ...mapState({
      isLoading: state => state.tags.isLoading,
      tagsData: state => state.tags.data,
      tagsError: state => state.tags.error
    })
  },

  components: {
    AppBasicLoader,
    AppBasicError
  },

  mounted() {
    this.$store.dispatch(actionTypes.getTags);
  }
};
</script>
