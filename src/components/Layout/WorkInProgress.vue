<template>
  <div class="page-wrapper">
    <NavBar />

    <main class="work-section">
      <div class="content-center">
        <h1>Page en cours de développement</h1>
        <img src="/assets/workinprogress.svg" alt="SVG Image" class="svg-image">
        <router-link to="/" class="home-link">Retour à l’accueil</router-link>
      </div>
    </main>

    <Footer />
  </div>
</template>

<script setup>
import NavBar from '@/components/NavBar.vue';
import Footer from '@/components/Footer.vue';
</script>

<style scoped>
.page-wrapper {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}

.work-section {
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 80px 40px;
  text-align: center;
}

.content-center {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.svg-image {
  width: 500px;
  height: auto;
  margin-bottom: 30px;
}

.home-link {
  text-decoration: none;
  background-color: #FB8B24;
  color: #fff;
  padding: 10px 20px;
  border-radius: 20px;
  font-weight: 600;
  transition: background-color 0.3s ease;
  display: inline-block;
}

.home-link:hover {
  background-color: #FB8B24;
}

@media (max-width: 1023px) and (min-width: 640px) {
  .svg-image {
      width: 400px;
    }
}

@media (max-width: 639px) {
  .svg-image {
    width: 250px;
  }
}
</style>