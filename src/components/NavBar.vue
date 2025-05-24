<script setup>
import { ref } from 'vue';

const menuOpen = ref(false);

const toggleMenu = () => {
  menuOpen.value = !menuOpen.value;
};
</script>

<template>
  <nav class="navbar">
    <div class="logo">
      <router-link to="/">
        <img src="../../public/assets/logo_navbar.png" alt="Logo" />
      </router-link>
    </div>

    <button class="burger" @click="toggleMenu">☰</button>

    <ul :class="['nav-links', { open: menuOpen }]">
      <li><router-link to="/produits">Découvrir les produits</router-link></li>
      <li><router-link to="/abonnements">Abonnements</router-link></li>
      <li><router-link to="/entreprises-collectivites">Entreprises & Collectivités</router-link></li>
      <li><router-link to="/a-propos">À propos</router-link></li>
    </ul>

    <div class="actions">
      <router-link to="/" class="btn-login">Se connecter</router-link>
      <router-link to="/" class="btn-cart">Mon panier</router-link>
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
}

.logo img {
  width: 60%;
  max-width: 120px;
  min-width: 50px;
  height: auto;
}

.nav-links {
  display: flex;
  gap: 35px;
  list-style: none;
  padding: 0;
}

.nav-links a {
  color: black;
  text-decoration: none;
  font-size: 24px;
  font-weight: bold;
  transition: 0.3s;
  font-family: 'GeosansLight', sans-serif;
  line-height: 100%;
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
  font-size: 16px;
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
  background-color: #ec4899;
}

.burger {
  display: none;
  font-size: 24px;
  background: none;
  border: none;
  cursor: pointer;
}

@media (max-width: 768px) {
  .burger {
    display: block;
  }

  .nav-links {
    display: none;
    flex-direction: column;
    position: absolute;
    top: 60px;
    left: 0;
    width: 100%;
    background: white;
    text-align: center;
    padding: 10px 0;
  }

  .nav-links li {
    margin: 10px 0;
    font-family: 'Dream Orphans', sans-serif;
  }

  .actions {
    display: none;
  }
}
</style>
