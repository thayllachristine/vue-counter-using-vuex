<template>
  <div>
    <button @click="setDecrement">-</button>
    {{ this.count }}
    <button @click="setIncrement">+</button>
  </div>
</template>

<script>
import { mapState, mapActions } from "vuex";

export default {
  name: "Counter",
  computed: mapState(["count"]),
  methods: { ...mapActions(["setIncrement", "setDecrement"]) },
};
</script>

<style scoped>
div {
  align-items: center;
  display: flex;
  font-size: 24px;
  justify-content: center;
  width: 100%;
}

button {
  background: none;
  border-radius: 4px;
  border: 1px solid #e4e4e4;
  font-weight: 700;
  height: 48px;
  margin: 0 16px;
  padding: 16px;
  width: 48px;
}
</style>
