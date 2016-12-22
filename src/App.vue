<template>
  <div id="app">
    <navigation></navigation>
    <!-- <img src="./assets/logo.png"> -->
    <!-- <h1>{{ msg }}</h1>
    <h2>Essential Links</h2> -->
    <!-- <p>
      <router-link to="/first">Go to second</router-link>
      <router-link to="/second">Go to first</router-link>
    </p> -->
    <!-- 路由出口 -->

    <router-view></router-view>
    <!-- <firstcomponent></firstcomponent> -->
  </div>
</template>

<script>
// import firstcomponent from './component/firstcomponent.vue'
import navigation from './component/navigation.vue'
export default {
  name: 'app',
  data () {
    return {
      msg: 'Welcome'
    }
  },
  components: { navigation }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>
