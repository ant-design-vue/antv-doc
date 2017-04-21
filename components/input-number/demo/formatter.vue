<template>
  <section>
    <v-input-number v-model="input1" :formatter="formatter1" :min="1"/>
    <v-input-number v-model="input2" :formatter="formatter2" :min="1" :max="100"/>
  </section>
</template>
<script>
  export default {
    data() {
      return {
        input1: 1000,
        input2: 1
      }
    },
    methods: {
      formatter1(value) {
        return `$ ${value.replace(/\B(?=(\d{3})+(?!\d))/g, ',')}`
      },
      formatter2(value) {
        return `${value.replace('%', '')}%`
      }
    }
  }
</script>