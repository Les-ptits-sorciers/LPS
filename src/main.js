import '../public/assets/main.css'
import { createApp } from 'vue';
import App from './App.vue';
import router from './router';

// Font Awesome
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faCartShopping, faParachuteBox } from '@fortawesome/free-solid-svg-icons'

// Ajouter les icônes à la bibliothèque
library.add(faCartShopping, faParachuteBox)

const app = createApp(App);
app.component('font-awesome-icon', FontAwesomeIcon)
app.use(router);
app.mount('#app');
