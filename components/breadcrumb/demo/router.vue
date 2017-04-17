<template>
  <section>
    <v-breadcrumb separator="/">
      <v-breadcrumb-item :to="{ path: '/'}">
        <v-icon type="home"/>
      </v-breadcrumb-item>
      <v-breadcrumb-item to="./">
        <v-icon type="user"/>
        <span>Application List</span>
      </v-breadcrumb-item>
      <v-breadcrumb-item>Application</v-breadcrumb-item>
    </v-breadcrumb>
  </section>
</template>
<style>
  .demo {
    margin: 16px;
  }
  .demo-nav {
    height: 30px;
    line-height: 30px;
    margin-bottom: 16px;
    background: #f8f8f8;
  }
  .demo-nav a {
    line-height: 30px;
    padding: 0 8px;
  }
  .app-list {
    margin-top: 16px;
  }
</style>
<script>
  import VueRouter from 'vue-router'

  export default {
    router: new VueRouter({
        mode: 'history'
      }
    )
  }
</script>