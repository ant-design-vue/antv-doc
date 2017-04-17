<template>
  <v-tabs v-model="activeIndex">
    <v-tab-pane tab="Tab 1" index="1">Content of Tab Pane 1</v-tab-pane>
    <v-tab-pane tab="Tab 2" index="2">Content of Tab Pane 2</v-tab-pane>
    <v-tab-pane tab="Tab 3" index="3">Content of Tab Pane 3</v-tab-pane>
    <v-tab-pane tab="Tab 4" index="4">Content of Tab Pane 4</v-tab-pane>
    <v-tab-pane tab="Tab 5" index="5">Content of Tab Pane 5</v-tab-pane>
    <v-tab-pane tab="Tab 6" index="6">Content of Tab Pane 6</v-tab-pane>
    <v-tab-pane tab="Tab 7" index="7">Content of Tab Pane 7</v-tab-pane>
  </v-tabs>
</template>
<script>
  export default {
    data() {
      return {
        activeIndex: '1'
      }
    }
  }
</script>