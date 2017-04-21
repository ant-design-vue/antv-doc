<template>
  <div>
    <div style="margin-left: 60px">
      <v-tooltip ref="popover" placement="topLeft" :title="text"  :content="content">
        <a href="#">TL</a>
      </v-tooltip>
      <v-tooltip placement="top" :title="text" :content="content">
        <a href="#">Top</a>
      </v-tooltip>
      <v-tooltip placement="topRight" :title="text" :content="content">
        <a href="#">TR</a>
      </v-tooltip>
    </div>
    <div style="width: 60px; float: left;">
      <v-tooltip placement="leftTop" :title="text" :content="content">
        <a href="#">LT</a>
      </v-tooltip>
      <v-tooltip placement="left" :title="text" :content="content">
        <a href="#">Left</a>
      </v-tooltip>
      <v-tooltip placement="leftBottom" :title="text" :content="content">
        <a href="#">LB</a>
      </v-tooltip>
    </div>
    <div style="width: 60px; margin-left: 270px;">
      <v-tooltip placement="rightTop" :title="text" :content="content">
        <a href="#">RT</a>
      </v-tooltip>
      <v-tooltip placement="right" :title="text" :content="content">
        <a href="#">Right</a>
      </v-tooltip>
      <v-tooltip placement="rightBottom" :title="text" :content="content">
        <a href="#">RB</a>
      </v-tooltip>
    </div>
    <div style="margin-left: 60px; clear: both;">
      <v-tooltip placement="bottomLeft" :title="text" :content="content">
        <a href="#">BL</a>
      </v-tooltip>
      <v-tooltip placement="bottom" :title="text" :content="content">
        <a href="#">Bottom</a>
      </v-tooltip>
      <v-tooltip placement="bottomRight" :title="text" :content="content">
        <a href="#">BR</a>
      </v-tooltip>
    </div>
  </div>
</template>
<style>
  #components-tooltip-demo-placement .code-box-demo a {
    display: inline-block;
    line-height: 32px;
    height: 32px;
    width: 60px;
    font-size: 14px;
    text-align: center;
    background: #f5f5f5;
    margin-right: 1em;
    margin-bottom: 1em;
    border-radius: 6px;
  }
</style>
<script>
  export default {
    data: function data() {
      var h = this.$createElement

      return {
        text: 'prompt text',
        content: h(
          "div",
          [h(
            "p",
            ["Content"]
          ), h(
            "p",
            ["Content"]
          )]
        )
      }
    }
  }
</script>