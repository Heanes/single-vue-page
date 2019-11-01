<template>
  <div class="index">
    <h2 class="title">Welcome! This is index page.</h2>
    <HelloWorld/>
    <pre>{{baseCommon}}</pre>
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
    this.baseCommon = JSON.stringify(await http.common.queryBaseCommon(), null, 2);
  }
}
</script>

<style scoped>
  pre{
    border: 1px solid #ddd;
    border-radius: 4px;
    padding: 4px;
  }
</style>
