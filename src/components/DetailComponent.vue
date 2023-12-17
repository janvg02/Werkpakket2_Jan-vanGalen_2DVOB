<script>
import CardComponent from "@/components/CardComponent.vue";


export default {
  components: {
    CardComponent
  },
  data(){
    return{
      CartButton: 'Add to cart',

    }
  },
  props: {
    product: Object
  }
}
</script>
<template>

  <main class="detail-main">
    <div class="detail-iphone">
      <div class="detail-img-big"                                                                                                                                                                                                                                                                                                                                                                                                               >
        <img :src="product.imageLink" :alt="product.imageAlt">
      </div>
      <div class="detail-specificaties">
        <ul class="detail-list">
          <li class="detail-list-item"><h1 class="detailTitle">{{product.title}}</h1></li>
          <li class="detail-list-item"><h2>{{product.price}}</h2></li>
          <li class="detail-list-item"><h2>{{product.BTW}}</h2></li>
          <li class="detail-list-item"><h3>{{product.description}}</h3></li>
          <li class="detail-list-item-listed"><p>{{product.storage}}</p></li>
        </ul>
        <button class="item-overlay-button"><router-link to="/Cart">{{ CartButton }}</router-link></button>
      </div>
    </div>
  </main>
</template>

<style scoped>

</style>