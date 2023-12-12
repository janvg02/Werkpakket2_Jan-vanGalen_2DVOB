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
          <button class="item-overlay-button"><router-link to="/DetailView">Details</router-link></button>
          <p class="product-price">€{{product.price}} </p>
          <p class="product-price">Color: {{product.color}} </p>
          <p class="product-price">{{product.storage}} </p>
        </div>
        <img :src="product.imageLink" :alt="product.imageAlt" class="item-image">
      </div>
</template>

<style>



</style>