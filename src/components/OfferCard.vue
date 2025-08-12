<template>
  <div class="offer-card" :class="{ 
    'front-card': isFrontCard 
  }">
    <div class="offer-header">
      <h3 class="offer-title">{{ offer.title }}</h3>
      <p class="offer-description">{{ offer.description }}</p>
      <div class="offer-price">
        <span class="price-amount">{{ offer.price }}</span>
        <span class="price-period">{{ offer.period }}</span>
      </div>
    </div>
    
    <button class="offer-cta">
      {{ offer.ctaText }}
    </button>
    
    <div class="offer-separator"></div>
    
    <div class="offer-details">
      <p class="offer-subtitle">{{ offer.subtitle }}</p>
      <ul class="offer-features">
        <li v-for="feature in offer.features" :key="feature">{{ feature }}</li>
      </ul>
      <p class="offer-note" v-if="offer.note">{{ offer.note }}</p>
    </div>
  </div>
</template>

<script setup>
defineProps({
  offer: {
    type: Object,
    required: true
  },
  isHighlighted: {
    type: Boolean,
    default: false
  },
  isFrontCard: {
    type: Boolean,
    default: false
  }
})
</script>

<style scoped>
.offer-card {
  background: white;
  border-radius: 20px;
  padding: 25px 40px;
  box-shadow: 0 8px 30px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease;
  position: relative;
  height: 480px;
  width: 450px;
  display: flex;
  flex-direction: column;
  border: 2px solid #FB8B24;
  margin: 20px auto;
  flex-shrink: 0;
  overflow: hidden;
}

.offer-card.front-card {
  border: 4px solid;
  border-image: linear-gradient(90deg, #ED0068 0%, #FF8300 100%) 1;
  box-shadow: 0 20px 50px rgba(237, 0, 104, 0.3);
}

.offer-header {
  text-align: center;
  margin-bottom: 25px;
}

.offer-title {
  font-family: 'Dream Orphans', sans-serif;
  font-size: 22px;
  font-weight: bold;
  color: #FB8B24;
  margin: 0 0 12px 0;
  line-height: 1.2;
}

.offer-description {
  font-family: 'GeosansLight', sans-serif;
  font-size: 14px;
  color: #666;
  margin: 0 0 15px 0;
  line-height: 1.3;
}

.offer-price {
  margin-bottom: 20px;
}

.price-amount {
  font-family: 'Dream Orphans', sans-serif;
  font-size: 32px;
  font-weight: bold;
  color: #333;
}

.price-period {
  font-family: 'GeosansLight', sans-serif;
  font-size: 14px;
  color: #666;
  margin-left: 5px;
}

.offer-cta {
  background: linear-gradient(135deg, #FB8B24, #F7931E);
  color: white;
  border: none;
  border-radius: 25px;
  padding: 12px 25px;
  font-family: 'GeosansLight', sans-serif;
  font-size: 14px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
  margin-bottom: 20px;
  text-transform: uppercase;
  letter-spacing: 0.5px;
}

/* Bouton pour carte au premier plan */
.front-card .offer-cta {
  background: linear-gradient(90deg, #ED0068 0%, #FF8300 100%);
}

.offer-cta:hover {
  transform: translateY(-2px);
  box-shadow: 0 8px 20px rgba(251, 139, 36, 0.3);
}

/* Hover pour carte au premier plan */
.front-card .offer-cta:hover {
  box-shadow: 0 8px 20px rgba(237, 0, 104, 0.3);
}

.offer-separator {
  height: 1px;
  background: linear-gradient(90deg, transparent, #ddd, transparent);
  margin: 15px 0;
}

.offer-details {
  flex-grow: 1;
  text-align: left;
}

.offer-subtitle {
  font-family: 'GeosansLight', sans-serif;
  font-size: 13px;
  color: #333;
  margin: 0 0 12px 0;
  font-weight: 600;
}

.offer-features {
  list-style: none;
  padding: 0;
  margin: 0 0 12px 0;
}

.offer-features li {
  font-family: 'GeosansLight', sans-serif;
  font-size: 13px;
  color: #666;
  margin-bottom: 6px;
  position: relative;
  padding-left: 15px;
}

.offer-features li::before {
  content: '•';
  color: #FB8B24;
  font-weight: bold;
  position: absolute;
  left: 0;
}

.offer-note {
  font-family: 'GeosansLight', sans-serif;
  font-size: 11px;
  color: #999;
  font-style: italic;
  margin: 10px 0 0 0;
  line-height: 1.3;
}

@media (max-width: 768px) {
  .offer-card {
    padding: 20px 35px;
    height: 400px;
    width: 370px;
    margin: 15px auto;
  }
  
  .offer-title {
    font-size: 20px;
  }
  
  .price-amount {
    font-size: 28px;
  }
}

@media (max-width: 480px) {
  .offer-card {
    padding: 15px 25px;
    height: 380px;
    width: 350px;
    margin: 10px auto;
  }
}
</style>
