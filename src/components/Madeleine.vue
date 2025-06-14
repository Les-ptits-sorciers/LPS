<template>
  <div class="card">
    <div class="image-container">
      <img :src="image" :alt="title" class="product-image" />
      <div class="badge">
        <img src="../../public/assets/icone1.png" alt="Icône" class="badge-icon" />
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
  width: 300px;
  border-radius: 18px;
  overflow: hidden;
  box-shadow: 0 4px 12px rgba(0,0,0,0.1);
  background-color: white;
  font-family: 'Arial', sans-serif;
}

.image-container {
  position: relative;
}

.product-image {
  width: 100%;
  display: block;
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



.info {
  background-color: #FB8B24;
  color: white;
  padding: 16px;
  border-bottom-left-radius: 18px;
  border-bottom-right-radius: 18px;
}

.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.header h2 {
  font-size: 18px;
  margin: 0;
}

.price {
  font-size: 18px;
}

.description {
  font-size: 14px;
  margin-top: 8px;
  line-height: 1.4;
}

.actions {
  display: flex;
  justify-content: center;
  margin-top: 16px;
  font-family: 'GeosansLight', sans-serif;
}

.separator {
  height: 1px;
  background-color: #f5c77b;
  margin: 16px 0;
  border-radius: 1px;
}

.btn-login {
  width: 100%;
  padding: 8px 16px;
  border-radius: 9999px;
  text-decoration: none;
  font-size: 18px;
  background-color: #D90368;
  color: white;
  border: none;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

.btn-login:hover {
  background-color: #f59e0b;
}
</style>
