<script setup>
defineProps({
  title: {
    type: String,
    required: true
  },
  category: {
    type: String,
    required: true
  },
  price: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  image: {
    type: String,
    required: true
  },
  buttonText: {
    type: String,
    default: 'Ajouter à mon panier'
  }
})

const emit = defineEmits(['add-to-cart'])

const handleAddToCart = () => {
  emit('add-to-cart')
}
</script>

<template>
  <div class="box-card">
    <h2 class="box-title">{{ title }}</h2>
    
    <div class="product-image">
      <img :src="image" :alt="title" />
    </div>
    
    <div class="box-info">
      <div class="category-price">
        <span class="category">{{ category }}</span>
        <span class="price">{{ price }}</span>
      </div>
      
      <p class="description">{{ description }}</p>
      
      <button class="add-to-cart-btn" @click="handleAddToCart">
        <span>{{ buttonText }}</span>
      </button>
    </div>
  </div>
</template>

<style scoped>
.box-card {
  background: linear-gradient(to top, #ED0068 0%, #F4D4E2 50%, #FFF8FB 100%);
  border-radius: 20px;
  padding: 30px;
  max-width: 350px;
  width: 100%;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08), 0 2px 8px rgba(237, 0, 104, 0.1);
  text-align: center;
  font-family: 'DreamOrphans', Arial, sans-serif;
}

.box-title {
  color: #ED0068;
  font-size: 1.8rem;
  font-weight: bold;
  margin: 0 0 30px 0;
  font-family: 'DreamOrphans', Arial, sans-serif;
}

.product-image {
  background: #FFFFFF;
  border-radius: 15px;
  padding: 20px;
  margin-bottom: 30px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
}

.product-image img {
  width: 100%;
  max-width: 250px;
  height: auto;
  object-fit: contain;
}

.box-info {
  color: white;
}

.category-price {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 15px;
}

.category {
  font-size: 1.1rem;
  font-weight: normal;
}

.price {
  font-size: 1.1rem;
  font-weight: bold;
}

.description {
  font-size: 1rem;
  line-height: 1.4;
  margin-bottom: 25px;
  font-weight: normal;
}

.add-to-cart-btn {
  background: white !important;
  border: 2px solid #ED0068;
  border-radius: 25px;
  padding: 12px 30px;
  font-size: 1rem;
  font-weight: bold;
  cursor: pointer;
  transition: transform 0.2s, box-shadow 0.2s;
  font-family: 'DreamOrphans', Arial, sans-serif;
  position: relative;
}

.add-to-cart-btn span {
  background: linear-gradient(to right, #ED0068 0%, #FF8300 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  display: inline-block;
}

.add-to-cart-btn:hover {
  transform: translateY(-2px);
  box-shadow: 0 6px 16px rgba(237, 0, 104, 0.3);
}

.add-to-cart-btn:active {
  transform: translateY(0);
}

@media (max-width: 768px) {
  .box-card {
    max-width: 100%;
    padding: 20px;
  }
  
  .box-title {
    font-size: 1.5rem;
    margin-bottom: 20px;
  }
  
  .product-image {
    padding: 15px;
    margin-bottom: 20px;
  }
  
  .category-price {
    flex-direction: column;
    gap: 5px;
    text-align: center;
  }
}
</style>
