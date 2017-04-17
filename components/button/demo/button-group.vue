<template>
  <section>
    <h4>Basic</h4>
    <v-button-group>
      <v-button>Cancel</v-button>
      <v-button type="primary">OK</v-button>
    </v-button-group>
    <v-button-group>
      <v-button disabled>L</v-button>
      <v-button disabled>M</v-button>
      <v-button disabled>R</v-button>
    </v-button-group>
    <v-button-group>
      <v-button type="primary">L</v-button>
      <v-button>M</v-button>
      <v-button>M</v-button>
      <v-button type="dashed">R</v-button>
    </v-button-group>

    <h4>With Icon</h4>
    <v-button-group>
      <v-button type="primary">
        <v-icon type="left" />Go back
      </v-button>
      <v-button type="primary">
        Go forward<v-icon type="right" />
      </v-button>
    </v-button-group>
    <v-button-group>
      <v-button type="primary" icon="cloud" />
      <v-button type="primary" icon="cloud-download" />
    </v-button-group>
  </section>
</template>