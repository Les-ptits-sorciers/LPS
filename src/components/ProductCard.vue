<template>
  <div class="card">
    <div class="image-container">
      <img :src="image" :alt="title" class="product-image" />
      <div class="badge">
        <img src="/assets/icone1.png" alt="Icône" class="badge-icon" />
      </div>
    </div>
    <div class="info">
      <div class="header">
        <h2>{{ title }}</h2>
        <span class="price">{{ price }} €</span>
      </div>
      <p class="description">{{ description }}</p>
      <div class="separator"></div>
      <div class="actions">
        <button class="btn-login">
          Order Now 🎂
        </button>
      </div>
    </div>
  </div>
</template>

<script setup>
defineProps({
  image: String,
  title: String,
  description: String,
  price: [String, Number]
})
</script>

<style scoped>
.card {
  width: 100%;
  max-width: 400px;
  flex: 1 1 280px; /* <== important pour flex grow/shrink */
  aspect-ratio: 3 / 4;
  display: flex;
  flex-direction: column;
  border-radius: 18px;
  overflow: hidden;
  box-shadow: 0 4px 12px rgba(0,0,0,0.1);
  background-color: white;
  font-family: 'Arial', sans-serif;
  margin: 10px;
}

.badge {
  position: absolute;
  top: 10px;
  right: 10px;
  width: 34px;
  height: 34px;
  background-color: #FB8B24;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
}

.badge-icon {
  width: 20px;
  height: 20px;
  object-fit: contain;
}


.image-container {
  flex: 2;
  position: relative;
  overflow: hidden;
}

.product-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.info {
  flex: 1;
  background: linear-gradient(#ED0068 0%, #FB8B24 100%);
  color: white;
  padding: 16px;
  border-bottom-left-radius: 18px;
  border-bottom-right-radius: 18px;
  display: flex;
  flex-direction: column;
}

.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.header h2 {
  font-size: 25px;
  font-family: 'Dream Orphans', sans-serif;
  margin: 0;
}

.price {
  font-size: 25px;
}

.description {
  font-size: 16px;
  margin-top: 8px;
  line-height: 1.4;
}

.actions {
  display: flex;
  justify-content: center;
  font-family: 'GeosansLight', sans-serif;
}

.separator {
  margin-top: auto;
  margin-bottom: 12px;
  height: 1px;
  background-color: #FDCDB4;
  border-radius: 1px;
}

.btn-login {
  width: 100%;
  padding: 8px 16px;
  border-radius: 9999px;
  text-decoration: none;
  font-size: 18px;
  background-color: #FDCDB4;
  color: white;
  border: none;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

.btn-login:hover {
  background-color: #f59e0b;
}

@media (max-width: 768px) {
  .card {
    max-width: 85vw;
  }

  .header h2,
  .price {
    font-size: 20px;
  }

  .description {
    font-size: 14px;
  }

  .btn-login {
    font-size: 16px;
    padding: 10px;
  }
}

</style>
