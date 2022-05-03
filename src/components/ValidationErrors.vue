<template>
  <ul class='error-messages'>
    <li v-for='errorsMessage in errorsMessagesList' :key='errorsMessage'>
      {{errorsMessage}}
    </li>
  </ul>
</template>

<script>
export default {
  name: 'AppValidationErrors',

  props: {
    validationErrors: {
      type: Object,
      required: true,
    }
  },

  computed: {
    errorsMessagesList() {
      return Object.keys(this.validationErrors).map(name => {
        const messages = this.validationErrors[name].join(', ')
        return `${name} ${messages}`
      })
    }
  }
}
</script>
