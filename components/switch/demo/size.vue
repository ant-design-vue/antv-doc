<template>
  <section>
    <v-switch v-model="checked1" />
    <br />
    <v-switch v-model="checked2" size="small" />
  </section>
</template>
<script>
  export default {
    data() {
      return {
        checked1: false,
        checked2: false
      }
    }
  }
</script>