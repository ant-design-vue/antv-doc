<template>
  <section>
    <v-button type="primary" @click.native="visible1 = true">Display a modal dialog at 20px to Top</v-button>
    <v-modal
        v-model="visible1"
        title="20px to Top"
        :modalStyle="style"
        @onOk="visible1 = false"
        @onCancel="visible1 = false">
      <p>some contents...</p>
      <p>some contents...</p>
      <p>some contents...</p>
    </v-modal>
    <br /><br />
    <v-button type="primary" @click.native="visible2 = true">Vertically centered modal dialog</v-button>
    <v-modal
        v-model="visible2"
        title="Vertically centered modal dialog"
        wrapClassName="vertical-center-modal"
        @onOk="visible2 = false"
        @onCancel="visible2 = false">
      <p>some contents...</p>
      <p>some contents...</p>
      <p>some contents...</p>
    </v-modal>
  </section>
</template>
<style>
  /* use css to set position of modal */
  .vertical-center-modal {
    text-align: center;
    white-space: nowrap;
  }

  .vertical-center-modal:before {
    content: '';
    display: inline-block;
    height: 100%;
    vertical-align: middle;
    width: 0;
  }

  .vertical-center-modal .ant-modal {
    display: inline-block;
    vertical-align: middle;
    top: 0;
    text-align: left;
  }
</style>
<script>
  export default {
    data() {
      return {
        style: { top: '20px' },
        visible1: false,
        visible2: false
      }
    }
  }
</script>
