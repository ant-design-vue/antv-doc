<template>
  <section>
    <v-select v-model="selectValue" style="width: 120px; margin-right: 10px;" @onChange="onChange">
      <v-option v-for="option in options" :value="option">{{option}}</v-option>
    </v-select>
    <v-button type="primary" @click.native="openNotification">Display normal message</v-button>
  </section>
</template>
<script>
  export default {
    data() {
      return {
        selectValue: 'topRight',
        options: ['topLeft', 'topRight', 'bottomLeft', 'bottomRight']
      }
    },
    methods: {
      onChange() {
        this.$notification.config({
          placement: this.selectValue
        })
      },

      openNotification() {
        this.$notification.open({
          message: 'Notification Title',
          description: 'This is the content of the notification. This is the content of the notification. This is the content of the notification.'
        })
      }
    }
  }
</script>
