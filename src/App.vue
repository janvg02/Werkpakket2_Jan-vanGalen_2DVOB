<script>
import NavComponent from "@/components/NavComponent.vue";
import HeaderComponent from "@/components/HeaderComponent.vue";
import HomeView from "@/views/HomeView.vue";
import CardComponent from "@/components/CardComponent.vue";
import FooterComponent from "@/components/FooterComponent.vue";
import LogInView from "@/views/LogInView.vue";
import ProductsView from "@/views/ProductsView.vue";
import DetailView from "@/views/DetailView.vue";
export default {
  data() {

  },
  components: {
    HomeView,
      NavComponent,
      HeaderComponent,
      FooterComponent,
      CardComponent,
    LogInView,
    ProductsView,
    DetailView
  }
}
</script>

<template>
<NavComponent/>

  <router-view></router-view>

  <FooterComponent/>
</template>

<style scoped>

</style>
