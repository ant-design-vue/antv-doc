<template>
  <section class="badge-no-wrapper">
    <v-badge :count="25"/>
    <v-badge :count="4" class="color-f"/>
    <v-badge :count="109" class="color-8"/>
  </section>
</template>
<style>
  .badge-no-wrapper .color-f .ant-badge-count {
    background-color: #fff;
    color: #999;
    boxShadow: 0 0 0 1px #d9d9d9 inset
  }

  .badge-no-wrapper .color-8 .ant-badge-count {
    background-color: #87d068
  }
</style>