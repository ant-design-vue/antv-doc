<template>
  <section>
    <v-radio-group v-model="size">
      <v-radio-button label="large">Large</v-radio-button>
      <v-radio-button label="default">Default</v-radio-button>
      <v-radio-button label="small">Small</v-radio-button>
    </v-radio-group>
    <br /><br />
    <v-select
        :size="size"
        style="width: 200px;"
        v-model="selectValue"
        placeholder="请选择">
      <v-option value="jack">Jack</v-option>
      <v-option value="lucy">Lucy</v-option>
      <v-option value="disabled" disabled>Disabled</v-option>
      <v-option value="Yiminghe">yiminghe</v-option>
    </v-select>
  </section>
</template>
<script>
  export default {
    data() {
      return {
        size: 'default',
        selectValue: 'jack'
      }
    }
  }
</script>
