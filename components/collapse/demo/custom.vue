<template>
  <v-collapse :bordered="false" v-model="defaultActiveIndex">
    <v-panel header="This is panel header 1" index="1" :style="style">
      <p>{{text}}</p>
    </v-panel>
    <v-panel header="This is panel header 2" index="2" :style="style">
      <p>{{text}}</p>
    </v-panel>
    <v-panel header="This is panel header 3" index="3" :style="style">
      <p>{{text}}</p>
    </v-panel>
  </v-collapse>
</template>
<script>
  export default {
    data() {
      return {
        style: {
          background: '#f7f7f7',
          borderRadius: "4px",
          marginBottom: "24px",
          border: 0,
        },
        text: `A dog is a type of domesticated animal.
        Known for its loyalty and faithfulness,
        it can be found as a welcome guest in many households across the world.
        `,
        defaultActiveIndex: ['1']
      }
    }
  }
</script>