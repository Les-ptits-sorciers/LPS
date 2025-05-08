<template>
  <div
    class="circle"
    :style="{
      backgroundColor: color, 
      width: size + 'px', 
      height: size + 'px', 
      fontSize: fontSize + 'px',
      padding: padding + 'px'
    }"
  >
    {{ text }}
  </div>
</template>

<script setup>
const props = defineProps({
  text: {
    type: String,
    required: true
  },
  color: {
    type: String,
    default: '#FB8B24'
  },
  size: {
    type: Number,
    default: 100
  },
  fontSize: {
    type: Number,
    default: 16
  },
  padding: {
    type: Number,
    default: 25
  }
});
</script>

<style scoped>
.circle {
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  color: white;
  font-weight: bold;
  text-align: center;
  white-space: nowrap;
  overflow: hidden;
  box-sizing: border-box;
  transition: transform 0.3s ease-in-out;
}
.circle:hover {
  transform: scale(1.1);
}
</style>
