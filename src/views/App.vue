<template>
  <div id="app">
    <div class="header">
      <div class="nav">
        <router-link to="/" class="nav-item">index</router-link>
        <router-link to="about" class="nav-item">about</router-link>
        <router-link to="icon" class="nav-item">icon</router-link>
        <router-link to="media" class="nav-item">media</router-link>
      </div>
    </div>
    <div class="main">
      <router-view/>
    </div>
  </div>
</template>

<script>
export default {
  name: 'App.vue'
}
</script>

<style scoped>

</style>
