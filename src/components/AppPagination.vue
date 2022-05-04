<template>
  <ul class='pagination'>
    <li
      v-for='page in pagesList'
      :key='page'
      class='page-item'
      :class='{active: currentPage === page}'
    >
      <router-link :to='{path: url, query: {page: page}}' class='page-link'>
        {{page}}
      </router-link>
    </li>
  </ul>
</template>

<script>
import {range} from '@/helpers/utils';

export default {
  name: 'AppPagination',

  props: {
    totalCount: {
      type: Number,
      required: true
    },
    limitCount: {
      type: Number,
      required: true
    },
    currentPage: {
      type: Number,
      required: true
    },
    url: {
      type: String,
      required: true
    }
  },

  computed: {
    pagesList() {
      const totalPagesCount = Math.ceil(this.totalCount / this.limitCount);
      return range(1, totalPagesCount);
    }
  }
};
</script>
