<template>
  <v-radio-group v-model="checked">
    <v-radio label="A"></v-radio>
    <v-radio label="B"></v-radio>
    <v-radio label="C"></v-radio>
    <v-radio label="D"></v-radio>
  </v-radio-group>
</template>
<script>
  export default {
    data() {
      return {
        checked: 'A'
      }
    }
  }
</script>