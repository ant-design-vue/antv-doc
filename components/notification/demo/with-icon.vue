<template>
  <section>
    <v-button @click.native="openNotificationWithIcon('success')">Success</v-button>
    <v-button @click.native="openNotificationWithIcon('info')">Info</v-button>
    <v-button @click.native="openNotificationWithIcon('warning')">Warning</v-button>
    <v-button @click.native="openNotificationWithIcon('error')">Error</v-button>
  </section>
</template>
<style>
  .code-box-demo .ant-btn {
    margin-right: 1em;
  }
</style>
<script>
  export default {
    methods: {
      openNotificationWithIcon(type) {
        this.$notification[type]({
          message: 'Notification Title',
          description: 'This is the content of the notification. This is the content of the notification. This is the content of the notification.'
        })
      }
    }
  }
</script>
