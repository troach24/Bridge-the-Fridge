<template>
  <section id="top">
    <form @submit.prevent="getParams(formSubmitted()), getData()">
      <label for="searchParams">Add Ingredients (separated by commas)</label>
      <div id="search-bar">
        <input
          v-model="searchParams"
          type="text"
          class="form-control"
          placeholder="What's in your fridge?"
          aria-label="What's in your fridge?"
          aria-describedby="basic-addon2">
        <button class="btn btn-sm btn-outline-secondary" type="submit">Search</button>
      </div>
    </form>
    <ul class="suggestions">
      <li :key="ingredient.searchValue" v-for="ingredient in ingredientsArr">{{ingredient}}</li>
    </ul>
  </section>
</template>

<script>

export default {
  data: () => ({
    searchParams: '',
    ingredientsArr: [],
  }),
  props: ['queryString', 'getParams', 'getData', 'ingredients'],
  methods: {
    formSubmitted() {
      const result = this.searchParams.split(',').reduce((acc, ingredient) => {
        acc += `&allowedIngredient[]=${ingredient.trim()}`;
        return acc;
      }, '');
      return result;
    },
  },
};
</script>

<style scoped>

section {
  display: flex;
  flex-direction: row;
  justify-content: center;
}

#search-bar {
  display: flex;
  flex-direction: column;
}

</style>
