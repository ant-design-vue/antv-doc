<template>
  <section>
    <v-input type="textarea" autosize placeholder="请输入..."></v-input>
    <br/>
    <br/>
    <v-input type="textarea" :autosize="{minRows: 2,maxRows: 5}" placeholder="请输入..."></v-input>
  </section>
</template>