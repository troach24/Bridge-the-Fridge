<template>
    <li
    :recipe="recipe"
    class="li-component">
      <b-card
      :ref="recipe.id">
        <b-card-body>
          <div class="card-title">
            <img :src="recipe.imageUrlsBySize[90]" alt="Recipe Thumbnail">
            <h4>{{recipe.recipeName}}</h4>
          </div>
          <p class="card-text">
            <img src="https://www.glutafin.co.uk/img/icons/time-icon.png" alt="Cook Time Icon">
            &nbspCook time: {{recipe.totalTimeInSeconds / 60}}  Minutes
          </p>
          <!-- <b-btn v-b-modal="'myModal'">See More</b-btn> -->
          <!-- v-b-modal.myModal -->

          <!-- <b-btn v-b-modal.modal-center>Launch centered modal</b-btn>

          <b-modal id="modal-center" centered title="Bootstrap-Vue">
            <p class="my-4">Vertically centered modal!</p>
          </b-modal> -->
          
          <b-btn
          v-b-modal.modal-center
          @click="show=true, ev()"
          variant="primary">
            See More
          </b-btn>
          <b-modal id="modal-center" v-model="show"
          :title="recipe.recipeName">
            Hello From My Modal!
          </b-modal>
        </b-card-body>
      </b-card>
    </li>

  <!-- Based on search results, fetch images by ID then
   displays that larger image dynamically to each component -->

   <!-- do a MODAL on click (bootstrap) -->

   <!-- List what you don't have on each component ? -->

</template>

<script>
import API from '@/lib/API';

export default {
  props: ['recipe'],
  data: () => ({
    totalCookTime: Number,
    show: false,
    // name: String,
    // st: "hellodjafdsojfnadsufadsiufasddkafndfansdfndsfdsafasddsf",
  }),
  methods: {
    cookTime: function() {
      return this.totalCookTime / 60;
    },
    ev() {
      console.log(this.$refs)
      console.log(API.RECIPE_URL);
      
    }
    // shortenString() {
    //   this.name.substr(0,20) + "..."
    // },
    // newStr() {
    //   this.st.substr(0,7) + "..."
    // },
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

/* #ul-ingredients {
  display: flex;
  justify-content: flex-start;
  flex-flow: row wrap;
  padding: 0;
  margin-top: 3vh;
  columns: 2;
  -webkit-columns: 2;
  -moz-columns: 2;
  list-style-type: disc;
  break-inside: avoid-column;
  -webkit-column-break-inside: avoid;
  font-size: 0.8rem;
} */

/* .li-ingredient {
  width: 45%;
  line-height: 1.4;
} */

/* li.li-ingredient:first-child {
  margin-right: 5%;
} */

</style>
