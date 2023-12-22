<script>
import NavComponent from "@/components/NavComponent.vue";
import HomeView from "@/views/HomeView.vue";
import FooterComponent from "@/components/FooterComponent.vue";
import CardComponent from "@/components/CardComponent.vue";

export default {
  components: {
    HomeView,
    NavComponent,
    FooterComponent,
    CardComponent
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