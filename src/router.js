import { createRouter, createWebHistory } from 'vue-router'

import Produits from './components/Produits.vue'
import EntreprisesCollectivites from "./components/EntreprisesCollectivites.vue";
import Abonnements from "./components/Abonnements.vue";
import APropos from "./components/APropos.vue";


const routes = [
  { path: '/produits', component: Produits },
  { path: '/entreprises-collectivites', component: EntreprisesCollectivites},
  { path: '/abonnements', component: Abonnements },
  { path: '/a-propos',component: APropos },

]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
