<template>
  <v-pagination showSizeChanger :total="50" v-model="model" @onShowSizeChange="onShowSizeChange"></v-pagination>
</template>
<script>
  export default {
    data() {
      return {
        model: 3
      }
    },
    methods: {
      onShowSizeChange(page, pageSize) {
        console.log(page, pageSize)
      }
    }
  }
</script>
