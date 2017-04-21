<template>
  <section>
    <v-button type="primary" @click.native="showModal">Open a modal dialog</v-button>
    <v-modal
        v-model="visible"
        title="Basic Modal"
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
        visible: false
      }
    },

    methods: {
      showModal() {
        this.visible = true
      },

      onOk(e) {
        this.visible = false
      },

      onCancel(e) {
        this.visible = false
      }
    }
  }
</script>
