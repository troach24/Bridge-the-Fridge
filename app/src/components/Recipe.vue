<template>
  <ul>
    <li
    :key="recipe.id"
    v-for="recipe in recipes">
      <header>{{recipe.recipeName}}</header>
      <div>
        <img :src="recipe.imageUrlsBySize[90]">
      </div>
    </li>
  </ul>

  <!-- Based on search results, fetch images by ID then
   displays that larger image dynamically to each component -->

   <!-- do a MODAL on click (bootstrap) -->

   <!-- List what you don't have on each component ? -->

</template>

<script>
export default {
  props: ['recipes'],
  data: () => ({
    recipe: '',
  }),
  methods: {
  },
};
</script>

<style scoped>

ul {
  display: flex;
  flex-flow: row wrap;
  justify-content: space-evenly;
  padding: 0;
  margin-top: 50px;
}

li {
  height: 200px;
  width: 250px;
  border: 1px solid black;
  background-color: white;
  margin: 10px;
  list-style-type: none;
  display: flex;
  flex-direction: column;
}

header {
  height: 20%;
  display: flex;
  justify-content: center;
}

div {
  display: flex;
  justify-content: center;
}

img {
  margin-top: 15px;
}

</style>
