<script>
import NavComponent from "@/components/NavComponent.vue";
import HeaderComponent from "@/components/HeaderComponent.vue";
import HomeView from "@/views/HomeView.vue";
import CardComponent from "@/components/CardComponent.vue";
import FooterComponent from "@/components/FooterComponent.vue";

export default {
  data() {

  },
  components: {
    HomeView,
      NavComponent,
      HeaderComponent,
      FooterComponent,
      CardComponent
  }
}
</script>

<template>
<NavComponent/>
  <HeaderComponent/>
<router-view><HomeView/></router-view>
  <FooterComponent/>
</template>

<style scoped>

</style>
