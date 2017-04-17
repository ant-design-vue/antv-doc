<template>
  <v-select
      style="width: 200px;"
      v-model="selectValue"
      placeholder="请选择">
    <v-option-group label="Manager">
      <v-option value="jack">Jack</v-option>
      <v-option value="lucy">Lucy</v-option>
    </v-option-group>
    <v-option-group label="Engineer">
      <v-option value="Yiminghe">yiminghe</v-option>
    </v-option-group>
  </v-select>
</template>
<script>
  export default {
    data() {
      return {
        selectValue: 'jack'
      }
    }
  }
</script>
