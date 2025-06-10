<template>
  <div class="page-wrapper">
    <Header />

    <main class="work-section">
      <div class="content">
        <h1 class="title">🚧 Page en cours de construction</h1>
        <p class="subtitle">Cette fonctionnalité sera bientôt disponible.</p>
        <router-link to="/" class="return-button">Retour à l’accueil</router-link>
      </div>
    </main>

    <Footer />
  </div>
</template>

<script setup>
import Header from '@/components/NavBar.vue'
import Footer from '@/components/Footer.vue'
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
  justify-content: center;
  align-items: center;
  text-align: center;
  padding: 200px 20px;
}

.content {
  max-width: 600px;
  width: 100%;
}

.title {
  font-size: 28px;
  font-weight: bold;
  margin-bottom: 20px;
  color: #333;
}

.subtitle {
  font-size: 18px;
  color: #666;
  margin-bottom: 30px;
}

.return-button {
  display: inline-block;
  background-color: #FB8B24;
  color: white;
  padding: 12px 24px;
  border-radius: 25px;
  text-decoration: none;
  font-weight: 600;
  transition: background-color 0.3s ease;
}

.return-button:hover {
  background-color: #FB8B24;
}
</style>
