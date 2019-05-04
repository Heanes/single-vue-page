<template>
  <div class="index">
    <h2 class="title">Welcome! This is index page.</h2>
  </div>
</template>

<script>
import common from '../static/js/common.js';
import '../static/css/common/common.scss';

export default {
  name: 'Index',

  created () {
    common.common();
  }
}
</script>

<style scoped>

</style>
