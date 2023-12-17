import '../scss/main.scss'
import { createApp } from 'vue'
import App from './App.vue'
import{createRouter, createWebHistory} from "vue-router";
import LogInView from "@/views/LogInView.vue";
import ProductsView from "@/views/ProductsView.vue";
import HomeView from "@/views/HomeView.vue";
import DetailView from "@/views/DetailView.vue";
import CartView from "@/views/CartView.vue";
import CheckoutView from "@/views/CheckoutView.vue";
import { createPinia } from 'pinia';


const app = createApp(App)
const router = createRouter({
    history: createWebHistory(),
    routes: [
        {path: '/', component: HomeView},
        {path: '/Login', component: LogInView},
        {path: '/Products', component: ProductsView},
        {path: '/Detail', component: DetailView},
        {path: '/Cart', component: CartView},
        {path: '/Checkout', component: CheckoutView}
    ]
})

app.use(router);
app.mount('#app')

const pinia = createPinia();
app.use(pinia)
