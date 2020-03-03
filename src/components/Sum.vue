<template>
  <div>
    <!-- No direct access -->
    <p>{{ $store.state.number }}</p>
    <!-- Use getters -->
    <p>{{ $store.getters.number }}</p>
    <!-- Computed -->
    <p>{{ number }}</p>
    <!-- Sum -->
    {{ sum }}
    <!-- Numbers -->
    <!--
    <ul>
      <li v-for="number in numbers" :key="number.index">{{ number }}</li>
    </ul>
    -->
    <Numbers />
    <p>You have generated {{ totalNumbers }} numbers</p>
  </div>
</template>

<script>
import Numbers from "./Numbers";
import { mapGetters } from "vuex";

export default {
  name: "Sum",
  components: {
    Numbers
  },
  computed: {
    /*
    number() {
      return this.$store.getters.number;
    },
    sum() {
      return this.$store.getters.sum;
    },
    numbers() {
      return this.$store.getters.numbers;
    },
    totalNumbers() {
      return this.$store.getters.totalNumbers;
    }
    */
    //...mapGetters(["sum", "number", "numbers", "totalNumbers"])
    ...mapGetters({
      sum: "sum",
      number: "number",
      numbers: "numbers",
      totalNumbers: "totalNumbers"
    })
  }
};
</script>
