<script setup>
import ColoredCircle from './components/ColoredCircle.vue';
import Header from './components/Header.vue';
import NavBar from './components/NavBar.vue';
import ProductBanner from './components/ProductBanner.vue';

import { ref } from "vue";

const products = ref([
  { image: "https://via.placeholder.com/150", title: "Produit 1", description: "Description du produit 1" },
  { image: "https://via.placeholder.com/150", title: "Produit 2", description: "Description du produit 2" },
  { image: "https://via.placeholder.com/150", title: "Produit 3", description: "Description du produit 3" },
  { image: "https://via.placeholder.com/150", title: "Produit 4", description: "Description du produit 4" },
  { image: "https://via.placeholder.com/150", title: "Produit 5", description: "Description du produit 5" },
]);
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

      <ProductBanner :products="products" />
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
