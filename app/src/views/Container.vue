<template>
  <main>
    <!-- :ingredients="ingredients" -->
    <SearchBar
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

export default {
  components: {
    SearchBar,
    Recipes,
  },
  data: () => ({
    recipes: Object,
    queryString: '',
  }),
  methods: {
    getParams(str) {
      this.queryString = str;
    },
    // HIDE the f'ing api keys from the network dev tools...recipe by ID request too
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
