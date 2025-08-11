<script setup>

</script>

<template>
  <header class="header">
    <div class="header-content">
      <div class="text-section">
        <h1 class="gradient-title">Les P'tits Sorciers</h1>
        <h2 class="subtitle">Réenchantez le goûter !</h2>
        <p class="description">
          Offrez à vos enfants le plaisir de goûters sains, pour des moments de partage et de joie en toute simplicité.
        </p>
        <button class="cta-button">Découvrir les produits</button>
      </div>
      <div class="image-section">
        <img src="https://cdn.pixabay.com/photo/2015/05/25/14/27/garden-783344_1280.jpg" alt="Illustration magique" />
      </div>
    </div>
  </header>
</template>

<style scoped>
.header {
  padding: 2rem;
  background: linear-gradient(90deg, #D90368 0%, #FB8B24 100%);
  color: white;
  border-radius: 5px;
}

.header-content {
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  gap: 2rem;
  flex-wrap: wrap;
}

.text-section {
  flex: 1;
  min-width: 300px;
}

.gradient-title {
  font-family: 'Dream Orphans', sans-serif;
  font-weight: 700;
  font-size: 54px;
  line-height: 100%;
  letter-spacing: 0.04em;
  background: linear-gradient(90deg, #FFFFFF 0%, #A7E400 40%, #6BD425 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}

.subtitle {
  font-family: 'GeosansLight', sans-serif;
  font-size: 40px;
  font-weight: bold;
  color: white;
  margin-top: 1rem;
  letter-spacing: 0.04em;
}

.description {
  font-family: 'GeosansLight', sans-serif;
  color: white;
  margin-top: 0.5rem;
  font-size: 26px;
  max-width: 500px;
}

.cta-button {
  margin-top: 1.5rem;
  padding: 0.75rem 1.5rem;
  background-color: #FB8B24;
  color: white;
  border: none;
  border-radius: 999px;
  font-weight: bold;
  font-size: 16px;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

.cta-button:hover {
  background-color: #e2791f;
}

.image-section {
  flex: 1;
  min-width: 300px;
  text-align: center;
}

.image-section img {
  max-width: 100%;
  height: auto;
  border-radius: 5px;
}
</style>
