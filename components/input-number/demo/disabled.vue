<template>
  <section>
    <v-input-number :disabled="disabled" v-model="input" :min="1" :max="10"/>
    <br/>
    <br/>
    <v-button @click.native="toggle" type="primary">Toggle disabled</v-button>
  </section>
</template>
<script>
  export default {
    data() {
      return {
        input: 1,
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