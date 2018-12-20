<template>
  <div id="app">
      <router-view></router-view>
  </div>
</template>

<script>
import home from "./components/pages/home/home"
import types from './components/pages/types/types'
export default {
  name: 'App',
  components:{
    home,types
  }
}
</script>

<style>
#app {
  
}
</style>
