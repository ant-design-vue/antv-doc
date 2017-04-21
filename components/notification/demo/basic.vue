<template>
  <section>
    <v-button type="primary" @click.native="openNotification">Display normal message</v-button>
  </section>
</template>
<script>
  export default {
    methods: {
      openNotification() {
        this.$notification.open({
          message: 'Notification Title',
          description: 'This is the content of the notification. This is the content of the notification. This is the content of the notification.'
        })
      }
    }
  }
</script>
