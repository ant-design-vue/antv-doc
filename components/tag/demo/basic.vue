<template>
  <div>
    <v-tag>v-tag 1</v-tag>
    <v-tag><a href="https://github.com/ant-design-vue/antv">Link</a></v-tag>
    <v-tag closable @onClose="log">v-tag 2</v-tag>
    <v-tag closable @onClose="onClose">Prevent Default</v-tag>
  </div>
</template>
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
