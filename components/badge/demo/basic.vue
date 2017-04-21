<template>
  <section>
    <v-badge :count="5">
      <a href="#" class="head-example" />
    </v-badge>
    <v-badge :count="0" showZero>
      <a href="#" class="head-example" />
    </v-badge>
  </section>
</template>
<style>
  .ant-badge:not(.ant-badge-status) {
    margin-right: 16px;
  }
  .head-example {
    width: 42px;
    height: 42px;
    border-radius: 6px;
    background: #eee;
    display: inline-block;
  }
</style>