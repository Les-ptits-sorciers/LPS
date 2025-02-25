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
      <img src="@/assets/logo_navbar.png" alt="Logo" />
    </div>

    <button class="burger" @click="toggleMenu">☰</button>
    <ul :class="['nav-links', { open: menuOpen }]">
      <li><router-link to="/produits">Découvrir les produits</router-link></li>
      <li><router-link to="/abonnements">Abonnements</router-link></li>
      <li><router-link to="/entreprises-collectivites">Entreprises & Collectivités</router-link></li>
      <li><router-link to="/a-propos">À propos</router-link></li>
    </ul>
    <div class="icons">
      <img src="@/assets/icone_user.png" alt="User" class="icon" />
      <img src="@/assets/icone_panier.png" alt="Cart" class="icon" />
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
  height: 50px;
}

.nav-links {
  display: flex;
  gap: 25px;
  list-style: none;
  padding: 0;
}

.nav-links a {
  color: black;
  text-decoration: none;
  font-size: 18px;
  font-weight: 500;
  transition: 0.3s;
}

.nav-links a:hover {
  opacity: 0.7;
}

.icons {
  display: flex;
  gap: 15px;
}

.icon {
  height: 50px;
  cursor: pointer;
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

  .icons {
    display: none;
  }
}
</style>
