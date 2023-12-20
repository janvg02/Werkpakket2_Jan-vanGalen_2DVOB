<script>
import HeaderComponent from '@/components/HeaderComponent.vue';
import CartComponent from '@/components/CartComponent.vue';
import { useProductsStore } from '@/Stores/Products.js';
import { useCartStore } from '@/Stores/Cart.js';

export default {
  components: {
    HeaderComponent,
    CartComponent,
  },

  data() {
    return {
      cartTitle: 'Cart',
      detailButtonText: 'details',
      productsStore: useProductsStore(),
      cartStore: useCartStore(),
    };
  },

  computed: {
    products() {
      return this.productsStore.products;
    },

    cartItems() {
      return this.cartStore.cartItems;
    },

    totalCart() {
      return this.cartStore.totalCart;
    },
  },

  methods: {
    addToCart(product) {
      this.cartStore.addToCart(product);
    },

    removeFromCart(productId) {
      this.cartStore.removeFromCart(productId);
    },

    updateNumber(productId, newQuantity) {
      this.cartStore.updateNumber(productId, newQuantity);
    },

    clearCart() {
      this.cartStore.clearCart();
    },
  },
};
</script>

<template>
  <CartComponent/>
</template>

<style>
</style>