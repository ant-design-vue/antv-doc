<template>
  <section>
    <v-button @click.native="success">Success</v-button>
    <v-button @click.native="error">Error</v-button>
    <v-button @click.native="warning">Warning</v-button>  </section>
</template>
<script>
  export default {
    methods: {
      success() {
        this.$message.success('This is a message of success')
      },

      error() {
        this.$message.error('This is a message of error')
      },

      warning() {
        this.$message.warning('This is a message of warning')
      }
    }
  }
</script>
