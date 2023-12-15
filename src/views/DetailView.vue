<script>
import CardComponent from "@/components/CardComponent.vue";
import {inject} from "vue";


export default {
  components: {
    CardComponent
  },
  setup() {
    const products = inject("productsData", []);
    const CartButton = 'Add to cart';

    return {
      products,
      CartButton,
    };
  }
}
</script>
<template>

  <main class="detail-main">
    <div class="detail-iphone">
      <div class="detail-img-big"                                                                                                                                                                                                                                                                                                                                                                                                               >
        <img :src="products.imageLink" :alt="products.imageAlt">
      </div>
      <div class="detail-specificaties">
        <ul class="detail-list">
          <li class="detail-list-item"><h1 class="detailTitle" v-for="title in products">{{products.title}}</h1></li>
          <li class="detail-list-item"><h2>{{products.price}}</h2></li>
          <li class="detail-list-item"><h2>{{products.BTW}}</h2></li>
          <li class="detail-list-item"><h3>{{products.description}}</h3></li>
          <li class="detail-list-item-listed"><p>{{products.storage}}</p></li>
        </ul>
        <button class="item-overlay-button"><router-link to="/Cart">{{ CartButton }}</router-link></button>
      </div>
    </div>
  </main>
</template>

<style scoped>

</style>