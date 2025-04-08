<template>
  <div class="product-container">
    <div class="product-grid">
      <div
        v-for="(product, index) in products"
        :key="index"
        class="product-item"
        :class="{ 'center-last': isOdd && index === products.length - 1 }"
      >
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
  computed: {
    isOdd() {
      return this.products.length % 2 !== 0;
    },
  },
};
</script>

<style scoped>
.product-container {
  width: 100%;
  padding: 1rem;
  background-color: transparent;
}

.product-grid {
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  gap: 1rem;
}

/* 2 colonnes dès 640px */
@media (min-width: 640px) {
  .product-grid {
    grid-template-columns: repeat(2, 1fr);
  }

  /* Centrer le dernier produit si impair */
  .center-last {
    grid-column: 1 / -1;
    place-self: center;
    max-width: 50%;
  }
}

/* 3 colonnes dès 1024px */
@media (min-width: 1024px) {
  .product-grid {
    grid-template-columns: repeat(3, 1fr);
  }

  /* On enlève le centrage car 3 items ne posent pas de problème */
  .center-last {
    grid-column: auto;
    place-self: auto;
    max-width: 100%;
  }
}

.product-item {
  background: white;
  border: 2px solid #6BD425;
  border-radius: 12px;
  padding: 1rem;
  text-align: center;
  transition: transform 0.2s ease;
}

.product-item:hover {
  transform: translateY(-4px);
}

.product-image {
  width: 100%;
  height: 150px;
  object-fit: cover;
  border-radius: 8px;
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
</style>
