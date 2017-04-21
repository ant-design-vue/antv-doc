<template>
  <section>
    <v-switch v-model="checked1" checkedChildren="开" unCheckedChildren="关"></v-switch>
    <br/>
    <v-switch v-model="checked2" checkedChildren="1" unCheckedChildren="0"></v-switch>
    <br/>
    <v-switch v-model="checked3" checkedChildren="开" unCheckedChildren="关">
      <v-icon slot="checkedChildren" type="check"></v-icon>
      <v-icon slot="unCheckedChildren" type="cross"></v-icon>
    </v-switch>
  </section>
</template>
<script>
  export default {
    data() {
      return {
        checked1: false,
        checked2: false,
        checked3: false
      }
    }
  }
</script>