<template>
  <section>
    <v-pagination :total="50" v-model="model" :showTotal="showTotal1"></v-pagination>
    <br/>
    <v-pagination :total="50" v-model="model" :showTotal="showTotal2"></v-pagination>
  </section>
</template>
<script>
  export default {
    data() {
      return {
        model: 2
      }
    },
    methods: {
      showTotal1(total) {
        return `Total ${total} items`
      }
      ,showTotal2(total, range) {
        return `${range[0]}-${range[1]} of ${total} items`
      }
    }
  }
</script>
