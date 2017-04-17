<template>
  <section>
    <v-radio-group v-model="size">
      <v-radio-button label="large">Large</v-radio-button>
      <v-radio-button label="default">Default</v-radio-button>
      <v-radio-button label="small">Small</v-radio-button>
    </v-radio-group>
    <br /><br />
    <v-button type="primary" shape="circle" icon="download" :size="size" />
    <v-button type="primary" icon="download" :size="size">Download</v-button>
    <v-button type="primary" :size="size">Normal</v-button>
    <br />
    <v-button-group :size="size">
      <v-button type="primary">
        <v-icon type="left" />Backward
          </v-button>
      <v-button type="primary">
        Forward<v-icon type="right" />
      </v-button>
    </v-button-group>
  </section>
</template>
<script>
  export default {
    data() {
      return {
        size: 'default'
      }
    }
  }
</script>
