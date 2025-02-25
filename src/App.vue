<script setup>
import ColoredCircle from './components/ColoredCircle.vue';
import Header from './components/Header.vue';
import NavBar from './components/NavBar.vue';
</script>

<template>
  <Header />
  <div id="app">
    <NavBar />
    <router-view />
    <div class="circle">
      <ColoredCircle text="Partage" color="#FB8B24A6" :size="125" />
      <ColoredCircle text="Plaisir" color="#FB8B24A6" :size="125" />
      <ColoredCircle text="Santé" color="#FB8B24A6" :size="125" />
      <ColoredCircle text="Simplicité" color="#FB8B24A6" :size="125" />
    </div>
  </div>
</template>

<style scoped>
.circle {
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  flex-wrap: wrap;
  width: 100%;
  padding: 20px;
}

@media (max-width: 768px) {
  .circle {
    flex-direction: column;
    gap: 20px;
  }
}

</style>
