<script setup>
import ColoredCircle from '../ColoredCircle.vue'
import Header from '../Header.vue'
import ProductBanner from '../ProductBanner.vue'
import Banner from '../Banner.vue'
import BoxCard from '../BoxCard.vue'

import { ref } from 'vue'

const products = ref([
  { id: 1, image: "https://cdn.pixabay.com/photo/2024/01/18/14/26/snack-8517056_1280.jpg", title: "Produit 1", description: "Description du produit 1" },
  { id: 2, image: "https://cdn.pixabay.com/photo/2023/07/20/11/00/cookie-8139062_1280.jpg", title: "Produit 2", description: "Description du produit 2" },
  { id: 3, image: "https://cdn.pixabay.com/photo/2018/11/06/19/06/cookies-3798903_1280.jpg", title: "Produit 3", description: "Description du produit 3" },
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

const boxes = [
  {
    id: 1,
    title: 'Box annuelle',
    category: 'Maternelle',
    price: 'XX,XX€',
    description: 'Votre kit goûter adapté aux 3 à 5 ans',
    image: 'https://cdn.pixabay.com/photo/2018/11/06/19/06/cookies-3798903_1280.jpg'
  },
  {
    id: 2,
    title: 'Box mensuelle',
    category: 'Primaire',
    price: 'XX,XX€',
    description: 'Votre kit goûter adapté aux 6 à 11 ans',
    image: 'https://cdn.pixabay.com/photo/2023/07/20/11/00/cookie-8139062_1280.jpg'
  },
  {
    id: 3,
    title: 'Box découverte',
    category: 'Adolescent',
    price: 'XX,XX€',
    description: 'Votre kit goûter adapté aux 12 à 16 ans',
    image: 'https://cdn.pixabay.com/photo/2024/01/18/14/26/snack-8517056_1280.jpg'
  }
]

const handleAddToCart = (boxId) => {
  console.log('Ajouter au panier la box:', boxId)
  // add cart logic here
}
</script>

<template>
  <div id="home">
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

      <!-- Section des Box -->
      <div class="boxes-section">
        <BoxCard 
          v-for="box in boxes" 
          :key="box.id"
          :title="box.title"
          :category="box.category"
          :price="box.price"
          :description="box.description"
          :image="box.image"
          @add-to-cart="() => handleAddToCart(box.id)"
        />
      </div>

      <div class="extra-info">
        <p>Que vous soyez parents, entreprises ou collectivités, commandez en grande quantité et recevez vos douceurs directement chez vous.</p>
        <p>
          Mais ce n'est pas tout : pour les moments de complicité en famille, nous proposons aussi des kits de préparation !
          Cuisinez vos goûters avec vos enfants et partagez des instants gourmands tout en leur apprenant à manger mieux.
        </p>
      </div>

      <Banner :banners="banners" />
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

.boxes-section {
  display: flex;
  justify-content: center;
  gap: 30px;
  flex-wrap: wrap;
  margin: 30px 0;
}

@media (max-width: 640px) {
  .circle {
    flex-direction: column;
    gap: 20px;
  }
  
  .boxes-section {
    gap: 20px;
  }
}
</style>
