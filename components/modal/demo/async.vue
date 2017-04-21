<template>
  <section>
    <v-button type="primary" @click.native="showModal">Open a modal dialog</v-button>
    <v-modal
        v-model="visible"
        title="Basic Modal"
        :confirmLoading="confirmLoading"
        @onOk="onOk"
        @onCancel="onCancel">
      <p>some contents...</p>
      <p>some contents...</p>
      <p>some contents...</p>
    </v-modal>
  </section>
</template>
<script>
  export default {
    data() {
      return {
        visible: false,
        confirmLoading: false
      }
    },

    methods: {
      showModal() {
        this.visible = true
      },

      onOk(e) {
        this.confirmLoading = true
        setTimeout(() => {
          this.confirmLoading = false
          this.visible = false
        }, 2000)
      },

      onCancel(e) {
        this.visible = false
      }
    }
  }
</script>
