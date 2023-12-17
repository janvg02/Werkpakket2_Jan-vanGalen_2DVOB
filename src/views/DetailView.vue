<script>

import {defineComponent, inject} from "vue";
import DetailComponent from "@/components/DetailComponent.vue";
export default defineComponent({
  components: {DetailComponent},
  setup() {
    const products = inject("productsData", []);

    return {
      products
    }
  },
  data(){
    return{
      selectedProduct: null
    }
  },
  mounted() {
    const productId = this.$route.params.id;
    this.selectedProduct = this.products.find(product => product.id === productId);
  },
})

</script>
<template>
  <DetailComponent v-for="product in products"
                 v-bind:key="product.id"
                 v-bind:product="product"
  />
</template>

<style scoped>

</style>