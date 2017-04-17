<template>
  <v-pagination showQuickJumper :total="500" v-model="model" @onChange="onChange"></v-pagination>
</template>
<script>
  export default {
    data() {
      return {
        model: 2
      }
    },
    methods: {
      onChange(page) {
        console.log(page)
      }
    }
  }
</script>
