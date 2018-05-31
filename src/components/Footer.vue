<template>
  <footer>
    <small>© Travis Roach, 2018</small>
    <div :attribution="getAttribution">
      <small>Recipe search powered by</small>
      <a href='http://www.yummly.co/recipes'><img alt='Yummly' src='https://static.yummly.co/api-logo.png'/></a>
    </div>
  </footer>
</template>

<script>
import API from '@/lib/API';

export default {
  data: () => ({
    attribution: Object,
  }),
  methods: {
    getAttribution() {
      fetch((API.API_URL), {
        headers: {
          'X-Yummly-App-ID': '2c80b334',
          'X-Yummly-App-Key': 'bf5c0c89d4fc90c63f3dc60f69314e05',
        },
      })
        .then(res => res.json())
        .then((recipes) => {
          this.attribution = recipes.attribution;
        });
    },
  },
};
</script>

<style scoped>

footer {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding-top: 5px;
  padding-left: 30px;
  padding-right: 30px;
}

small {
  margin-top: 10px;
  color: black;
  font-size: .5rem;
  margin-left: 10px;
}

</style>
