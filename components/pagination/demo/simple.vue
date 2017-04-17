<template>
  <v-pagination simple :total="50" v-model="model"></v-pagination>
</template>
<script>
  export default {
    data() {
      return {
        model: 2
      }
    }
  }
</script>
