<template>
  <v-input-number v-model="input" :min="1" :max="10" @onChange="onChange"/>
</template>
<script>
  export default {
    data() {
      return {
        input: 3
      }
    },
    methods: {
      onChange(value) {
        console.log('changed', value);
      }
    }
  }
</script>