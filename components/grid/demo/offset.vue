<template>
  <section>
    <v-row>
      <v-col :span="8">col-8</v-col>
      <v-col :span="8" :offset="8">col-8</v-col>
    </v-row>
    <v-row>
      <v-col :span="6" :offset="6">col-6 col-offset-6</v-col>
      <v-col :span="6" :offset="6">col-6 col-offset-6</v-col>
    </v-row>
    <v-row>
      <v-col :span="12" :offset="6">col-12 col-offset-6</v-col>
    </v-row>
  </section>
</template>