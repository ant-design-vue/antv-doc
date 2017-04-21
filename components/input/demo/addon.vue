<template>
  <section>
    <v-input placeholder="请输入内容" v-model="input" style="width: 300px">
      <template slot="addonBefore">Http://</template>
      <template slot="addonAfter">.com</template>
    </v-input>
    <br/>
    <v-input placeholder="请输入内容" v-model="input" style="width: 300px">
      <template slot="addonBefore">
        <v-select v-model="beforeSelectValue">
          <v-option value="Http://">Http://</v-option>
          <v-option value="Https://">Https://</v-option>
        </v-select>
      </template>
      <template slot="addonAfter">
        <v-select v-model="afterSelectValue">
          <v-option value=".com">.com</v-option>
          <v-option value=".jp">.jp</v-option>
          <v-option value=".cn">.cn</v-option>
          <v-option value=".org">.org</v-option>
        </v-select>
      </template>
    </v-input>
    <br/>
    <v-input placeholder="请输入内容" v-model="input" style="width: 300px">
      <template slot="addonAfter">
        <v-icon type="setting" />
      </template>
    </v-input>
  </section>
</template>
<script>
  export default {
    data() {
      return {
        input: 'mysite',
        beforeSelectValue: 'Http://',
        afterSelectValue: '.com'
      }
    }
  }
</script>
