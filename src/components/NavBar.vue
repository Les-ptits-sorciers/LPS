<script setup>
import { ref } from 'vue'

const menuOpen = ref(false)

const toggleMenu = () => {
  menuOpen.value = !menuOpen.value
}
</script>

<template>
  <nav class="navbar">
    <div class="logo">
      <router-link to="/">
        <img src="../../public/assets/logo.png" alt="Logo" />
      </router-link>
    </div>

    <!-- Burger button (mobile only) -->
    <button class="burger" @click="toggleMenu">☰</button>

    <!-- Desktop nav -->
    <ul class="nav-links desktop">
      <li><router-link to="/produits">Découvrir les produits</router-link></li>
      <li><router-link to="/abonnements">Abonnements</router-link></li>
      <li><router-link to="/entreprises-collectivites">Entreprises & Collectivités</router-link></li>
      <li><router-link to="/a-propos">À propos</router-link></li>
    </ul>

    <div class="actions desktop">
      <router-link to="/" class="btn-login">Se connecter</router-link>
      <router-link to="/" class="btn-cart">Mon panier</router-link>
    </div>

    <!-- Mobile menu -->
    <div v-if="menuOpen" class="mobile-menu">
      <ul class="nav-links">
        <li><router-link to="/produits">Découvrir les produits</router-link></li>
        <li><router-link to="/abonnements">Abonnements</router-link></li>
        <li><router-link to="/entreprises-collectivites">Entreprises & Collectivités</router-link></li>
        <li><router-link to="/a-propos">À propos</router-link></li>
      </ul>
      <div class="actions">
        <router-link to="/" class="btn-login">Se connecter</router-link>
        <router-link to="/" class="btn-cart">Mon panier</router-link>
      </div>
    </div>
  </nav>
</template>

<style scoped>
.navbar {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 10px 20px;
  background: white;
  position: relative;
  z-index: 10;
}

.logo img {
  width: 100%;
  max-width: 160px;
  min-width: 120px;
  height: auto;
}

.nav-links {
  display: flex;
  gap: 35px;
  list-style: none;
  padding: 0;
  margin: 0;
}

.nav-links a {
  color: black;
  text-decoration: none;
  font-size: 24px;
  font-weight: bold;
  transition: 0.3s;
  font-family: 'GeosansLight', sans-serif;
}

.nav-links a:hover {
  opacity: 0.7;
}

.actions {
  display: flex;
  gap: 15px;
  align-items: center;
  font-family: 'GeosansLight', sans-serif;
}

.btn-login,
.btn-cart {
  padding: 8px 16px;
  border-radius: 9999px;
  text-decoration: none;
  font-size: 22px;
  transition: background-color 0.3s ease;
}

.btn-login {
  background-color: #FB8B24;
  color: white;
}

.btn-login:hover {
  background-color: #f59e0b;
}

.btn-cart {
  background-color: #D90368;
  color: white;
}

.btn-cart:hover {
  background-color: #EC4899;
}

.burger {
  display: none;
  font-size: 28px;
  background: none;
  border: none;
  cursor: pointer;
}

/* ======= MOBILE ONLY ======= */
@media (max-width: 900px) {
  .desktop {
    display: none;
  }

  .burger {
    display: block;
  }

  .mobile-menu {
    position: absolute;
    top: 100%;
    left: 0;
    width: 100%;
    background: white;
    text-align: center;
    padding: 10px 0;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    z-index: 9;
  }

  .mobile-menu .nav-links {
    flex-direction: column;
    display: flex;
    gap: 15px;
  }

  .mobile-menu .actions {
    flex-direction: column;
    display: flex;
    gap: 10px;
    padding-top: 10px;
  }

  .mobile-menu .btn-login,
  .mobile-menu .btn-cart {
    margin: 0 auto;
  }
}
</style>
