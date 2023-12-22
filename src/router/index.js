import {createRouter, createWebHistory} from "vue-router";
import HomeView from "@/views/HomeView.vue";
import LogInView from "@/views/LogInView.vue";
import ProductsView from "@/views/ProductsView.vue";
import DetailView from "@/views/DetailView.vue";
import CartView from "@/views/CartView.vue";
import CheckoutView from "@/views/CheckoutView.vue";

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {path: '/', component: HomeView},
        {path: '/Login', component: LogInView},
        {path: '/Products', component: ProductsView},
        {path: '/Cart', component: CartView},
        {path: '/Checkout', component: CheckoutView},
        {path: '/Detail/:id', component: DetailView, name: 'productDetail', props: true}    ]
})

export default router