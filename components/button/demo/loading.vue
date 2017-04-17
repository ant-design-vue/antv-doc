<template>
  <section>
    <v-button type="primary" loading>
      Loading
    </v-button>
    <v-button type="primary" size="small" loading>
      Loading
    </v-button>
    <br/>
    <v-button type="primary" :loading="loading" @click.native="enterLoading">
      Click me!
    </v-button>
    <v-button type="primary" icon="poweroff" :loading="iconLoading" @click.native="enterIconLoading">
      Click me!
    </v-button>
    <v-button type="primary" :loading="delayLoading" @click.native="enterDelayLoading">
      Won&apos;t show loading
    </v-button>
    <br/>
    <v-button shape="circle" loading/>
    <v-button type="primary" shape="circle" loading/>
  </section>
</template>
<script>
  export default {
    data() {
      return {
        loading: false,
        iconLoading: false,
        delayLoading: false
      }
    },
    methods: {
      enterLoading() {
        this.loading = true
      },
      enterIconLoading() {
        this.iconLoading = true
      },
      enterDelayLoading() {
        this.delayLoading = true
        setTimeout(() => (this.delayLoading = false), 1500)
      }
    }
  }
</script>
