<template>
  <div class="product-container">
    <div class="product-grid">
      <div
          v-for="(product, index) in products"
          :key="index"
          :class="{
          'product-item': true,
          'center-last': isOdd && index === products.length - 1
        }"
          @click="openModal(product)"
      >
        <img :src="product.image" :alt="product.title" class="product-image" />
        <h3 class="product-title">{{ product.title }}</h3>
        <p class="product-description">{{ product.description }}</p>
      </div>
    </div>
  </div>

  <ModalProduct
      v-if="isModalOpen"
      :product="selectedProduct"
      :isOpen="isModalOpen"
      @close="closeModal"
  />
</template>

<script setup>
import { ref, computed } from 'vue'; // Ajout de computed ici
import ModalProduct from './ModalProduct.vue';

const props = defineProps({
  products: {
    type: Array,
    required: true,
  },
});

const selectedProduct = ref(null);
const isModalOpen = ref(false);

const openModal = (product) => {
  selectedProduct.value = product;
  isModalOpen.value = true;
};

const closeModal = () => {
  isModalOpen.value = false;
  selectedProduct.value = null;
};

const isOdd = computed(() => props.products.length % 2 !== 0);
</script>


<style scoped>
.product-container {
  width: 100%;
  padding: 1rem;
  background-color: transparent;
}

.product-grid {
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  justify-content: center;
}

@media (min-width: 640px) {
  .product-grid {
    grid-template-columns: repeat(2, 1fr);
  }

  .center-last {
    grid-column: 1 / -1;
    place-self: center;
    max-width: 50%;
  }
}

@media (min-width: 1024px) {
  .product-grid {
    grid-template-columns: repeat(3, 1fr);
  }

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
