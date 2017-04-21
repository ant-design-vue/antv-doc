<template>
  <div class="ant-tag-demo">
    <v-tag v-for="(tag, index) in tags" :key="tag" :closable="index !== 0" @afterClose="afterClose(tag)">{{tag}}</v-tag>
    <v-input
        ref="input"
        type="text"
        size="small"
        v-model="inputValue"
        v-show="inputVisible"
        @onPressEnter="inputConfirm"
        @onBlur="inputConfirm"/>
    <v-button
        size="small"
        type="dashed"
        v-show="!inputVisible" @click.native="showInput">+ New Tag
    </v-button>
  </div>
</template>
<style>
  .ant-tag-demo .ant-input {
    width: 78px
  }
</style>
<script>
  export default {
    data() {
      return {
        tags: ['Unremovable', 'Tag 2', 'Tag 3'],
        inputValue: '',
        inputVisible: false
      }
    },

    methods: {
      afterClose(tag) {
        this.tags = this.tags.filter(t => t !== tag)
      },

      showInput() {
        this.inputVisible = true
        this.$nextTick(() => {
          this.$refs.input.$refs.input.focus()
        })
      },

      inputConfirm() {
        this.inputVisible = false
        const inputValue = this.inputValue
        if (inputValue && this.tags.indexOf(inputValue) === -1) {
          this.tags.push(this.inputValue)
        }
        this.inputValue = ''
      }
    }
  }
</script>
