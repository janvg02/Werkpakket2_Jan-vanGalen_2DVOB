<script>
import { useProductsStore } from '@/Stores/Products.js';
import { useCartStore } from '@/Stores/Cart.js';

export default {
  data() {
    return {
      cartUndertitle: 'Winkelwagen',
      removeButton: 'Verwijder',
      productsStore: useProductsStore(),
      cartStore: useCartStore(),
      ClearCart: 'Verwijder alles',
      totalText: 'Totaal bedrag: € ',
      QuantityText: 'Hoeveelheid'
    }
  },
  components: {

  },
  props: {

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
}
</script>

<template>
  <section class="cart">
    <h2 class="cart-undertitle" >{{ cartUndertitle}}</h2>
    <ul>
      <li v-for="item in cartItems" :key="item.id">
        <h1 class="product-title-cart" >{{ item.title }} {{QuantityText}} {{ + item.quantity }}</h1>
        <p class="product-description-cart">Price: €{{ item.price * item.quantity }}</p>
        <button class="quantity-button-down" @click="updateNumber(item.id, item.quantity - 1)">-</button>
        <button class="quantity-button-up" @click="updateNumber(item.id, item.quantity + 1)">+</button>
        <button class="remove-item" @click="removeFromCart(item.id)">{{ removeButton }}</button>
      </li>
    </ul>
    <p class="total-price">{{totalText}}{{ totalCart }}</p>
    <button class="clear-cart" @click="clearCart">{{ ClearCart }}</button>
  </section>
</template>

<style scoped>
</style>