<script>
import {defineComponent} from "vue";
import CardComponent from "@/components/CardComponent.vue";
import HeaderComponent from "@/components/HeaderComponent.vue";
import NavComponent from "@/components/NavComponent.vue";
import FooterComponent from "@/components/FooterComponent.vue";
import PopularProductsComponent from "@/components/PopularProductsComponent.vue";
import {useProductsStore} from "@/Stores/Products";
export default defineComponent({
  components: {CardComponent, HeaderComponent, NavComponent, FooterComponent,PopularProductsComponent},
  data(){
    return{
      products: useProductsStore(),
      BestProducts() {
        return{
          product: this.products
        };
      }
    }
  }
})

</script>

<template>
  <HeaderComponent/>
 <PopularProductsComponent/>
</template>

<style scoped>

</style>