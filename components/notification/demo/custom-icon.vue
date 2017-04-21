<template>
  <section>
    <v-button type="primary" @click.native="openNotification">Display normal message</v-button>
  </section>
</template>
<script>
  export default {
    methods: {
      openNotification() {
        var h = this.$createElement

        this.$notification.open({
          icon: h(
            "v-icon",
            {
              attrs: { type: "smile-circle" },
              style: "color: rgb(16, 142, 233);"
            }
          ),
          message: 'Notification Title',
          description: 'This is the content of the notification. This is the content of the notification. This is the content of the notification.'
        })
      }
    }
  }
</script>
