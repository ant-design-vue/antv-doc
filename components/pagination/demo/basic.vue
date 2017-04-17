<template>
  <v-pagination :total="50" v-model="model" @onChange="onChange"></v-pagination>
</template>
<script>
  export default {
    data() {
      return {
        model: 1
      }
    },
    methods: {
      onChange(page) {
        console.log(page)
      }
    }
  }
</script>
