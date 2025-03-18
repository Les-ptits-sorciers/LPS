<template>
  <div class="banner-container">
    <div v-for="(item, index) in banners" :key="index" class="banner-item">
      <img :src="item.image" :alt="item.title" class="banner-image" />
      <h3 class="banner-title">{{ item.title }}</h3>
      <p class="banner-description">{{ item.description }}</p>
    </div>
  </div>
</template>

<script setup>

const props = defineProps({
  banners: {
    type: Array,
    required: true,
  },
});
</script>

<style scoped>
.banner-container {
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  gap: 1rem;
  text-align: center;
  padding: 1rem;
}

.banner-item {
  background: white;
  border-radius: 8px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  padding: 1rem;
}

.banner-image {
  width: 100%;
  height: 150px;
  object-fit: cover;
  border-radius: 6px;
  border: 2px solid #6BD425;
}

.banner-title {
  font-size: 1rem;
  font-weight: bold;
  margin-top: 0.5rem;
}

.banner-description {
  font-size: 0.875rem;
  color: #4b5563;
}

@media (min-width: 640px) {
  .banner-container {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (min-width: 1024px) {
  .banner-container {
    grid-template-columns: repeat(4, 1fr);
  }
}
</style>
