<template>
  <section>
    <v-button type="primary" @click.native="showModal">Open a modal dialog</v-button>
    <v-modal
        v-model="visible"
        title="Basic Modal"
        :footer="footer"
        @onOk="onOk"
        @onCancel="onCancel">
      <p>some contents...</p>
      <p>some contents...</p>
      <p>some contents...</p>
    </v-modal>
  </section>
</template>
<script type="text/babel">
  export default {
    data() {
      var h = this.$createElement

      return {
        footer: [h(
          "v-button",
          {
            attrs: {
              size: "large"
            },
            nativeOn: {
              "click": this.onCancel
            }
          },
          ["return"]
        ), h(
          "v-button",
          {
            attrs: {
              type: "primary",
              size: "large"
            },
            nativeOn: {
              "click": this.onCancel
            }
          },
          ["ok"]
        )],
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
