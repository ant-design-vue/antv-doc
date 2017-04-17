<template>
  <v-tabs type="editable-card"
          v-model="activeIndex"
          @onEdit="onEdit">
  <v-tab-pane
        v-for="pane in panes"
        :tab="pane.title"
        :key="pane.index"
        :index="pane.index"
        :closable="pane.closable">{{pane.content}}</v-tab-pane>
  </v-tabs>
</template>
<script type="text/babel">
  export default {
    data() {
      return {
        activeIndex: '1',
        newTabIndex: 0,
        panes: [
          { title: 'Tab 1', content: 'Content of Tab 1', index: '1', closable: false },
          { title: 'Tab 2', content: 'Content of Tab 2', index: '2' }
        ]
      }
    },

    methods: {
      onEdit(targetIndex, action) {
        this[action](targetIndex)
      },

      add() {
        const activeIndex = `newTab${this.newTabIndex++}`
        this.panes.push({ title: 'New Tab', content: `Content of ${activeIndex}`, index: activeIndex })
        this.activeIndex = activeIndex
      },

      remove(targetIndex) {
        let lastIndex
        if (this.activeIndex === targetIndex) {
          lastIndex = this.panes.findIndex(pane => (pane.index === targetIndex)) - 1
          if (lastIndex === -1 && this.panes.length > 1) {
            lastIndex = 0
          }
        }
        this.panes = this.panes.filter(pane => pane.index !== targetIndex)
        if (lastIndex >= 0) {
          this.activeIndex = this.panes[lastIndex].index
        }
      }
    }
  }
</script>