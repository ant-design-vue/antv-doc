<template>
  <v-pagination :total="500" v-model="model"></v-pagination>
</template>
<script>
  export default {
    data() {
      return {
        model: 6
      }
    }
  }
</script>
