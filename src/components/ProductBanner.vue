<template>
  <div class="product-container">
    <div class="product-grid">
      <div v-for="(product, index) in products" :key="index" class="product-item">
        <img :src="product.image" :alt="product.title" class="product-image" />
        <h3 class="product-title">{{ product.title }}</h3>
        <p class="product-description">{{ product.description }}</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    products: {
      type: Array,
      required: true,
    },
  },
};
</script>

<style scoped>
.product-container {
  width: 100%;
  padding: 1rem;
  background-color: orange;
}

.product-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
  gap: 1rem;
}

.product-item {
  background: white;
  border-radius: 8px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  padding: 1rem;
  text-align: center;
}

.product-image {
  width: 100%;
  height: 150px;
  object-fit: cover;
  border-radius: 6px;
}

.product-title {
  font-size: 1rem;
  font-weight: bold;
  margin-top: 0.5rem;
}

.product-description {
  font-size: 0.875rem;
  color: #4b5563;
}

@media (min-width: 640px) {
  .product-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (min-width: 1024px) {
  .product-grid {
    grid-template-columns: repeat(5, 1fr);
  }
}
</style>
