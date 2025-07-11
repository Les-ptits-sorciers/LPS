<template>
  <div>
    <div v-if="isLoading" class="loader-container">
      <img src="/assets/loader.gif" alt="Chargement..." />
    </div>
    <router-view />
  </div>
</template>

<script>
import { ref, onMounted } from 'vue'
import { useRouter } from 'vue-router'

export default {
  name: 'PageLoader',
  setup() {
    const isLoading = ref(false)
    const router = useRouter()
    let timer = null

    onMounted(() => {
      router.beforeEach((to, from, next) => {
        // Lance un timer : si la navigation prend +200ms, on affiche le loader
        timer = setTimeout(() => {
          isLoading.value = true
        }, 200)
        next()
      })

      router.afterEach(() => {
        clearTimeout(timer)
        isLoading.value = false
      })
    })

    return { isLoading }
  }
}
</script>

<style scoped>
.loader-container {
  position: fixed;
  inset: 0;
  background-color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 9999;
}
</style>
