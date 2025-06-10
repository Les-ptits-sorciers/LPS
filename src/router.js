import { createRouter, createWebHistory } from 'vue-router'
import Home from "@/components/Layout/Home.vue";
import EntreprisesCollectivites from "@/components/Layout/EntreprisesCollectivites.vue";
import Produits from "@/components/Layout/Produits.vue";
import Abonnements from "@/components/Layout/Abonnements.vue";
import APropos from "@/components/Layout/APropos.vue";
import ProductPage from "@/components/Layout/ProductPage.vue";
import WorkInProgress from './components/Layout/WorkInProgress.vue';
import NotFound from './components/NotFound.vue';


let routes;
routes = [
  {path: '/', name: 'Home', component: Home},
  {path: '/produits', component: Produits},
  {path: '/entreprises-collectivites', component: EntreprisesCollectivites},
  {path: '/abonnements', component: Abonnements},
  {path: '/a-propos', component: APropos},
  {path: '/produit/:id', component: ProductPage, props: true },
  {path: '/en-construction', component: WorkInProgress},
  {path: '/:pathMatch(.*)*', component: NotFound}
];

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
