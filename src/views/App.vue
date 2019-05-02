<template>
  <div id="app">
    <router-link to="/">index</router-link>
    <router-link to="about">about</router-link>
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App.vue'
}
</script>

<style scoped>

</style>
