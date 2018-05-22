<template>
  <section id="top">
    <form @submit.prevent="getParams(formSubmitted()), getData()">
      <label for="searchParams">Add Ingredients (separate each item with a comma)</label>
      <div>
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
    <!-- Stretch: Type ahead feature from JS 30 #6 - need to get ingredient
    endpoint from that huge ass JSON file brah -->

    <!-- Emit search params (ingredients) to an array @ top level?!?!?!?! Separated by comma... -->
  </section>
</template>

<script>

export default {
  data: () => ({
    searchParams: '',
  }),
  props: ['queryString', 'getParams', 'getData'],
  methods: {
    formSubmitted() {
      const result = this.searchParams.split(',').reduce((str, ingredient) => {
        str += `&allowedIngredient[]=${ingredient.trim()}`;
        return str;
      }, '');
      console.log(result);
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
    width: 75%;
  }

  div {
    display: flex;
    flex-direction: row;
  }

</style>
