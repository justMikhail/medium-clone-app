<template>
  <div>
    <AppBasicLoader v-if='isLoading' />
    <AppBasicError v-if='feedError' />

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
          <AppTagsList :tagsList='article.tagList'/>
        </router-link>
      </div>

      <AppPagination
        :totalCount='feedData.articlesCount'
        :limitCount='limitCount'
        :currentPage='currentPage'
        :url='baseUrl'
      />
    </div>
  </div>
</template>

<script>
import {actionTypes} from '@/store/modules/feed';
import {mapState} from 'vuex';
import {FEED_VARS} from '@/helpers/vars'
import {stringify, parseUrl} from 'query-string'

import AppPagination from '@/components/AppPagination';
import AppBasicLoader from '@/components/AppBasicLoader';
import AppBasicError from '@/components/AppBasicError';
import AppTagsList from '@/components/AppTagsList';

export default {
  name: 'AppFeed',

  components: {
    AppPagination,
    AppBasicLoader,
    AppBasicError,
    AppTagsList,
  },

  props: {
    apiUrl: {
      type: String,
      required: true
    }
  },

  data() {
    return {
      limitCount: FEED_VARS.LIMIT,
    }
  },

  computed: {
    ...mapState({
      isLoading: state => state.feed.isLoading,
      feedData: state => state.feed.data,
      feedError: state => state.feed.error
    }),
    currentPage() {
      return Number(this.$route.query.page || '1')
    },
    baseUrl() {
      return this.$route.path
    },
    offset() {
      return this.currentPage * this.limitCount - this.limitCount
    }
  },

  watch: {
    currentPage() {
      this.fetchFeed();
    }
  },

  mounted() {
    this.fetchFeed();
  },

  methods: {
    fetchFeed() {
      const parsedUrl = parseUrl(this.apiUrl)
      const stringifiesParams = stringify({
        limit: this.limitCount,
        offset: this.offset,
        ...parsedUrl.query,
      })
      const apiUrlWithParams = `${parsedUrl.url}?${stringifiesParams}`
      console.log('apiUrlWithParams: ', apiUrlWithParams);
      this.$store.dispatch(actionTypes.getFeed, {apiUrl: this.apiUrl});
    }
  }
};
</script>
