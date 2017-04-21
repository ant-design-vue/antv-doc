<template>
  <section>
    <v-button @click.native="showConfirm">confirmation modal dialog</v-button>
  </section>
</template>
<script>
  export default {
    methods: {
      showConfirm() {
        this.$modal.confirm({
          title: 'Want to delete these items?',
          content: 'some descriptions',
          onOk() {
            console.log('OK')
          },
          onCancel() {
            console.log('Cancel')
          }
        })
      }
    }
  }
</script>
