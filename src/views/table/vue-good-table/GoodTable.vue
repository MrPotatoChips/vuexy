<template>
  <b-row>
    <b-col cols="12">
      <good-table-ssr />
    </b-col>
  </b-row>
</template>

<script>
import { BRow, BCol } from 'bootstrap-vue'
import GoodTableSsr from './GoodTableSsr.vue'

export default {
  components: {
    BRow,
    BCol,
    GoodTableSsr,
  },
}
</script>

<style lang="scss" >
@import '@core/scss/vue/libs/vue-good-table.scss';
</style>
