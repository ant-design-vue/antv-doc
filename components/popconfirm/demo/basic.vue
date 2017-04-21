<template>
  <v-popconfirm title="Are you sure delete this task?"  @onConfirm="onConfirm" @onCancel="onCancel" >
    <a href="javascript:;">Delete</a>
  </v-popconfirm>
</template>
<script>
  export default {
    methods: {
      onConfirm(e) {
        console.log(e)
        this.$message.success('Click on Yes')
      },

      onCancel(e) {
        console.log(e)
        this.$message.error('Click on No')
      }
    }
  }
</script>