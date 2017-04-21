<template>
  <section>
    <v-radio-group v-model="checked1">
      <v-radio-button label="a">Hangzhou</v-radio-button>
      <v-radio-button label="b">Shanghai</v-radio-button>
      <v-radio-button label="c">Beijing</v-radio-button>
      <v-radio-button label="d">Chengdu</v-radio-button>
    </v-radio-group>
    <br/>
    <br/>
    <v-radio-group v-model="checked2">
      <v-radio-button label="a">Hangzhou</v-radio-button>
      <v-radio-button label="b" disabled>Shanghai</v-radio-button>
      <v-radio-button label="c">Beijing</v-radio-button>
      <v-radio-button label="d">Chengdu</v-radio-button>
    </v-radio-group>
    <br/>
    <br/>
    <v-radio-group disabled v-model="checked3">
      <v-radio-button label="a">Hangzhou</v-radio-button>
      <v-radio-button label="b">Shanghai</v-radio-button>
      <v-radio-button label="c">Beijing</v-radio-button>
      <v-radio-button label="d">Chengdu</v-radio-button>
    </v-radio-group>
  </section>
</template>
<script>
  export default {
    data() {
      return {
        checked1: 'a',
        checked2: 'b',
        checked3: 'c'
      }
    }
  }
</script>