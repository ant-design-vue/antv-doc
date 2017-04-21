<template>
  <section>
    <v-button type="primary" @click.native="info">Display normal message</v-button>
  </section>
</template>
<script>
  export default {
    methods: {
      info() {
        this.$message.info('This is a normal message')
      }
    }
  }
</script>
