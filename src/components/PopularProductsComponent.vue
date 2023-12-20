<script>
import {useProductsStore} from "@/Stores/Products.js";
import CardComponent from "@/components/CardComponent.vue";

export default {
  components: {CardComponent},
  data() {
    return {
      productsStore: useProductsStore(),
      StorageTitle: 'Opslag (GB):',
      DetailButton: 'Details',
      PriceTitle: '€',
    }
  },
  computed: {
    BestProducts() {
      return this.productsStore.getBestProducts();
    },
  },
}
</script>

<template>
  <div class="item-main">
    <div class="item" v-for="product in BestProducts" :key="product.id">
      <div class="item-overlay">
        <h1 class="item-overlay-titel">{{product.title}}</h1>
        <router-link :to="'/Detail/' + product.id"  class="item-overlay-button" type="button">{{ DetailButton }}</router-link>
        <p class="product-price">{{PriceTitle}}{{product.price}} </p>
        <p class="product-price">{{product.color}} </p>
        <p class="product-price">{{StorageTitle}}{{product.storage}} </p>
      </div>
      <img :src="product.image" :alt="product.title" class="item-image">
    </div>
  </div>
</template>

<style scoped>

</style>