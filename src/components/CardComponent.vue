<script>
export default {
  data(){
    return{
      StorageTitle: 'Opslag (GB):',
      DetailButton: 'Details',
      PriceTitle: '€',
    }
  },
  props: [
    'product'
  ],
  methods: {
    goToDetailPage(){
      this.$emit('detail-click', this.product.id);
    }
  }
}
</script>
<template>
    <li class="item">
      <div class="item-overlay">
        <h1 class="item-overlay-titel">{{product.title}}</h1>
        <router-link :to="'/Detail/' + product.id"  class="item-overlay-button" type="button">{{ DetailButton }}</router-link>
        <p class="product-price">{{PriceTitle}}{{product.price}} </p>
        <p class="product-price">{{product.color}} </p>
        <p class="product-price">{{StorageTitle}}{{product.storage}} </p>
      </div>
      <img :src="product.image" :alt="product.title" class="item-image">
    </li>
</template>

<style>

</style>