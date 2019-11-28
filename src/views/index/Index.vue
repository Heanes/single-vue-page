<template>
  <div class="index">
    <h2 class="title">Welcome! This is index page.</h2>
    <HelloWorld/>
    <pre>{{baseCommon}}</pre>
    <pre>{{navList}}</pre>
  </div>
</template>

<script>
import common from '@/assets/js/common.js';
import '@/assets/css/common/common.scss';

import HelloWorld from '@/components/HelloWorld.vue';

export default {
  name: 'Index',

  components: {
    HelloWorld: HelloWorld
  },

  data() {
    return {
      baseCommon: {},
      navList: {}
    }
  },

  created () {
    common.common();
  },
  async mounted () {
    // this.baseCommon = JSON.stringify(await http.common.queryBaseCommon(), null, 2);

    /* this.$http.post(this.$api.common.queryBaseCommon, {}, {
      baseURL: 'https://mock.dev.heanes.com/api/'
    }).then((res) => {
      console.log(res);
    }); */

    // promise方式调用取值
    this.$http.post(this.$api.common.queryBaseCommon, {}).then((res) => {
      this.baseCommon = res;
    });

    // async和await方式调用取值
    this.navList = JSON.stringify(await this.$http.post(this.$api.common.queryNavList, {}), null, 2);
  }
}
</script>

<style scoped>
  pre{
    border: 1px solid #ddd;
    border-radius: 4px;
    padding: 4px;
    background-color: #f8f8f8;
  }
</style>
