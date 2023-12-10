import '../scss/main.scss'
import { createApp } from 'vue'
import App from './App.vue'
import{createRouter, createWebHistory} from "vue-router";
import LogIn from "@/views/LogIn.vue";

const app = createApp(App)
const router = createRouter({
    history: createWebHistory(),
    routes: [
        {path: '/Login', component: LogIn.vue}
    ]
})

app.use(router);
app.mount('#app')
