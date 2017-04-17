<template>
  <section>
    <v-pagination size="small" :total="50"></v-pagination>
    <v-pagination size="small" :total="50" showSizeChanger showQuickJumper></v-pagination>
    <v-pagination size="small" :total="50" :showTotal="showTotal"></v-pagination>
  </section>
</template>
<style>
  #components-pagination-demo-mini .ant-pagination:not(:last-child) {
    margin-bottom: 24px;
  }
</style>
<script>
  export default {
    methods: {
      showTotal(total, range) {
        return `${range[0]}-${range[1]} of ${total} items`
      }
    }
  }
</script>
