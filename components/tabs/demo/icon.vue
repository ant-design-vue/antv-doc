<template>
  <v-tabs v-model="activeIndex" @onChange="onChange">
    <v-tab-pane :tab="tab1" index="1">Content of Tab Pane 1</v-tab-pane>
    <v-tab-pane tab="Tab 2" index="2">Content of Tab Pane 2</v-tab-pane>
    <v-tab-pane tab="Tab 3" index="3">Content of Tab Pane 3</v-tab-pane>
  </v-tabs>
</template>
<script type="text/babel">
  export default {
    data() {
      // todo: 支持jsx
      var h = this.$createElement
      return {
        activeIndex: '1',
        tab1: h(
          'span',
          [h(
            'v-icon',
            {
              attrs: { type: 'apple' }
            },
          ), 'Tab 1']
        )
      }
    },
    methods: {
      onChange(index) {
        console.log(index)
      }
    }
  }
</script>