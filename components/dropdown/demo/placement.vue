<template>
  <section>
    <v-dropdown placement="bottomLeft">
      <v-button slot="title">bottomLeft</v-button>
      <v-dropdown-menu slot="menu">
        <v-dropdown-item index="1"><a>1st menu item</a></v-dropdown-item>
        <v-dropdown-item index="2"><a>1st menu item</a></v-dropdown-item>
        <v-dropdown-item index="3"><a>1st menu item</a></v-dropdown-item>
      </v-dropdown-menu>
    </v-dropdown>
    <v-dropdown placement="bottom">
      <v-button slot="title">bottom</v-button>
      <DropdowMenu slot="menu"></DropdowMenu>
    </v-dropdown>
    <v-dropdown placement="bottomRight">
      <v-button slot="title">bottomRight</v-button>
      <DropdowMenu slot="menu"></DropdowMenu>
    </v-dropdown>
    <br/>
    <v-dropdown placement="topLeft">
      <v-button slot="title">topLeft</v-button>
      <DropdowMenu slot="menu"></DropdowMenu>
    </v-dropdown><v-dropdown placement="top">
      <v-button slot="title">top</v-button>
      <DropdowMenu slot="menu"></DropdowMenu>
    </v-dropdown>
    <v-dropdown placement="topRight">
      <v-button slot="title">topRight</v-button>
      <DropdowMenu slot="menu"></DropdowMenu>
    </v-dropdown>
  </section>
</template>
<style>
  #components-dropdown-demo-placement .ant-btn {
    margin-right: 8px;
    margin-bottom: 8px;
  }
</style>
<script>
  export default {
    components: {
      DropdowMenu: {
        render() { // todo: 支持jsx
          const h = this.$createElement

          return h(
            "v-dropdown-menu",
            [h(
              "v-dropdown-item",
              {
                attrs: { index: "1" }
              },
              [h(
                "a",
                null,
                ["1st menu item"]
              )]
            ), h(
              "v-dropdown-item",
              {
                attrs: { index: "2" }
              },
              [h(
                "a",
                null,
                ["1st menu item"]
              )]
            ), h(
              "v-dropdown-item",
              {
                attrs: { index: "3" }
              },
              [h(
                "a",
                null,
                ["1st menu item"]
              )]
            )]
          )
        }
      }
    }
  }
</script>