<template>
  <section>
    <v-button type="primary">Primary</v-button>
    <v-button type="primary" disabled>Primary(disabled)</v-button>
    <br />
    <v-button>Default</v-button>
    <v-button disabled>Default(disabled)</v-button>
    <br />
    <v-button>Ghost</v-button>
    <v-button disabled>Ghost(disabled)</v-button>
    <br />
    <v-button type="dashed">Dashed</v-button>
    <v-button type="dashed" disabled>Dashed(disabled)</v-button>
  </section>
</template>
<script>
  export default {
    data() {
      return {
        loading: false,
        loading2: false
      }
    },
    methods: {
      toLoading() {
        this.loading = true
      },
      toLoading2() {
        this.loading2 = true
      }
    }
  }
</script>
