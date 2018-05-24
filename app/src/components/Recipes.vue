<template>
  <section>
    <!-- Stretch - add a filter to exclude ingredients after results
    are displayed -->
    <ul id="recipes">
      <Recipe 
      :recipes="recipes"
      v-for="recipe in recipes"
      :key="recipe.id"
      :recipe="recipe" />
    </ul>
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

ul {
  display: flex;
  flex-flow: row wrap;
  justify-content: space-evenly;
  padding: 0;
  margin-top: 50px;
}

</style>
