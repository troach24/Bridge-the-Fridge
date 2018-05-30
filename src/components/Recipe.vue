<template>
  <div id="recipe-container">
    <li :recipe="recipe" class="li-component">
      <b-card>
        <b-card-body>
          <div class="card-title">
            <img class="thumbnail-img" :src="recipe.imageUrlsBySize[90]" alt="Recipe Thumbnail">
            <h4>{{recipe.recipeName}}</h4>
          </div>
          <div class="card-text">
            <img
            class="cook-time-icon"
            src="https://www.glutafin.co.uk/img/icons/time-icon.png"
            alt="Cook Time Icon">
            <p> &nbsp; Cook time: {{recipe.totalTimeInSeconds / 60}}  Minutes</p>
          </div>
          <b-btn
          :ref="recipe.id"
          v-b-modal.modal-center
          @click="show=true, getRecipe(recipeId)"
          variant="primary">
            See More
          </b-btn>
        </b-card-body>
      </b-card>
      <b-modal hide-footer="true" size="lg" id="modal-center1" v-model="show"
      :title="selectedRecipe.name">
        <body class="model-body">
          <img :src="selectedRecipe.images && selectedRecipe.images[0].imageUrlsBySize[360]" alt="">
          <h5>What You'll Need:</h5>
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
    getRecipe() {
      this.recipeId = this.recipe.id;
      fetch(API.RECIPE_URL + this.recipeId + API.KEYS)
        .then(res => res.json())
        .then((selectedRecipe) => {
          this.selectedRecipe = selectedRecipe;
        });
    },
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

.thumbnail-img {
  height: auto;
  width: 90px;
}

.cook-time-icon {
  height: 50px;
  width: 50px;
}

.card-text {
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-top: 10px;
  margin-bottom: 10px;
}

.card-text p {
  margin: 0;
}

/* MODAL STYLES */

body.model-body {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.modal-body img {
  width: 70%;
  height: auto;
}

.modal-body ul {
  font-size: 1.2rem;
  margin-top: 10px;
  padding-left: 50px;
  font-family: inherit;
}

.modal-body h5 {
  margin-top: 20px;
  font-size: 2rem;
}

</style>
