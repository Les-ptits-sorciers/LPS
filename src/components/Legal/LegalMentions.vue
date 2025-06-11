<template>
  <NavBar />
  <section class="mentions-legales">
    <!-- En-tête centré avec logo + titre -->
    <header class="header">
      <h1 class="page-title">Mentions légales</h1>
    </header>

    <!-- Sections du document -->
    <ul class="sections">
      <li class="section">
        <h2>Nom du site</h2>
        <p>Les P'tits Sorciers</p>
      </li>

      <li class="section">
        <h2>Responsable de publication</h2>
        <p>
          L’équipe projet étudiant Les P'tits Sorciers<br />
          Contact : <a href="mailto:contact@goutlocal.fr">lesptitsorciers@gmail.com</a>
        </p>
      </li>

      <li class="section">
        <h2>Éditeur du site</h2>
        <p>
          Ce site est réalisé dans le cadre d’un projet étudiant à MyDigitalSchool à Angers.<br />
        </p>
      </li>

      <li class="section">
        <h2>Hébergement</h2>
        <p>
          OVHcloud<br />
          SAS au capital de 10 174 560 €<br />
          RCS Lille Métropole 424 761 419 00045<br />
          2 rue Kellermann – 59100 Roubaix – France<br />
          Site : <a href="https://www.ovhcloud.com" target="_blank">www.ovhcloud.com</a>
        </p>
      </li>

      <li class="section">
        <h2>Données personnelles</h2>
        <p>
          Aucune donnée personnelle n’est collectée à des fins commerciales.
          Les données éventuellement saisies sont utilisées uniquement à des fins pédagogiques et ne sont pas stockées.
        </p>
      </li>

      <li class="section">
        <h2>Propriété intellectuelle</h2>
        <p>
          Les contenus présents sur ce site sont utilisés dans un but pédagogique.
          Toute ressemblance avec un site réel est fortuite.
        </p>
      </li>

      <li class="section">
        <h2>Limitations de responsabilité</h2>
        <p>
          Ce site étant un prototype éducatif, l’équipe ne saurait être tenue responsable
          en cas d’erreurs ou de mauvaise interprétation des contenus.
        </p>
      </li>

      <li class="section">
        <h2>Projet fictif</h2>
        <p>
          Ce site ne constitue ni une entreprise réelle, ni une activité commerciale.
          Il a été conçu uniquement dans le cadre d’un projet étudiant.
        </p>
      </li>
    </ul>
  </section>
  <Footer />
</template>

<script setup>
import NavBar from '@/components/NavBar.vue';
import Footer from '@/components/Footer.vue';
</script>

<style scoped>
.mentions-legales {
  max-width: 960px;
  margin: 40px auto;
  padding: 0 30px;
  color: #222;
  line-height: 1.7;
}

.header {
  text-align: center;
  margin-bottom: 40px;
}

.page-title {
  font-size: 50px;
  margin: 0;
  color: #d90368;
}

.sections {
  list-style-type: none;
  padding: 0;
  margin: 0;
}

.section:not(:last-child) {
  border-bottom: 1px solid #ddd;
  padding-bottom: 16px;
  margin-bottom: 32px;
}

.section h2 {
  font-size: 35px;
  margin-bottom: 8px;
  color: #FB8B24;
}

.section p {
  margin: 0;
  white-space: pre-line;
}

a {
  color: #0056a4;
  text-decoration: none;
}

a:hover {
  text-decoration: underline;
}
</style>
