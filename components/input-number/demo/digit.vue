<template>
  <v-input-number v-model="input" :step="0.1" :min="1" :max="10"/>
</template>
<script>
  export default {
    data() {
      return {
        input: 0.1
      }
    }
  }
</script>