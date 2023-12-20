<script>
import { useCartStore } from "@/Stores/Cart";
import {useProductsStore} from "@/Stores/Products";

export default {
  data(){
    return{
      productStore: useProductsStore(),
      cart: useCartStore(),
      CartButton: 'Add to Cart'
    }
  },
  props: [
    'product'
  ],
  computed: {

    amount(){
      return this.cart
    }
  },

}</script>

<template>
  <main class="detail-main">
    <div class="detail-iphone" v-if="product" >
      <div class="detail-img-big">
        <img :src="product.image" :alt="product.title">
      </div>
      <div class="detail-specificaties">
        <div class="detail-list">
          <h1 class="detail-list-item" >{{ product.title }}</h1>
          <h2 class="detail-list-item" >{{ product.price }}</h2>
          <h2 class="detail-list-item">{{ product.BTW }}</h2>
          <h3 class="detail-list-item">{{ product.description }}</h3>
          <h3 class="detail-list-item" >{{ product.storage }}</h3>
        </div>
        <button class="item-overlay-button">
          <button @click="amount(product)">{{ CartButton }}</button>
        </button>
      </div>
    </div>
  </main>
</template>

<style scoped>

</style>