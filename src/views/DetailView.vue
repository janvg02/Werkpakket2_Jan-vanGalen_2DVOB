<script>
import {useProductsStore} from "@/Stores/Products";
import ProductsData from "@/assets/products.json"

export default {
  data() {
    return {
      PriceText: '€',
      StockTitle: 'Voorraad: ',
      StockEmpty: 'Niet op voorraad!',
      StorageText: 'Storage (GB): ',
      CartButton: 'Add to Cart',
      product:null
    }
  },
  props: {
  id: {
    type: [Number, String],
    required: true,
  },
},
  async created() {
    await this.fetchProductData();
  },
  methods: {
    async fetchProductData() {
      try {
        const productId = String(this.id);
        const allProducts = ProductsData;

        this.product = allProducts.find(product => String(product.id) === productId);

        if (!this.product) {
          console.error(`Product not found for id: ${productId}`);
        }
      } catch (error) {
        console.error('Error fetching products:', error);
      }
    },
    addToCart(product) {
      useProductsStore().addToCart(product);
    },
  },
  watch: {},
  beforeRouteUpdate(to, from, next) {
    this.fetchProductData().then(next);
  },

}</script>

<template>
  <main class="detail-main">
    <div class="detail-iphone" v-if="product" >
      <div class="detail-img-big">
        <img v-if="product.image" :src="`/${product.image}`" :alt="product.title">
      </div>
      <div class="detail-specificaties">
        <div class="detail-list">
          <h1 class="detail-list-item" >{{ product.title }}</h1>
          <h2 class="detail-list-item" >{{PriceText}}{{ product.price }}</h2>
          <h2 class="detail-list-item">{{ product.BTW }}</h2>
          <h3 class="detail-list-item">{{ product.description }}</h3>
          <h3 class="detail-list-item" >{{StorageText}}{{ product.storage }}</h3>
          <h3 v-if="product.Stock === 0">{{StockEmpty}}</h3>
          <h3 v-if="product.Stock > 0" class="product-price">{{StockTitle}}{{product.Stock}} </h3>

        </div>
        <button class="item-overlay-button">
          <button @click="addToCart(product)" class="add-to-cart-button">{{ CartButton }}</button>
        </button>
      </div>
    </div>
  </main>
</template>

<style scoped>

</style>