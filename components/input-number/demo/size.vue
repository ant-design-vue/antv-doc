<template>
  <section>
    <v-input-number size="large" v-model="input" :min="1" :max="100000" @onChange="onChange"/>
    <v-input-number v-model="input" :min="1" :max="100000" @onChange="onChange"/>
    <v-input-number size="samll" v-model="input" :min="1" :max="100000" @onChange="onChange"/>
  </section>
</template>
<style>
  .ant-input-number {
    margin-right: 10px;
  }
</style>
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