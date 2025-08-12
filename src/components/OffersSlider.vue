<template>
  <div class="offers-slider">
    <div class="slider-container">
      <!-- Navigation dots -->
      <div class="slider-dots">
        <button 
          v-for="(offer, index) in offers" 
          :key="index"
          class="dot" 
          :class="{ 'active': currentIndex === index }"
          @click="goToSlide(index)"
          :aria-label="`Aller à l'offre ${index + 1}`"
        ></button>
      </div>
      
      <!-- Slider wrapper -->
      <div class="slider-wrapper" ref="sliderWrapper">
        <div class="slider-track">
          <div 
            v-for="(offer, index) in offers" 
            :key="index"
            class="slide"
            :class="{ 
              'active': currentIndex === index,
              'prev': index === currentIndex - 1 || (currentIndex === 0 && index === offers.length - 1),
              'next': index === currentIndex + 1 || (currentIndex === offers.length - 1 && index === 0)
            }"
            :style="getSlideStyle(index)"
            @click="goToSlide(index)"
            @mouseenter="stopAutoPlay"
            @mouseleave="startAutoPlay"
          >
            <OfferCard 
              :offer="offer" 
              :isFrontCard="currentIndex === index"
            />
          </div>
        </div>
      </div>
      
      <!-- Navigation arrows -->
      <button 
        class="slider-arrow slider-arrow-left" 
        @click="previousSlide"
        aria-label="Offre précédente"
      >
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
          <path d="M15 18L9 12L15 6" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
      </button>
      
      <button 
        class="slider-arrow slider-arrow-right" 
        @click="nextSlide"
        aria-label="Offre suivante"
      >
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
          <path d="M9 18L15 12L9 6" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
      </button>
    </div>
  </div>
</template>

<script setup>
import { ref, computed, onMounted, onUnmounted } from 'vue'
import OfferCard from './OfferCard.vue'

const props = defineProps({
  offers: {
    type: Array,
    required: true
  },
  autoPlay: {
    type: Boolean,
    default: false
  },
  autoPlayDelay: {
    type: Number,
    default: 5000
  }
})

const currentIndex = ref(0)
const sliderWrapper = ref(null)
const autoPlayInterval = ref(null)

const slideWidth = computed(() => {
  if (window.innerWidth >= 1024) return 33.333 // 3 slides visible
  if (window.innerWidth >= 768) return 50 // 2 slides visible
  return 100 // 1 slide visible
})

// Fonction pour calculer le style de chaque slide avec effet circulaire
const getSlideStyle = (index) => {
  const totalSlides = props.offers.length
  const angleStep = 360 / totalSlides
  const currentAngle = -(currentIndex.value * angleStep)
  const slideAngle = (index * angleStep) + currentAngle
  
  // Convertir l'angle en radians pour les calculs
  const radians = (slideAngle * Math.PI) / 180
  
  // Position circulaire avec plus d'espacement horizontal
  const radiusX = 380 // Rayon horizontal plus large pour accommoder les cartes plus larges
  const radiusZ = 200 // Rayon de profondeur moins important
  const x = Math.sin(radians) * radiusX
  const z = Math.cos(radians) * radiusZ
  
  // Calculer la profondeur et l'échelle
  const normalizedZ = (z + radiusZ) / (radiusZ * 2) // Normaliser entre 0 et 1
  const scale = 0.5 + (normalizedZ * 0.5) // Échelle entre 0.5 et 1 (plus de différence)
  const opacity = 0.2 + (normalizedZ * 0.8) // Opacité entre 0.2 et 1
  
  // Z-index basé sur la profondeur
  const zIndex = Math.round(normalizedZ * 100)
  
  return {
    transform: `translateX(${x}px) translateZ(${z}px) scale(${scale})`,
    opacity: opacity,
    zIndex: zIndex,
    transition: 'all 0.8s cubic-bezier(0.25, 0.8, 0.25, 1)'
  }
}

const goToSlide = (index) => {
  currentIndex.value = index
  resetAutoPlay()
}

const nextSlide = () => {
  currentIndex.value = (currentIndex.value + 1) % props.offers.length
  resetAutoPlay()
}

const previousSlide = () => {
  currentIndex.value = currentIndex.value === 0 ? props.offers.length - 1 : currentIndex.value - 1
  resetAutoPlay()
}

const startAutoPlay = () => {
  if (props.autoPlay) {
    autoPlayInterval.value = setInterval(() => {
      nextSlide()
    }, props.autoPlayDelay)
  }
}

const stopAutoPlay = () => {
  if (autoPlayInterval.value) {
    clearInterval(autoPlayInterval.value)
    autoPlayInterval.value = null
  }
}

const resetAutoPlay = () => {
  stopAutoPlay()
  startAutoPlay()
}

// Touch/swipe functionality
let startX = 0
let currentX = 0
let isDragging = false

const handleTouchStart = (e) => {
  startX = e.touches[0].clientX
  isDragging = true
  stopAutoPlay()
}

const handleTouchMove = (e) => {
  if (!isDragging) return
  currentX = e.touches[0].clientX
}

const handleTouchEnd = () => {
  if (!isDragging) return
  isDragging = false
  
  const deltaX = startX - currentX
  const threshold = 50
  
  if (deltaX > threshold) {
    nextSlide()
  } else if (deltaX < -threshold) {
    previousSlide()
  }
  
  startAutoPlay()
}

// Keyboard navigation
const handleKeyDown = (e) => {
  if (e.key === 'ArrowLeft') {
    previousSlide()
  } else if (e.key === 'ArrowRight') {
    nextSlide()
  }
}

onMounted(() => {
  startAutoPlay()
  document.addEventListener('keydown', handleKeyDown)
  
  // Add touch events
  if (sliderWrapper.value) {
    sliderWrapper.value.addEventListener('touchstart', handleTouchStart, { passive: true })
    sliderWrapper.value.addEventListener('touchmove', handleTouchMove, { passive: true })
    sliderWrapper.value.addEventListener('touchend', handleTouchEnd, { passive: true })
  }
})

onUnmounted(() => {
  stopAutoPlay()
  document.removeEventListener('keydown', handleKeyDown)
  
  if (sliderWrapper.value) {
    sliderWrapper.value.removeEventListener('touchstart', handleTouchStart)
    sliderWrapper.value.removeEventListener('touchmove', handleTouchMove)
    sliderWrapper.value.removeEventListener('touchend', handleTouchEnd)
  }
})
</script>

<style scoped>
.offers-slider {
  padding: 60px 20px;
  position: relative;
  overflow: hidden;
}

.slider-container {
  max-width: 1200px;
  margin: 0 auto;
  position: relative;
}

.slider-dots {
  display: flex;
  justify-content: center;
  gap: 12px;
  margin-bottom: 40px;
}

.dot {
  width: 12px;
  height: 12px;
  border-radius: 50%;
  border: none;
  background: #ddd;
  cursor: pointer;
  transition: all 0.3s ease;
}

.dot.active {
  background: linear-gradient(135deg, #FB8B24, #D90368);
  transform: scale(1.2);
}

.dot:hover {
  background: #FB8B24;
  transform: scale(1.1);
}

.slider-wrapper {
  position: relative;
  height: 520px;
  display: flex;
  align-items: center;
  justify-content: center;
  perspective: 1600px;
  margin-bottom: 40px;
  overflow: visible;
}

.slider-track {
  position: relative;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  transform-style: preserve-3d;
}

.slide {
  position: absolute;
  width: 450px;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  transform-style: preserve-3d;
  cursor: pointer;
}

.slide:hover {
  transform-style: preserve-3d;
}

.slider-arrow {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  background: white;
  border: none;
  border-radius: 50%;
  width: 50px;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease;
  z-index: 10;
  color: #666;
}

.slider-arrow:hover:not(:disabled) {
  background: #FB8B24;
  color: white;
  transform: translateY(-50%) scale(1.1);
  box-shadow: 0 6px 20px rgba(251, 139, 36, 0.3);
}

.slider-arrow-left {
  left: -25px;
}

.slider-arrow-right {
  right: -25px;
}

/* Responsive design */
@media (max-width: 768px) {
  .offers-slider {
    padding: 40px 10px;
  }
  
  .slider-wrapper {
    height: 430px;
    perspective: 1200px;
  }
  
  .slide {
    width: 370px;
  }
  
  .slider-arrow {
    display: none; /* Hide arrows on mobile, use touch gestures */
  }
}

@media (max-width: 480px) {
  .slider-wrapper {
    height: 410px;
    perspective: 1000px;
  }
  
  .slide {
    width: 350px;
  }
}

/* Animation pour un effet plus fluide */
.slider-track {
  animation: none;
}

/* Effet de hover sur les cartes non-actives */
.slide:not(.active):hover {
  cursor: pointer;
}

.slide:not(.active):hover :deep(.offer-card) {
  transform: scale(1.02);
  box-shadow: 0 12px 35px rgba(0, 0, 0, 0.15);
}
</style>
