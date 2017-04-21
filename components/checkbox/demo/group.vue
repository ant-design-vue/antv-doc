<template>
  <section>
    <v-checkbox-group v-model="checkedList">
      <v-checkbox v-for="option in plainOptions" :label="option" :key="option">{{option}}</v-checkbox>
    </v-checkbox-group>
  </section>
</template>
<script>
  export default {
    data() {
      return {
        plainOptions: ['Apple', 'Pear', 'Orange'],
        checkedList: ['Apple']
      }
    }
  }
</script>
