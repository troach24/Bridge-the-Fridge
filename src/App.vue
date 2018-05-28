<template>
  <div id="app">
    <Header />
    <router-view/>
    <Footer />
  </div>
</template>

<script>
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export default {
  name: 'App',
  components: {
    Header,
    Footer,
  },
};
</script>

<style>
html {
  margin: 0;
  padding: 0;
}

#app {
  margin: 0;
  padding: 0;
  display: flex;
  flex-direction: column;
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
}

small {
  color: black;
  font-size: .5rem;
  margin-left: 10px;
}

</style>
