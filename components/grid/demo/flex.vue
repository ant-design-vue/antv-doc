<template>
  <section>
    <p>sub-element align left</p>
    <v-row type="flex" justify="start">
      <v-col :span="4">col-4</v-col>
      <v-col :span="4">col-4</v-col>
      <v-col :span="4">col-4</v-col>
      <v-col :span="4">col-4</v-col>
    </v-row>

    <p>sub-element align center</p>
    <v-row type="flex" justify="center">
      <v-col :span="4">col-4</v-col>
      <v-col :span="4">col-4</v-col>
      <v-col :span="4">col-4</v-col>
      <v-col :span="4">col-4</v-col>
    </v-row>

    <p>sub-element align right</p>
    <v-row type="flex" justify="end">
      <v-col :span="4">col-4</v-col>
      <v-col :span="4">col-4</v-col>
      <v-col :span="4">col-4</v-col>
      <v-col :span="4">col-4</v-col>
    </v-row>

    <p>sub-element monospaced arrangement</p>
    <v-row type="flex" justify="space-between">
      <v-col :span="4">col-4</v-col>
      <v-col :span="4">col-4</v-col>
      <v-col :span="4">col-4</v-col>
      <v-col :span="4">col-4</v-col>
    </v-row>

    <p>sub-element align full</p>
    <v-row type="flex" justify="space-around">
      <v-col :span="4">col-4</v-col>
      <v-col :span="4">col-4</v-col>
      <v-col :span="4">col-4</v-col>
      <v-col :span="4">col-4</v-col>
    </v-row>
  </section>
</template>