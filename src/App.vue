<template>
  <div id="app">
    <vCounter />
  </div>
</template>

<script>
import vCounter from "./components/Counter";

export default {
  name: "App",
  components: {
    vCounter,
  },
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  margin-top: 60px;
}
</style>
