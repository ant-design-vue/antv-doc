<template>
  <v-input style="width:200px"
      icon="search"
      placeholder="input search text"
      @onPressIcon="onPressIcon"
  />
</template>
<script>
  export default {
    data() {
      return {
        input: 'xxx'
      }
    },
    methods: {
      onPressIcon(value) {
        console.log(value)
      }
    }
  }
</script>
