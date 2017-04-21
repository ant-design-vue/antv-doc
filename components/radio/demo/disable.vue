<template>
  <section>
    <v-radio :disabled="disabled" v-model="checked1" label="Disabled"/>
    <br />
    <v-radio :disabled="disabled" v-model="checked2" label="Disabled"/>
    <br/>
    <br/>
    <v-button type="primary" @click.native="toggleDisabled">Toggle disabled</v-button>
  </section>
</template>
<script>
  export default {
    data() {
      return {
        checked1: '',
        checked2: 'Disabled',
        disabled: true
      }
    },
    methods: {
      toggleDisabled() {
        this.disabled = !this.disabled
      }
    }
  }
</script>