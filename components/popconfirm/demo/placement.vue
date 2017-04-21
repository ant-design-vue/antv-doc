<template>
  <div>
    <div style="margin-left: 60px">
      <v-popconfirm ref="popover" placement="topLeft" :title="text" >
        <v-button>TL</v-button>
      </v-popconfirm>
      <v-popconfirm placement="top" :title="text">
        <v-button>Top</v-button>
      </v-popconfirm>
      <v-popconfirm placement="topRight" :title="text">
        <v-button>TR</v-button>
      </v-popconfirm>
    </div>
    <div style="width: 60px; float: left;">
      <v-popconfirm placement="leftTop" :title="text">
        <v-button>LT</v-button>
      </v-popconfirm>
      <v-popconfirm placement="left" :title="text">
        <v-button>Left</v-button>
      </v-popconfirm>
      <v-popconfirm placement="leftBottom" :title="text">
        <v-button>LB</v-button>
      </v-popconfirm>
    </div>
    <div style="width: 60px; margin-left: 270px;">
      <v-popconfirm placement="rightTop" :title="text">
        <v-button>RT</v-button>
      </v-popconfirm>
      <v-popconfirm placement="right" :title="text">
        <v-button>Right</v-button>
      </v-popconfirm>
      <v-popconfirm placement="rightBottom" :title="text">
        <v-button>RB</v-button>
      </v-popconfirm>
    </div>
    <div style="margin-left: 60px; clear: both;">
      <v-popconfirm placement="bottomLeft" :title="text">
        <v-button>BL</v-button>
      </v-popconfirm>
      <v-popconfirm placement="bottom" :title="text">
        <v-button>Bottom</v-button>
      </v-popconfirm>
      <v-popconfirm placement="bottomRight" :title="text">
        <v-button>BR</v-button>
      </v-popconfirm>
    </div>
  </div>
</template>
<style>
  .code-box-demo .ant-popover-wrap > a {
    margin-right: 8px;
  }
  .code-box-demo .ant-btn {
    margin-right: 8px;
    margin-bottom: 8px;
  }
  #components-popconfirm-demo-placement .ant-btn {
    width: 70px;
  }
</style>

<script>
  export default {
    data: function data() {
      var h = this.$createElement

      return {
        text: 'Are you sure delete this task?',
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