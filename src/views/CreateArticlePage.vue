<template>
  <div>
    CreateArticlePage
    <AppArticleForm
      :initialValues='initialValues'
      :errors='validationErrors'
      :isSubmitting='isSubmitting'
      @handleSubmit='handleSubmit'
    />
  </div>
</template>

<script>
import AppArticleForm from '@/components/AppArticleForm';

export default {
  name: 'CreateArticlePage',

  components: {
    AppArticleForm,
  },

  data() {
    return {
      initialValues: {
        title: '',
        description: '',
        body: '',
        tagList: '',
      },
      validationErrors: null,
      isSubmitting: false,
    }
  },

  methods: {
    handleSubmit(data) {
      console.log('handleSubmit in CreateArticlePage', data);
    }
  }
}
</script>
