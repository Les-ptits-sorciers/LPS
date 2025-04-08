<template>
  <div class="banner-wrapper">
    <div class="banner-container">
      <div
        v-for="(item, index) in banners"
        :key="index"
        class="banner-item"
        :class="{ 'with-border': index !== 0 }"
      >
        <img :src="item.image" :alt="item.title" class="banner-image" />
        <h3 class="banner-title">{{ item.title }}</h3>
        <p class="banner-description">{{ item.description }}</p>
      </div>
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
.banner-wrapper {
  padding: 1rem;
  border: 2px solid #6BD425;
  border-radius: 12px;
  background-color: transparent;
  box-sizing: border-box;
}

.banner-container {
  display: flex;
  flex-wrap: wrap;
}

/* Les items prennent 25% sur desktop, 50% sur tablette, 100% sur mobile */
.banner-item {
  flex: 1 0 25%;
  padding: 1rem;
  text-align: center;
  background: white;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.with-border {
  border-left: 1px solid #e5e7eb;
}

.banner-image {
  width: 100%;
  height: 150px;
  object-fit: cover;
  border-radius: 0;
  border: none;
  margin-bottom: 0.5rem;
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

/* Responsive */
@media (max-width: 1023px) {
  .banner-item {
    flex: 1 0 50%;
  }
}

@media (max-width: 639px) {
  .banner-item {
    flex: 1 0 100%;
    border-left: none !important;
    border-top: 1px solid #e5e7eb;
  }
}
</style>
