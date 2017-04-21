<template>
  <section>
    <v-badge :count="99">
      <a href="#" class="head-example" />
    </v-badge>
    <v-badge :count="100">
      <a href="#" class="head-example" />
    </v-badge>
    <v-badge :count="99" :overflowCount="10">
      <a href="#" class="head-example" />
    </v-badge>
    <v-badge :count="1000" :overflowCount="999">
      <a href="#" class="head-example" />
    </v-badge>
  </section>
</template>