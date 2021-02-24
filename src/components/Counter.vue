<template>
  <styled-wrapper>
    <styled-button @click="setDecrement">-</styled-button>
    {{ this.count }}
    <styled-button @click="setIncrement">+</styled-button>
  </styled-wrapper>
</template>

<script>
import { mapState, mapActions } from "vuex";
import styled from "vue-styled-components";

const Wrapper = styled.div`
  border: 1px solid;
  padding: 16px;
  align-items: center;
  border-radius: 4px;
  border: 1px solid #e4e4e4;
  display: flex;
  font-size: 24px;
  justify-content: center;
  width: 100px;
  margin: 0 auto;
`;

const Button = styled.button`
  background: none;
  border-radius: 4px;
  border: 1px solid #e4e4e4;
  color: red;
  font-size: 16px;
  font-weight: 700;
  height: 24px;
  margin: 0 16px;
  width: 24px;
`;

export default {
  name: "Counter",
  components: { "styled-wrapper": Wrapper, "styled-button": Button },
  computed: mapState(["count"]),
  methods: { ...mapActions(["setIncrement", "setDecrement"]) },
};
</script>


