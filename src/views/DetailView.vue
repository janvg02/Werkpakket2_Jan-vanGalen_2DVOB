<script>
import NavComponent from "@/components/NavComponent.vue";
import {defineComponent} from "vue";
import productsView from "@/views/ProductsView.vue";
import CardComponent from "@/components/CardComponent.vue";
import FooterComponent from "@/components/FooterComponent.vue";
import {inject} from "vue";

export default defineComponent({
  components: {NavComponent, productsView,CardComponent,FooterComponent},
  setup(){
    inject("productsData", products)
    return{
      products
    }

  },
  data(){
    return{
      CartButton: 'Add to cart'
    }
  }
})
</script>
<template>
  <main class="detail-main">
    <div class="detail-iphone">
      <div class="detail-img-big"                                                                                                                                                                                                                                                                                                                                                                                                               >
        <img :src="products.imageLink" :alt="products.imageAlt">
      </div>
      <div class="detail-specificaties">
        <ul class="detail-list">
          <li class="detail-list-item"><h1>{{products.title}}</h1></li>
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