<template>
  <div class="page-wrapper">

    <main class="not-found">
      <h1 class="title">404&nbsp;- Page introuvable</h1>
      <p class="message">Oups ! La page que vous cherchez n'existe pas.</p>
      <router-link to="/" class="home-link">Retour à l’accueil</router-link>
    </main>

  </div>
</template>

<script setup>

</script>

<style scoped>
.page-wrapper {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}

.not-found {
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  padding: 200px 40px;
}

.title {
  font-size: 32px;
  font-weight: bold;
  color: #333;
  margin-bottom: 16px;
}

.message {
  font-size: 18px;
  color: #666;
  margin-bottom: 24px;
}

.home-link {
  text-decoration: none;
  background-color: #FB8B24;
  color: #fff;
  padding: 10px 20px;
  border-radius: 20px;
  font-weight: 600;
  transition: background-color 0.3s ease;
}

.home-link:hover {
  background-color: #FB8B24;
}
</style>
