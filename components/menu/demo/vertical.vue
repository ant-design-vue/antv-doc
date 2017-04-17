<template>
  <section>
    <v-menu defaultSelectedIndex="item3:4:1" mode="horizontal">
      <v-menu-item index="item1">
        <v-icon type="mail"/>
        Navigation One
      </v-menu-item>
      <v-menu-item index="item2">
        <v-icon type="appstore"/>
        Navigation Two
      </v-menu-item>
      <v-sub-menu index="item3">
        <template slot="title">
          <span><v-icon type="setting"/>Navigation Three - Submenu</span>
        </template>
        <v-menu-item-group title="Item 1">
          <v-menu-item index="item3:1">
            option1
          </v-menu-item>
          <v-menu-item index="item3:2">
            option2
          </v-menu-item>
          <v-menu-item index="item3:3">
            option3
          </v-menu-item>
        </v-menu-item-group>
        <v-sub-menu index="item3:4">
          <template slot="title">
            <span>Submenu</span>
          </template>
          <v-menu-item index="item3:4:1">
            option1
          </v-menu-item>
          <v-menu-item index="item3:4:2">
            option2
          </v-menu-item>
          <v-menu-item index="item3:4:3">
            option3
          </v-menu-item>
        </v-sub-menu>
      </v-sub-menu>
      <v-menu-item index="item4">
        <a href="https://ant.design" target="_blank" rel="noopener noreferrer">Navigation Four - Link</a>
      </v-menu-item>
    </v-menu>
  </section>
</template>