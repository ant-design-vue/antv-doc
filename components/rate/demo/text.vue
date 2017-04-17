<template>
  <v-rate v-model="value">
    <span className="ant-rate-text" v-if="value > 0">{{value}} stars</span>
  </v-rate>
</template>
<script>
  export default {
    data() {
      return {
        value: 2
      }
    }
  }
</script>
