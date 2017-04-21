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
          description: 'I will never close automatically. I will be close automatically. I will never close automatically.',
          duration: 0
        })
      }
    }
  }
</script>
