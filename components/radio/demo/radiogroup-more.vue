<template>
  <v-radio-group v-model="checked" class="radio-group-more-demo">
    <v-radio label="1">Option A</v-radio>
    <v-radio label="2">Option B</v-radio>
    <v-radio label="3">Option C</v-radio>
    <v-radio label="4">More...
      <v-input v-if="checked === '4'"/>
    </v-radio>
  </v-radio-group>
</template>
<style>
  .radio-group-more-demo .ant-radio-wrapper {
    display: block;
    height: 30px;
    line-height: 30px;
  }
  .radio-group-more-demo .ant-input {
    width:100px; margin-left: 10px
  }
</style>
<script>
  export default {
    data() {
      return {
        checked: 'A'
      }
    }
  }
</script>