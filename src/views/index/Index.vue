<template>
  <div class="index">
    <h2 class="title">Welcome! This is index page.</h2>
    <p>{{baseCommon}}</p>
  </div>
</template>

<script>
import common from '../static/js/common.js';
import '../static/css/common/common.scss';

import api from '@/api/index.js';

export default {
  name: 'Index',

  data() {
    return {
      baseCommon: {}
    }
  },

  created () {
    common.common();
  },
  async mounted () {
    this.baseCommon = await api.common.queryBaseCommon();
  }
}
</script>

<style scoped>

</style>
