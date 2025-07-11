<script setup>



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
];
</script>

<template>

  <div class="product-list">
    <router-link
        v-for="(product, index) in products"
        :key="index"
        :to="`/product/${index}`"
        class="product-card"
    >
      <img :src="product.image" alt="" class="product-image" />
      <h3>{{ product.title }}</h3>
      <p>{{ product.description }}</p>
    </router-link>
  </div>
</template>


<style scoped>
.product-list {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 2rem;
  padding: 1rem;
}

.product-card {
  border: 1px solid #8BC34A;
  padding: 1rem;
  border-radius: 5px;
  text-decoration: none;
  color: inherit;
}

.product-image {
  width: 100%;
  height: 200px;
  object-fit: cover;
  border: 1px solid #8BC34A;
  border-radius: 4px;
  margin-bottom: 0.5rem;
}
</style>