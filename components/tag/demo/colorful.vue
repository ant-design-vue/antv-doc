<template>
  <div>
    <h4 style="margin-bottom: 16px">Presets:</h4>
    <div>
      <v-tag color="pink">pink</v-tag>
      <v-tag color="red">red</v-tag>
      <v-tag color="orange">orange</v-tag>
      <v-tag color="green">green</v-tag>
      <v-tag color="cyan">cyan</v-tag>
      <v-tag color="blue">blue</v-tag>
      <v-tag color="purple">purple</v-tag>
    </div>
    <h4 style="margin: 16px 0">Custom:</h4>
    <div>
      <v-tag color="#f50">#f50</v-tag>
      <v-tag color="#2db7f5">#2db7f5</v-tag>
      <v-tag color="#87d068">#87d068</v-tag>
      <v-tag color="#108ee9">#108ee9</v-tag>
    </div>
  </div>
</template>
<style>
  .ant-tag {
    margin-bottom: 8px;
  }
</style>
<script>
  export default {
    methods: {
      log(e) {
        console.log(e)
      },

      onClose(e) {
        e.preventDefault()
        console.log('Clicked! But prevent default.')

      }
    }
  }
</script>
