<template>
  <section>
    <v-dropdown>
      <a className="ant-dropdown-link" href="javascript:;" slot="title">
        Hover me, Click menu item
        <v-icon type="down"/>
      </a>
      <v-dropdown-menu slot="menu"  @onSelect="onSelect">
        <v-dropdown-item index="1"><a>1st menu item</a></v-dropdown-item>
        <v-dropdown-item index="2"><a>2st menu item</a></v-dropdown-item>
        <v-dropdown-item index="3"><a>3st menu item</a></v-dropdown-item>
      </v-dropdown-menu>
    </v-dropdown>
  </section>
</template>
<script>
  export default {
    methods: {
      onSelect(item) {
        this.$message.info(`Click on item ${item}`)
      }
    }
  }
</script>