<template>
  <section id="top">
    <form @submit.prevent="getParams(formSubmitted()), getData()">
      <label for="searchParams">Add Ingredients (separate each item with a comma)</label>
      <div>
        <!-- @change="displayMatches" move down one line to activate autocomplete -->
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
    paramData: '',
    ingredientsArr: [],
  }),
  props: ['queryString', 'getParams', 'getData', 'ingredients'],
  methods: {
    formSubmitted() {
      const result = this.searchParams.split(',').reduce((acc, ingredient) => {
        acc += `&allowedIngredient[]=${ingredient.trim()}`;
        // console.log(acc);
        return acc;
      }, '');
      return result;
    },
    // Type ahead feature - v-modeling the ingredient endpoint
    // from huge ass JSON file
    // findMatches() {
    //   return this.ingredients.filter((ingredient) => {
    //     var regex = new RegExp(this.searchParams, 'gi');
    //     return ingredient.match(regex);
    //   });
    // },
    // displayMatches() {
    //   console.log('text');
    //   const param = this.searchParams.slice(this.paramData);
    //   console.log(param);
    //   const matchArray = this.findMatches(param, this.ingredients);
    //   console.log(matchArray);
    //   const html = matchArray.map((ingredient) => {
    //     // var regex = new RegExp(ingredient, 'gi');
    //     // don't think this is needed?
    //     // const ingredientName = ingredient.replace(regex,
    //     // `<span class="hl">${ingredient}</span>`);
    //     // return ingredient;
    //     // `
    //     //   <li>
    //     //     <span>${ingredient}</span>
    //     //   </li>
    //     // `;
    //   return this.ingredientsArr.push(html);
    //   });
    // },
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

  .suggestions {
  margin: 0;
  padding: 0;
  position: relative;
  /*perspective:20px;*/
  }
  .suggestions li {
    color: red;
    background:white;
    list-style: none;
    border-bottom: 1px solid #D8D8D8;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.14);
    margin:0;
    padding:20px;
    transition:background 0.2s;
    display:flex;
    justify-content:space-between;
    text-transform: capitalize;
  }

  .suggestions li:nth-child(even) {
    transform: perspective(100px) rotateX(3deg) translateY(2px) scale(1.001);
    background: linear-gradient(to bottom,  #ffffff 0%,#EFEFEF 100%);
  }
  .suggestions li:nth-child(odd) {
    transform: perspective(100px) rotateX(-3deg) translateY(3px);
    background: linear-gradient(to top,  #ffffff 0%,#EFEFEF 100%);
  }

</style>
