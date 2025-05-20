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
        <div class="image-overlay"></div>
        <div class="banner-overlay">
          <h3 class="banner-title">{{ item.title }}</h3>
          <p class="banner-description">{{ item.description }}</p>
        </div>
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

  border: 2px solid #6BD425;
  border-radius: 12px;
  background-color: transparent;
  box-sizing: border-box;
}

.banner-container {
  display: flex;
  flex-wrap: wrap;
}

.banner-item {
  flex: 1 0 25%;
  position: relative;
  overflow: hidden;
  height: 200px;
  margin: 0;
}

.with-border {
  border-left: 1px solid #e5e7eb;
}

.banner-image {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  filter: brightness(0.9); /* assombrit toute l’image */
  z-index: 0;
}

.image-overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0,0,0,0.3); /* optionnel : renforce la lisibilité */
  z-index: 1;
}

.banner-overlay {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  color: white;
  text-align: center;
  z-index: 2;
}

.banner-title {
  font-size: 1rem;
  font-weight: bold;
  margin: 0;
}

.banner-description {
  font-size: 0.875rem;
  margin: 0.25rem 0 0;
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
