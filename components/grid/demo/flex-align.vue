<template>
  <section>
    <p>Align Top</p>
    <v-row type="flex" justify="center" align="top">
      <v-col :span="4">
        <demo-box value="100">col-4</demo-box>
      </v-col>
      <v-col :span="4">
        <demo-box value="50">col-4</demo-box>
      </v-col>
      <v-col :span="4">
        <demo-box value="120">col-4</demo-box>
      </v-col>
      <v-col :span="4">
        <demo-box value="80">col-4</demo-box>
      </v-col>
    </v-row>

    <p>Align Center</p>
    <v-row type="flex" justify="space-around" align="middle">
      <v-col :span="4">
        <demo-box value="100">col-4</demo-box>
      </v-col>
      <v-col :span="4">
        <demo-box value="50">col-4</demo-box>
      </v-col>
      <v-col :span="4">
        <demo-box value="120">col-4</demo-box>
      </v-col>
      <v-col :span="4">
        <demo-box value="80">col-4</demo-box>
      </v-col>
    </v-row>

    <p>Align Bottom</p>
    <v-row type="flex" justify="space-between" align="bottom">
      <v-col :span="4">
        <demo-box value="100">col-4</demo-box>
      </v-col>
      <v-col :span="4">
        <demo-box value="50">col-4</demo-box>
      </v-col>
      <v-col :span="4">
        <demo-box value="120">col-4</demo-box>
      </v-col>
      <v-col :span="4">
        <demo-box value="80">col-4</demo-box>
      </v-col>
    </v-row>
  </section>
</template>
<script type="text/babel">
  export default {
    components: {
      DemoBox: {
        props: {
          value: String
        },
        render(createElement) {
          return createElement(
            'p',
            {
              'class': {
                [`height-${this.value}`]: this.value,
              }
            },
            this.$slots.default)
        }
      }
    }
  }
</script>