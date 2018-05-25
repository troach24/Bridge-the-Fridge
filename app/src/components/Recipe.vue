<template>
  <div id="recipe-container">
    <li
    :recipe="recipe"
    class="li-component">
      <b-card>
        <b-card-body>
          <div class="card-title">
            <img :src="recipe.imageUrlsBySize[90]" alt="Recipe Thumbnail">
            <h4>{{recipe.recipeName}}</h4>
          </div>
          <p class="card-text">
            <img class="cook-time-icon" src="https://www.glutafin.co.uk/img/icons/time-icon.png" alt="Cook Time Icon">
            <!-- need to fix time function + switch to hours if over 60 min -->
            &nbsp Cook time: {{recipe.totalTimeInSeconds / 60}}  Minutes
          </p>
          <b-btn
          :ref="recipe.id"
          v-b-modal.modal-center
          @click="show=true, getRecipe(recipeId)"
          variant="primary">
            See More
          </b-btn>
        </b-card-body>
      </b-card>
      <b-modal size="lg" id="modal-center1" v-model="show"
      :title="selectedRecipe.name">
        <body class="model-body">
          <img :src="selectedRecipe.images && selectedRecipe.images[0].imageUrlsBySize[360]" alt="">
          <ul>
            <li
            :key="ingredient"
            :ingredient="selectedRecipe.ingredientLines"
            v-for="ingredient in selectedRecipe.ingredientLines">
            {{ingredient}}
            </li>
          </ul>
        </body>
      </b-modal>
    </li>
  </div>
   <!-- List what you don't have on each component ? -->
</template>

<script>
import API from '@/lib/API';

export default {
  props: ['recipe'],
  data: () => ({
    totalCookTime: Number,
    show: false,
    recipeId: String,
    selectedRecipe: Object,
  }),
  methods: {
    cookTime() {
      return this.totalCookTime / 60;
    },
    getRecipe() {
      this.recipeId = this.recipe.id;
      fetch(API.RECIPE_URL + this.recipeId + API.KEYS)
        .then(res => res.json())
        .then((selectedRecipe) => {
          this.selectedRecipe = selectedRecipe;
        });
    },
    // shortenString() {
    //   this.name.substr(0,20) + "..."
    // },
  },
};
</script>

<style scoped>

#recipe-container {
  margin-bottom: 0;
}

.li-component {
  width: 400px;
  min-height: 100px;
  margin: 5px;
  list-style-type: none;
  display: flex;
  flex-flow: wrap;
  flex-direction: column;
}

.card-title {
  display: flex;
  flex-flow: row;
  align-items: center;
  min-height: 75px;
  margin-bottom: 0;
}

.card-title h4 {
  margin-left: 10px;
}

div .card-body {
  padding: 10px;
  padding-top: 5px;
}

img {
  height: 50px;
  width: 50px;
}

.cook-time {
  display: flex;
  flex-direction: row;
}

div.cook-time p {
  margin: 0;
}

body.modal-body {
  height: 700px;
  width: 50%;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.modal-body img {
  width: 70%;
  height: auto;
}

.modal-body ul {
  font-size: 75%;
}

</style>
