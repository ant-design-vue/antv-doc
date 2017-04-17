<template>
  <section>
    <div class="gutter-example">
      <v-row :gutter="16">
        <v-col class="gutter-row" :span="6">
        <div class="gutter-box">col-6</div>
        </v-col>
        <v-col class="gutter-row" :span="6">
        <div class="gutter-box">col-6</div>
        </v-col>
        <v-col class="gutter-row" :span="6">
        <div class="gutter-box">col-6</div>
        </v-col>
        <v-col class="gutter-row" :span="6">
        <div class="gutter-box">col-6</div>
        </v-col>
      </v-row>
    </div>
  </section>
</template>
<style>
  .gutter-example .ant-row > div {
    background: transparent;
    border: 0;
  }
  .gutter-box {
    background: #00A0E9;
    padding: 5px 0;
  }
</style>