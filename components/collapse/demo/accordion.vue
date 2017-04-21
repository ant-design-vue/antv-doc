<template>
  <v-collapse accordion>
    <v-panel header="This is panel header 1" index="1">
      <p>{{text}}</p>
    </v-panel>
    <v-panel header="This is panel header 2" index="2">
      <p>{{text}}</p>
    </v-panel>
    <v-panel header="This is panel header 3" index="3">
      <p>{{text}}</p>
    </v-panel>
  </v-collapse>
</template>
<script>
  export default {
    data() {
      return {
        text: `A dog is a type of domesticated animal.
        Known for its loyalty and faithfulness,
        it can be found as a welcome guest in many households across the world.
        `
      }
    }
  }
</script>