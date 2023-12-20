<script>
import { useCartStore } from "@/Stores/Cart";
import {useRoute} from "vue-router";

export default {
  data() {
    return {
      CartButton: 'Add to cart',
      cart: useCartStore(),
      productsStore: null,
      product: {
        id: 0,
        title: '',
        storage: 0,
        description:'',
        color:'',
        image:'',
        price:0,
        BTW:'',
        Stock: 0
      }
    }
  },
  methods: {
    async getProductId() {
      const route = useRoute();
      const productId = route.params.id;

      try {
        this.product = this.productsStore.getProductId(productId);

        if (this.product) {
          console.log('Product:', this.product.title);
        } else {
          console.error('Product not found');
        }
      } catch (error) {
        console.error('Error fetching product:', error);
      }
    },
  },
  created() {
    console.log('Component created');
    this.getProductId();
  },
};
</script>

<template>
  <main class="detail-main">
    <div class="detail-iphone">
      <div class="detail-img-big">
        <img v-if="product" :src="product.image" :alt="product.title">
      </div>
      <div class="detail-specificaties">
        <div class="detail-list">
          <h1 class="detail-list-item" v-if="product">{{ product.title }}</h1>
          <h2 class="detail-list-item" v-if="product">{{ product.price }}</h2>
          <h2 class="detail-list-item" v-if="product">{{ product.BTW }}</h2>
          <h3 class="detail-list-item" v-if="product">{{ product.description }}</h3>
          <h3 class="detail-list-item" v-if="product">{{ product.storage }}</h3>
        </div>
        <button class="item-overlay-button">
          <router-link to="/Cart">{{ CartButton }}</router-link>
        </button>
      </div>
    </div>
  </main>
</template>

<style scoped>

</style>