<template>
  <section>
    <v-checkbox :indeterminate="indeterminate" v-model="checkAll" @onChange="onCheckAllChange">Check all</v-checkbox>
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
        checkedList: ['Apple'],
        checkAll: false
      }
    },
    methods: {
      onCheckAllChange(val) {
        this.checkedList = val ? this.plainOptions : []
      }
    },

    computed: {
      indeterminate() {
        const checkedCount = this.checkedList.length
        this.checkAll = checkedCount === this.plainOptions.length
        return checkedCount > 0 && checkedCount < this.plainOptions.length
      }
    }
  }
</script>
