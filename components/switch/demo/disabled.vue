<template>
  <section>
    <v-switch v-model="checked" :disabled="disabled" />
    <br/>
    <br/>
    <v-button type="primary" @click.native="toggle">Toggle disabled</v-button>
  </section>
</template>
<script>
  export default {
    data() {
      return {
        checked: false,
        disabled: true
      }
    },
    methods: {
      toggle() {
        this.disabled = !this.disabled
      }
    }
  }
</script>