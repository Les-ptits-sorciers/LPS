<script setup>
import { useRoute } from 'vue-router'

const route = useRoute()
const productId = parseInt(route.params.id)

const products = [
  {
    image: 'https://cdn.pixabay.com/photo/2024/08/11/18/15/leaves-8962041_1280.jpg',
    title: 'Produit 1',
    description: 'Description 1',
  },
  {
    image: 'https://images.unsplash.com/photo-1705750405375-ddf79008ef67?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    title: 'Produit 2 ',
    description: 'Description 2',
  },
  {
    image: 'https://images.unsplash.com/photo-1598799170815-933217492614?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    title: 'Produit 3',
    description: 'Description 3',
  },
  {
    image: 'https://plus.unsplash.com/premium_photo-1663924865153-4eec89bd5980?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    title: 'Produit 4',
    description: 'Description 4',
  }
]

const product = products[productId]
</script>

<template>
  <div v-if="product" class="product-detail">
    <img :src="product.image" class="detail-image" alt="" />
    <div>
      <h1>{{ product.title }}</h1>
      <p>{{ product.description }}</p>
    </div>
  </div>
  <div v-else>
    <p>Produit non trouvé.</p>
  </div>
</template>

<style scoped>
.product-detail {
  display: flex;
  gap: 2rem;
  padding: 2rem;
}

.detail-image {
  width: 400px;
  height: auto;
  object-fit: cover;
  border: 1px solid #ccc;
  border-radius: 10px;
}
</style>
