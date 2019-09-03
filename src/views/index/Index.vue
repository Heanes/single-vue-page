<template>
  <div class="index">
    <h2 class="title">Welcome! This is index page.</h2>
    <HelloWorld/>
    <p>{{baseCommon}}</p>
  </div>
</template>

<script>
import common from '@/assets/js/common.js';
import '@/assets/css/common/common.scss';

import http from '@/api/index.js';
import HelloWorld from '@/components/HelloWorld.vue';

export default {
  name: 'Index',

  components: {
    HelloWorld: HelloWorld
  },

  data() {
    return {
      baseCommon: {}
    }
  },

  created () {
    common.common();
  },
  async mounted () {
    this.baseCommon = await http.common.queryBaseCommon();
  }
}
</script>

<style scoped>

</style>
