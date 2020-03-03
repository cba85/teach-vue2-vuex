<template>
  <div class="home">
    <Sum />
  </div>
</template>

<script>
// @ is an alias to /src
import Sum from "@/components/Sum.vue";

export default {
  name: "Home",
  components: {
    Sum
  }
};
</script>
