<template>
  <PomoTimer />
  <PomoPazzle />
</template>

<script>
import PomoPazzle from './components/PomoPazzle.vue';
import PomoTimer from './components/PomoTimer.vue';

export default {
  name: 'App',
  components: {
    PomoTimer,
    PomoPazzle
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
