<template>
  <section>
    <v-button type="primary" @click.native="success">Display normal message</v-button>
  </section>
</template>
<script>
  export default {
    methods: {
      success() {
        this.$message.success('This is a prompt message for success, and it will disappear in 10 seconds', 10)
      }
    }
  }
</script>
