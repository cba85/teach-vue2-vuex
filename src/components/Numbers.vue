<template>
  <div>
    <ul v-if="numbers.length">
      <li v-for="number in numbers" :key="number.index">{{ number }}</li>
    </ul>
    <!-- Add a random number -->
    <p v-else>No number.</p>
    <AddNumber />
  </div>
</template>

<script>
import AddNumber from "./AddNumber";

export default {
  name: "Numbers",
  computed: {
    numbers() {
      return this.$store.getters.numbers;
    }
  },
  components: {
    AddNumber
  }
};
</script>