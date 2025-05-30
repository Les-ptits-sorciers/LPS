<script setup>
import ColoredCircle from '../ColoredCircle.vue'
import Header from '../Header.vue'
import NavBar from '../NavBar.vue'
import ProductBanner from '../ProductBanner.vue'
import Banner from '../Banner.vue'
import Footer from '../Footer.vue'

import { ref } from 'vue'

const products = ref([
  { id: 1, image: "https://cdn.pixabay.com/photo/2024/11/14/14/58/grass-9197163_1280.jpg", title: "Produit 1", description: "Description du produit 1" },
  { id: 2, image: "https://cdn.pixabay.com/photo/2025/03/26/09/08/ai-generated-9494063_960_720.jpg", title: "Produit 2", description: "Description du produit 2" },
  { id: 3, image: "https://cdn.pixabay.com/photo/2023/04/02/18/21/fruit-market-7895200_1280.jpg", title: "Produit 3", description: "Description du produit 3" },
])

const banners = [
  {
    image: 'https://cdn.pixabay.com/photo/2024/08/11/18/15/leaves-8962041_1280.jpg',
    title: 'Saisonnalité',
    description: 'Nos produits respectent la saisonnalité pour une meilleure qualité.',
  },
  {
    image: 'https://images.unsplash.com/photo-1705750405375-ddf79008ef67?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    title: 'Ingrédients locaux',
    description: 'Nous privilégions les producteurs locaux pour des ingrédients frais.',
  },
  {
    image: 'https://images.unsplash.com/photo-1598799170815-933217492614?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    title: 'Produits frais',
    description: 'Des produits ultra frais pour une meilleure saveur et qualité.',
  },
  {
    image: 'https://plus.unsplash.com/premium_photo-1663924865153-4eec89bd5980?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    title: 'Produits sains',
    description: 'Sans additifs ni conservateurs, juste du naturel et du goût.',
  }
]
</script>

<template>
  <div id="home">
    <NavBar />
    <Header />

    <div class="content">
      <p>Les P'tits Sorciers réinventent le goûter pour allier :</p>

      <div class="circle">
        <ColoredCircle text="Partage" color="#FB8B24" :size="125" />
        <ColoredCircle text="Plaisir" color="#FB8B24" :size="125" />
        <ColoredCircle text="Santé" color="#FB8B24" :size="125" />
        <ColoredCircle text="Simplicité" color="#FB8B24" :size="125" />
      </div>

      <p>
        Découvrez une sélection de goûters savoureux, préparés à partir d'ingrédients locaux provenant de producteurs de votre région.
        Nos créations varient selon les saisons et les premières matières disponibles, garantissant des produits frais, sains et adaptés à vos besoins.
      </p>

      <h2>Découvrez nos goûters</h2>
      <ProductBanner :products="products" />

      <div class="extra-info">
        <p>Que vous soyez parents, entreprises ou collectivités, commandez en grande quantité et recevez vos douceurs directement chez vous.</p>
        <p>
          Mais ce n'est pas tout : pour les moments de complicité en famille, nous proposons aussi des kits de préparation !
          Cuisinez vos goûters avec vos enfants et partagez des instants gourmands tout en leur apprenant à manger mieux.
        </p>
      </div>

      <Banner :banners="banners" />
      <Footer />
    </div>
  </div>
</template>

<style scoped>
.content {
  padding: 20px;
}

h2 {
  margin-top: 20px;
  margin-bottom: 10px;
  color: #D90368;
}

p {
  margin-bottom: 20px;
}

.circle {
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  flex-wrap: wrap;
  width: 100%;
  padding: 20px 0;
  margin-bottom: 30px;
}

.extra-info {
  margin-top: 30px;
  margin-bottom: 30px;
}

@media (max-width: 768px) {
  .circle {
    flex-direction: column;
    gap: 20px;
  }
}
</style>
