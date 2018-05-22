<template>
  <section>
    <!-- Add a filter to exclude ingredients after results
    are displayed -->
    <Recipe  :recipes="recipes"/>
  </section>
</template>

<script>
import Recipe from '@/components/Recipe';

export default {
  components: {
    Recipe,
  },
  props: {
    recipes: Array,
  },
};
</script>

<style scoped>

section {
  margin: 5px;
  padding-bottom: 20px;
}

</style>
