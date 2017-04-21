<template>
  <section>
    <v-button @click.native="showInfo">Info</v-button>
    <v-button @click.native="showSuccess">Success</v-button>
    <v-button @click.native="showError">Error</v-button>
    <v-button @click.native="showWarning">Warning</v-button>  </section>
</template>
<script>
  export default {
    methods: {
      showInfo() {
        this.$modal.info({
            title: 'This is a notification message',
          content: 'some messages...some messages...',
        onOk() {
          console.log('OK')
        }
      })
      },

      showSuccess() {
        this.$modal.success({
          title: 'This is a success message',
          content: 'some messages...some messages...'
        })
      },

      showError() {
        this.$modal.error({
          title: 'This is an error message',
          content: 'some messages...some messages...'
        })
      },

      showWarning() {
        this.$modal.warning({
          title: 'This is a warning message',
          content: 'some messages...some messages...'
        })
      }
    }
  }
</script>
