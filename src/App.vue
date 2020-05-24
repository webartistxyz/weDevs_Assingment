<template>
  <div id="app">
    <Todos />
  </div>
</template>

<script>
import Todos from "./views/Todos.vue";

export default {
  name: "App",
  components: {
    Todos,
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #83807f;
  margin-top: 60px;
}
</style>
