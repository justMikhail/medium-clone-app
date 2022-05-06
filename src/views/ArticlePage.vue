<template>
  <div class="article-page">

    <div class="banner">
      <div class="container" v-if="articleData">
        <h1>{{ articleData.title }}</h1>
        <div class="article-meta">

          <router-link :to="{name: 'userProfile', params: {slug: articleData.author.username}}">
            <img :src="articleData.author.image" />
          </router-link>

          <div class="info">
            <router-link :to="{name: 'userProfile', params: {slug: articleData.author.username}}">
              {{ articleData.author.username }}
            </router-link>
            <span class="date">{{ articleData.createdAt }}</span>
          </div>

          <span v-if='isAuthor'>
            <router-link
              class="btn btn-outline-secondary btn-sm"
              :to="{name: 'editArticle', params: {slug: articleData.slug}}"
            >
              <i class="ion-edit" />
              Edit Article
            </router-link>

            <button class="btn btn-outline-danger btn-sm" @click='deleteArticle'>
              <i class="ion-trash-a" />
              Delete Article
            </button>
          </span>

        </div>
      </div>
    </div>

    <div class="container page">
      <AppBasicError v-if="error" />
      <AppBasicLoader v-if="isLoading" :message="error" />
      <div class="row article-content" v-if="articleData">
        <div class="col-xs-12">
          <div>
            <p>{{ articleData.body }}</p>
          </div>
          <AppTagsList :tagsList='articleData.tagList'/>
        </div>
      </div>
    </div>

  </div>
</template>

<script>
import {actionTypes as articleActionTypes} from '@/store/modules/article';
import {gettersTypes as authGetterTypes} from '@/store/modules/auth';
import {mapState, mapGetters} from 'vuex';

import AppBasicLoader from '@/components/AppBasicLoader';
import AppBasicError from '@/components/AppBasicError';
import AppTagsList from '@/components/AppTagsList';

export default {
  name: 'ArticlePage',

  components: {
    AppBasicError,
    AppBasicLoader,
    AppTagsList,
  },

  computed: {
    ...mapState({
      isLoading: state => state.article.isLoading,
      error: state => state.article.error,
      articleData: state => state.article.data
    }),
    ...mapGetters({
      currentUser: authGetterTypes.currentUser
    }),
    isAuthor() {
      if(!this.currentUser || !this.articleData) {
        return false;
      }
      return this.currentUser.username === this.articleData.author.username
    }
  },

  methods: {
    deleteArticle() {
      this.$store.dispatch(articleActionTypes.deleteArticle, {slug: this.$route.params.slug})
        .then(() => {
          this.$router.push({name: 'globalFeed'})
        })
    }
  },

  mounted() {
    this.$store.dispatch(articleActionTypes.getArticle, {slug: this.$route.params.slug});
  }
};
</script>
