<template>
  <NavBar />
  <PageLoader />
  <Footer />
  <BackToTop />
</template>

<script setup>
import PageLoader from './components/Loader.vue'
import NavBar from './components/NavBar.vue'
import Footer from './components/Footer.vue'
import BackToTop from './components/BackToTop.vue'
</script>

<style>
html, body {
  margin: 0;
  padding: 0;
}
</style>