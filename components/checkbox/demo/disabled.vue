<template>
  <section>
    <v-checkbox v-model="checked" disabled>checkbox</v-checkbox>
    <v-checkbox v-model="unchecked" disabled>checkbox</v-checkbox>
  </section>
</template>
<script>
  export default {
    data() {
      return {
        checked: true,
        unchecked: false
      }
    }
  }
</script>
