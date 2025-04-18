import { createRouter, createWebHistory } from 'vue-router'

import Produits from './components/Layout/Produits.vue'
import EntreprisesCollectivites from "./components/Layout/EntreprisesCollectivites.vue";
import Abonnements from "./components/Layout/Abonnements.vue";
import APropos from "./components/Layout/APropos.vue";


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
