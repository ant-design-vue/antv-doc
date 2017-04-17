<template>
  <section>
    <v-rate v-model="value" character="★" />
    <br/>
    <v-rate v-model="value" character="好" allowHalf/>
  </section>
</template>
<script>
  export default {
    data() {
      return {
        value: 0
      }
    }
  }
</script>