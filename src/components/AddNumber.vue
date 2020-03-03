<template>
  <div>
    <a href="#" @click.prevent="addUsingApi">Add a random number</a>
  </div>
</template>

<script>
import { mapActions } from "vuex";

export default {
  name: "AddNumber",
  methods: {
    ...mapActions({
      fetchRandomNumber: "fetchRandomNumber"
    }),
    add() {
      //this.$store.state.numbers.push(1);
      //this.$store.commit("addNumber", Math.floor(Math.random() * (100 - 1) + 1));
      this.$store.commit("addRandomNumber", { min: 1, max: 100 });
    },
    addUsingApi() {
      //this.$store.dispatch("fetchRandomNumber", { min: 1, max: 100 });
      this.fetchRandomNumber({ min: 1, max: 100 });
    }
  }
};
</script>
