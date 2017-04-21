<template>
  <div>
    <div style="margin-left: 60px">
      <v-popover ref="popover" placement="topLeft" :title="text"  :content="content">
        <v-button>TL</v-button>
      </v-popover>
      <v-popover placement="top" :title="text" :content="content">
        <v-button>Top</v-button>
      </v-popover>
      <v-popover placement="topRight" :title="text" :content="content">
        <v-button>TR</v-button>
      </v-popover>
    </div>
    <div style="width: 60px; float: left;">
      <v-popover placement="leftTop" :title="text" :content="content">
        <v-button>LT</v-button>
      </v-popover>
      <v-popover placement="left" :title="text" :content="content">
        <v-button>Left</v-button>
      </v-popover>
      <v-popover placement="leftBottom" :title="text" :content="content">
        <v-button>LB</v-button>
      </v-popover>
    </div>
    <div style="width: 60px; margin-left: 270px;">
      <v-popover placement="rightTop" :title="text" :content="content">
        <v-button>RT</v-button>
      </v-popover>
      <v-popover placement="right" :title="text" :content="content">
        <v-button>Right</v-button>
      </v-popover>
      <v-popover placement="rightBottom" :title="text" :content="content">
        <v-button>RB</v-button>
      </v-popover>
    </div>
    <div style="margin-left: 60px; clear: both;">
      <v-popover placement="bottomLeft" :title="text" :content="content">
        <v-button>BL</v-button>
      </v-popover>
      <v-popover placement="bottom" :title="text" :content="content">
        <v-button>Bottom</v-button>
      </v-popover>
      <v-popover placement="bottomRight" :title="text" :content="content">
        <v-button>BR</v-button>
      </v-popover>
    </div>
  </div>
</template>
<style>
  .code-box-demo .ant-btn {
    margin-right: 8px;
    margin-bottom: 8px;
  }
  #components-popover-demo-placement .ant-btn {
    width: 70px;
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