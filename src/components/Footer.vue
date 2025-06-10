<template>
  <footer class="footer">
    <div class="footer-grid">
      <!-- Colonne 1 : Logo et slogan -->
      <div class="footer-logo">
        <img src="/public/assets/logo.png" alt="Logo" class="logo" />
        <p class="slogan">Réenchantez le goûter !</p>
      </div>

      <!-- Colonne 2 : séparateur vertical -->
      <div class="footer-separator"></div>

      <!-- Colonne 3 : Menu -->
      <div class="footer-menu">
        <h3 class="footer-title">Menu</h3>
        <ul>
          <li><a href="#">Découvrir les produits</a></li>
          <li><a href="#">Abonnements</a></li>
          <li><a href="#">Entreprises & Collectivités</a></li>
          <li><a href="#">À propos</a></li>
        </ul>
      </div>

      <!-- Colonne 4 : Réseaux sociaux -->
      <div class="footer-menu">
        <h3 class="footer-title">Suivez-nous</h3>
        <ul>
          <li><a href="#">Instagram</a></li>
          <li><a href="#">Facebook</a></li>
          <li><a href="#">LinkedIn</a></li>
        </ul>
      </div>

      <!-- Colonne 5 : Newsletter -->
      <div class="footer-newsletter">
        <h3 class="footer-title">Notre Newsletter</h3>
        <form @submit.prevent>
          <input
            type="email"
            placeholder="Votre e-mail"
            v-model="email"
            @input="validateEmail"
            required
          />
          <button type="submit" :disabled="!isEmailValid">S’inscrire</button>
        </form>
      </div>
    </div>

    <!-- Section bas de page : droits et liens légaux -->
    <div class="footer-bottom">
      <p class="copyright">© 2025 Les Ptit's Sorciers. Tous droits réservés.</p>
      <div class="footer-links">
        <a href="#">Mentions légales</a>
        <a href="#">Politique de confidentialité</a>
        <a href="#">CGV</a>
      </div>
    </div>
  </footer>
</template>

<script setup>
import { ref } from 'vue'

const email = ref('')
const isEmailValid = ref(false)

const validateEmail = () => {
  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  isEmailValid.value = regex.test(email.value)
}
</script>

<style scoped>
.footer {
  background-color: white;
  padding: 3rem 1rem 1rem;
  width: 100%;
  border-top: 2px solid #eee;
}

.footer-grid {
  display: grid;
  grid-template-columns: 2fr 0.05fr 2fr 2fr 2fr;
  gap: 2rem;
  margin: 0 auto 2rem;
  align-items: start;
  max-width: 1300px;
}

/* Colonne Logo + Slogan */
.footer-logo {
  text-align: left;
}

.logo {
  height: 150px;
}

.slogan {
  font-size: 25px;
  color: #555;
  margin-top: 0.5rem;
}

/* Séparateur vertical */
.footer-separator {
  border-left: 1px solid #ddd;
  height: 100%;
}

/* Menu */
.footer-menu {
  font-size: 20px;
}

.footer-title {
  margin-bottom: 1rem;
  font-size: 1.2rem;
  font-weight: bold;
}

.footer-menu ul {
  list-style: none;
  padding: 0;
  margin: 0;
}

.footer-menu li {
  margin-bottom: 0.6rem;
}

.footer-menu a {
  text-decoration: none;
  color: #333;
}

/* Réseaux sociaux */
.footer-social {
  display: flex;
  flex-direction: column;
  gap: 0.6rem;
}

/* Newsletter */
.footer-newsletter form {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}

.footer-newsletter input[type="email"] {
  padding: 0.5rem;
  border: 1px solid #ccc;
  border-radius: 5px;
  font-size: 1rem;
}

.footer-newsletter button {
  background-color: #FB8B24;
  color: white;
  padding: 0.5rem;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-size: 1rem;
  transition: background-color 0.2s ease;
}

.footer-newsletter button:hover:enabled {
  background-color: #e07a1f;
}

.footer-newsletter button:disabled {
  background-color: #f0c9a5;
  cursor: not-allowed;
  color: #fff;
  opacity: 0.7;
}

/* --- Bas de footer (inchangé) --- */
.footer-bottom {
  border-top: 1px solid #ddd;
  margin-top: 2rem;
  padding-top: 1rem;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  font-size: 0.9rem;
  color: #777;
}

.footer-links {
  display: flex;
  gap: 1rem;
}

.footer-links a {
  text-decoration: none;
  color: #777;
}

.footer-links a:hover {
  text-decoration: underline;
}

/* Responsive */

/* Tablette : layout en 3 lignes distinctes */
@media (max-width: 1023px) and (min-width: 640px) {
  .footer-grid {
    display: grid;
    grid-template-columns: repeat(2, 1fr); /* 2 colonnes pour ligne 2 */
    grid-template-rows: auto auto auto;    /* 3 lignes */
    gap: 2rem;
    max-width: 900px;
    margin: 0 auto 2rem;
  }

  /* Ligne 1 : logo seul, centré sur toute la largeur */
  .footer-logo {
    grid-column: 1 / -1;  /* prend toute la largeur */
    justify-self: center;
    text-align: center;
  }

  /* Pas de séparateur */
  .footer-separator {
    display: none;
  }

  /* Ligne 2 : menu et réseaux sociaux côte à côte */
  .footer-menu:nth-of-type(1) {
    grid-column: 1;
    grid-row: 2;
  }

  .footer-menu:nth-of-type(2) {
    grid-column: 2;
    grid-row: 2;
  }

  /* Ligne 3 : newsletter en pleine largeur */
  .footer-newsletter {
    grid-column: 1 / -1;
    grid-row: 3;
    text-align: center;
  }

  /* Ajustements font-size */
  .footer-menu,
  .footer-newsletter {
    font-size: 18px;
    text-align: center;
  }

  /* Centre le formulaire newsletter */
  .footer-newsletter form {
    align-items: center;
    justify-content: center;
  }

  .footer-newsletter input[type="email"],
  .footer-newsletter button {
    width: 100%;
    max-width: 320px;
  }
}

/* Mobile : tout en colonne, logo centré */
@media (max-width: 639px) {
  .footer-grid {
    grid-template-columns: 1fr;
    gap: 2rem;
    text-align: center;
  }

  .footer-logo {
    grid-column: 1;
    text-align: center;
  }

  .footer-separator {
    display: none;
  }

  .footer-menu,
  .footer-newsletter {
    grid-column: 1;
    font-size: 18px;
  }

  .footer-newsletter form {
    align-items: center;
  }

  .footer-newsletter input[type="email"],
  .footer-newsletter button {
    width: 100%;
    max-width: 300px;
  }

  .footer-bottom {
    flex-direction: column;
    align-items: center;
    text-align: center;
    gap: 0.5rem;
  }

  .footer-links {
    flex-direction: column;
    gap: 0.3rem;
  }
}
</style>
