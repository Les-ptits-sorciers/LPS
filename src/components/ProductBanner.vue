<template>
  <div class="w-full py-4">
    <div class="flex overflow-x-auto md:grid md:grid-cols-5 gap-4 px-4">
      <div
        v-for="(product, index) in products"
        :key="index"
        class="flex-shrink-0 md:flex-shrink md:w-auto w-64 bg-white shadow-lg rounded-lg p-2 text-center"
      >
        <img
          :src="product.image"
          :alt="product.title"
          class="w-full h-40 object-cover rounded-md"
        />
        <h3 class="text-lg font-semibold mt-2">{{ product.title }}</h3>
        <p class="text-sm text-gray-600">{{ product.description }}</p>
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
/* Conteneur principal */
.w-full {
  width: 100%;
}

.py-4 {
  padding-top: 1rem;
  padding-bottom: 1rem;
}

/* Liste des produits */
.flex {
  display: flex;
}

.overflow-x-auto {
  overflow-x: auto;
  white-space: nowrap;
}

.md\\:grid {
  display: grid;
}

.md\\:grid-cols-5 {
  grid-template-columns: repeat(5, 1fr);
}

/* Espacement */
.gap-4 {
  gap: 1rem;
}

.px-4 {
  padding-left: 1rem;
  padding-right: 1rem;
}

/* Produit individuel */
.flex-shrink-0 {
  flex-shrink: 0;
}

.md\\:flex-shrink {
  flex-shrink: 1;
}

.md\\:w-auto {
  width: auto;
}

.w-64 {
  width: 16rem;
}

.bg-white {
  background-color: white;
}

.shadow-lg {
  box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05);
}

.rounded-lg {
  border-radius: 0.5rem;
}

.p-2 {
  padding: 0.5rem;
}

.text-center {
  text-align: center;
}

/* Image */
.w-full {
  width: 100%;
}

.h-40 {
  height: 10rem;
}

.object-cover {
  object-fit: cover;
}

.rounded-md {
  border-radius: 0.375rem;
}

/* Titre */
.text-lg {
  font-size: 1.125rem;
}

.font-semibold {
  font-weight: 600;
}

.mt-2 {
  margin-top: 0.5rem;
}

/* Description */
.text-sm {
  font-size: 0.875rem;
}

.text-gray-600 {
  color: #4b5563;
}

/* Cacher la scrollbar sur mobile */
::-webkit-scrollbar {
  display: none;
}
</style>

