<template>
  <div id="app">
    <Navbar/>
    <router-view/>
  </div>
</template>

<script>
  import Navbar from '../src/components/TheNavbar'
  
  export default {
    components: {
      Navbar
    },
  };
</script>

<style>

#app{
  background-color: rgba(184, 178, 183, 0.2);
  height: 100%;
}

body {
    margin: 0;
    height: 100vh;
}

* {
    box-sizing: border-box;
}

</style>
