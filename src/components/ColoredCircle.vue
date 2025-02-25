<template>
  <div 
    class="circle" 
    :style="{ 
      borderColor: color, 
      width: size + 'px', 
      height: size + 'px', 
      fontSize: fontSize + 'px', 
      borderWidth: borderWidth + 'px',
      padding: padding + 'px'
    }">
    {{ text }}
  </div>
</template>

<script setup>
import { defineProps, computed } from 'vue';

const props = defineProps({
  text: {
    type: String,
    required: true
  },
  color: {
    type: String,
    default: '#FB8B24A6'
  },
  size: {
    type: Number,
    default: 100
  },
  borderWidth: {
    type: Number,
    default: 3
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
  color: #D90368;
  font-weight: bold;
  text-align: center;
  border-style: solid;
  white-space: nowrap;
  overflow: hidden;
  box-sizing: border-box;
}
</style>
