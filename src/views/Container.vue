<template>
  <main>
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
    getData() {
      fetch((API.API_URL + this.queryString), {
        headers: {
          'X-Yummly-App-ID': API.ID,
          'X-Yummly-App-Key': API.KEY,
        },
      })
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
    min-height: 75vh;
    z-index: 2;
    margin-top: 50px;
    background-color: white;
  }

</style>
