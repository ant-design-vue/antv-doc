<template>
  <section>
    <v-badge :dot="show">
      <a href="#" class="head-example"></a>
    </v-badge>
    <v-switch v-model="show"></v-switch>
  </section>
</template>
<script>
  export default {
    data() {
      return {
        show: true
      }
    }
  }
</script>