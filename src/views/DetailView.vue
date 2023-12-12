<script>
import productsView from "@/views/ProductsView.vue";
import CardComponent from "@/components/CardComponent.vue";
import NavComponent from "@/components/NavComponent.vue";
import FooterComponent from "@/components/FooterComponent.vue";

export default {
    components: {productsView,CardComponent,NavComponent,FooterComponent},
  props: {
    product: Object
  },
}
</script>

<template>
  <main class="detail-main">
    <div class="detail-iphone">
      <div class="detail-img-big">
        <img :src="product.imageLink" :alt="product.imageAlt">
      </div>
      <div class="detail-specificaties">
        <ul class="detail-list">
          <li class="detail-list-item"><h1>{{product.title}}</h1></li>
          <li class="detail-list-item"><h2>{{product.price}}</h2></li>
          <li class="detail-list-item"><h2>{{product.BTW}}</h2></li>
          <li class="detail-list-item"><h3>{{product.description}}</h3></li>
          <li class="detail-list-item-listed"><p>{{product.storage}}</p></li>
        </ul>
      </div>
    </div>
  </main>
</template>

<style scoped>

</style>