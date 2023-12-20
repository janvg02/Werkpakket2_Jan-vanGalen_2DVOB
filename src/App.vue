<script>
import NavComponent from "@/components/NavComponent.vue";
import HomeView from "@/views/HomeView.vue";
import FooterComponent from "@/components/FooterComponent.vue";

export default {
  components: {
    HomeView,
    NavComponent,
    FooterComponent,

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