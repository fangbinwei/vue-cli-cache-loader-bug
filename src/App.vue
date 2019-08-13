<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <fake></fake>
    <HelloWorld :msg="test"/>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
import {test} from 'sleepwalker-fakezz'

export default {
  name: 'app',
  components: {
    HelloWorld
  },
  data () {
    return {
      test: ''
    }
  },
  mounted () {
    this.test = test()
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
