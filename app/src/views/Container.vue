<template>
  <main>
    <SearchBar
    :ingredients="ingredients"
    :queryString="queryString"
    :getParams="getParams"
    :getData="getData" />
    <Recipes :recipes="recipes.matches"/>
  </main>
</template>

<script>
import SearchBar from '@/components/SearchBar';
import Recipes from '@/components/Recipes';
import API from '@/lib/API';
import ingredients from '@/assets/ingredients.json';

export default {
  components: {
    SearchBar,
    Recipes,
  },
  data: () => ({
    recipes: Object,
    queryString: '',
    ingredients: Array,
  }),
  mounted() {
    // Not being used, yet.
    const result = JSON.parse(JSON.stringify(ingredients));
    this.ingredients = result.map(item => item.description);
  },
  methods: {
    getParams(str) {
      this.queryString = str;
    },
    // HIDE the f'ing api key from the network dev tools...
    getData() {
      fetch(API.API_URL + this.queryString)
        .then(res => res.json())
        .then((recipes) => {
          this.recipes = recipes;
        });
    },
  },
};
</script>

<style scoped>
  main {
    position: relative;
    z-index: 2;
    margin-top: 50px;
    background-color: white;
  }

</style>
