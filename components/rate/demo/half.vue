<template>
  <v-rate allowHalf v-model="value"/>
</template>
<script>
  export default {
    data() {
      return {
        value: 2.5
      }
    }
  }
</script>
