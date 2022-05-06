<template>
  <ul
    v-for='tag in tagsList'
    :key='tag'
    class='tag-list'
  >
    <li class='tag-default tag-pill tag-outline'>
      {{tag}}
    </li>
  </ul>
</template>

<script>
export default {
  name: 'AppTagsList',

  props: {
    tagsList: {
      type: Array,
      required: true,
    }
  }
}
</script>
