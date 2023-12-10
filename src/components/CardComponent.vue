<script>
export default {
  props: {
    product: Object
  }
}
</script>

<template>
      <div class="item">
        <div class="item-overlay">
          <h1 class="item-overlay-titel">{{product.title}}</h1>
          <p class="item-overlay-text">{{product.description}}</p>
          <button class="item-overlay-button"><a class="detail-link" href="detailpagina.html">Details</a></button>
          <p class="product-price">€{{product.price}} </p>
          <p class="product-price">BTW: €{{product.BTW}} </p>
        </div>
        <img :src="product.imageLink" :alt="product.imageAlt" class="item-image">
      </div>
</template>

<style>
</style>