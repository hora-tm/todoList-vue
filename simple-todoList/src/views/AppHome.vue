<template>
  <div class="home">
    <home-message msg="Welcome to simple Vue App"/>
  </div>
</template>

<script>
// @ is an alias to /src
import HomeMessage from '../components/HomeMessage.vue'

export default {
  name: 'Home',
  components: {
    HomeMessage
  }
}
</script>
