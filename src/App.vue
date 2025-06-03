<template>
  <div id="app">
     <VxeTableV3 />
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
import VxeTableV3 from './components/VxeTableV3.vue';

export default {
  name: 'App',
  components: {
    VxeTableV3,
  }
}
</script>

<style>
body {
  margin: 0;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  height: 100vh;
}
</style>
