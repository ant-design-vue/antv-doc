<template>
  <section>
    <v-alert message="Warning Text Warning Text Warning TextW arning Text Warning Text Warning TextWarning Text"
             type="warning"
             closable
             @onClose="onClose"
    />
    <v-alert message="Error Text"
             description="Error Description Error Description Error Description Error Description Error Description Error Description"
             type="error"
             closable
             @onClose="onClose"
    />
  </section>
</template>
<script>
  export default {
    methods: {
      onClose(e) {
        console.log(e, 'I was closed.');
      }
    }
  }
</script>