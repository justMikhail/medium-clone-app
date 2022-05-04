<template>
  <div>
    <div v-if="isLoading">Loading...</div>
    <div v-if="feedError">Something bad happened</div>

    <div v-if="feedData">
      <div
        class="article-preview"
        v-for="(article, index) in feedData.articles"
        :key="index"
      >
        <div class="article-meta">
          <router-link
            :to="{name: 'userProfile', params: {slug: article.author.username}}"
          >
            <img :src="article.author.image" />
          </router-link>
          <div class="info">
            <router-link :to="{name: 'userProfile',params: {slug: article.author.username}}">
              {{ article.author.username }}
            </router-link>
            <span class="date">{{ article.createdAt }}</span>
          </div>
          <div class="pull-xs-right">ADD TO FAVORITES</div>
        </div>
        <router-link
          :to="{name: 'article', params: {slug: article.slug}}"
          class="preview-link"
        >
          <h1>{{ article.title }}</h1>
          <p>{{ article.description }}</p>
          <span>Read more...</span>
          TAG LIST
        </router-link>
      </div>

      <AppPagination
        :totalCount='mockTotalCount'
        :limitCount='mockLimitCount'
        :currentPage='mockCurrentPage'
        :url='mockUrl'
      />
    </div>
  </div>
</template>

<script>
import {actionTypes} from '@/store/modules/feed';
import {mapState} from 'vuex';
import AppPagination from '@/components/AppPagination';

export default {
  name: 'AppFeed',

  components: {
    AppPagination
  },

  props: {
    apiUrl: {
      type: String,
      required: true
    }
  },

  data() {
    return {
      mockTotalCount: 500,
      mockLimitCount: 10,
      mockCurrentPage: 5,
      mockUrl: '/tags/dragons',
    }
  },

  computed: {
    ...mapState({
      isLoading: state => state.feed.isLoading,
      feedData: state => state.feed.data,
      feedError: state => state.feed.error
    })
  },

  mounted() {
    console.log('==== init feed ====');
    this.$store.dispatch(actionTypes.getFeed, {apiUrl: this.apiUrl});
  }
};
</script>
