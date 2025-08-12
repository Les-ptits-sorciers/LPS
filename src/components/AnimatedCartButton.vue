<template>
  <button 
    class="animated-cart-btn" 
    :class="{ active: isActive }"
    @click="handleClick"
    :disabled="isActive"
  >
    <font-awesome-icon icon="cart-shopping" class="btn__icon btn__icon--cart" />
    <font-awesome-icon icon="parachute-box" class="btn__icon btn__icon--box" />
    <span class="btn__text btn__text--first">{{ firstText }}</span>
    <span class="btn__text btn__text--second">{{ secondText }}</span>
  </button>
</template>

<script setup>
import { ref } from 'vue'

const props = defineProps({
  firstText: {
    type: String,
    default: 'Ajouter au panier'
  },
  secondText: {
    type: String,
    default: 'Ajouté'
  },
  resetDelay: {
    type: Number,
    default: 4000
  }
})

const emit = defineEmits(['add-to-cart'])

const isActive = ref(false)

const handleClick = () => {
  if (isActive.value) return
  
  isActive.value = true
  emit('add-to-cart')
  
  // Reset the animation after the specified delay
  setTimeout(() => {
    isActive.value = false
  }, props.resetDelay)
}
</script>

<style scoped>
.animated-cart-btn {
  width: 15em;
  height: 3.5em;
  background-color: #FB8B24;
  border: none;
  border-radius: 3em;
  box-shadow: 0 0 1em rgba(0, 0, 0, 0.2);
  outline: none;
  cursor: pointer;
  transition: transform 0.3s ease, background-color 0.3s ease;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  font-family: inherit;
}

.animated-cart-btn:hover {
  background-color: #e07a1f;
  transform: translateY(-2px);
  box-shadow: 0 4px 1.5em rgba(0, 0, 0, 0.25);
}

.animated-cart-btn:active {
  transform: scale(0.9);
}

.animated-cart-btn:disabled {
  cursor: not-allowed;
}

.btn__text {
  font-size: 1.2rem;
  font-weight: 600;
  color: white;
  position: absolute;
  user-select: none;
}

.btn__text--second {
  opacity: 0;
}

.btn__icon {
  font-size: 1.3rem;
  color: white;
  position: absolute;
}

.btn__icon--cart {
  left: -20%;
}

.btn__icon--box {
  top: -50%;
}

/* Animations */
.animated-cart-btn.active .btn__text--first {
  animation: text1 0.3s forwards;
}

.animated-cart-btn.active .btn__text--second {
  animation: text2 4s forwards;
}

.animated-cart-btn.active .btn__icon--cart {
  animation: cart 2.5s forwards;
}

.animated-cart-btn.active .btn__icon--box {
  animation: box 1.5s forwards;
}

@keyframes text1 {
  100% {
    opacity: 0;
  }
}

@keyframes text2 {
  70% {
    opacity: 0;
  }
  75%, 100% {
    opacity: 1;
  }
}

@keyframes cart {
  30%, 60% {
    left: 42%;
  }
  100% {
    left: 110%;
  }
}

@keyframes box {
  80% {
    color: white;
  }
  90%, 100% {
    top: 10%;
    color: transparent;
  }
}

/* Responsive */
@media (max-width: 640px) {
  .animated-cart-btn {
    width: 12em;
    height: 3em;
  }
  
  .btn__text {
    font-size: 1rem;
  }
  
  .btn__icon {
    font-size: 1.1rem;
  }
}
</style>
