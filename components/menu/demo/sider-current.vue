<template>
  <v-menu
      mode="inline"
      :uniqueOpened="true"
      style="width: 240px;"
      @onOpenChange="onOpenChange">
    <v-menu-item index="0">
      <v-icon type="mail"/>
      Option 1
    </v-menu-item>
    <v-sub-menu index="sub1">
      <template slot="title">
        <v-icon type="mail"/>
        <span>Navigation One</span>
      </template>
      <v-menu-item-group title="Item 1">
        <v-menu-item index="1">Option 1</v-menu-item>
        <v-menu-item index="2">Option 2</v-menu-item>
      </v-menu-item-group>
      <v-menu-item-group title="Item 2">
        <v-menu-item index="3">Option 3</v-menu-item>
        <v-menu-item index="4">Option 4</v-menu-item>
      </v-menu-item-group>
    </v-sub-menu>
    <v-sub-menu index="sub2">
      <template slot="title">
        <span><v-icon type="appstore"/><span>Navigation Two</span></span>
      </template>
      <v-menu-item index="5">Option 5</v-menu-item>
      <v-menu-item index="6">Option 6</v-menu-item>
      <v-sub-menu index="sub3">
        <template slot="title">
          Submenu

        </template>
        <v-menu-item index="7">Option 7</v-menu-item>
        <v-menu-item index="8">Option 8</v-menu-item>
      </v-sub-menu>
    </v-sub-menu>
    <v-sub-menu index="sub4">
      <template slot="title">
        <span><v-icon type="setting"/><span>Navigation Three</span></span>
      </template>
      <v-menu-item index="9">Option 9</v-menu-item>
      <v-menu-item index="10">Option 10</v-menu-item>
      <v-menu-item index="11">Option 11</v-menu-item>
      <v-menu-item index="12">Option 12</v-menu-item>
    </v-sub-menu>
  </v-menu>
</template>
<script>
  export default {
    methods: {
      onOpenChange(openIndexs) {
        console.log(openIndexs)
      }
    }
  }
</script>