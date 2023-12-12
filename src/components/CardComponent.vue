<script>
export default {
 data(){
   return{
    StorageTitle: 'Opslag (GB): '
   }
 },
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
          <p class="product-price">{{product.price}} </p>
          <p class="product-price">{{product.color}} </p>
          <p class="product-price">{{StorageTitle}}{{product.storage}} </p>
        </div>
        <img :src="product.imageLink" :alt="product.imageAlt" class="item-image">
      </div>
</template>

<style>



</style>