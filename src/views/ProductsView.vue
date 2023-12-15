<script>
import CardComponent from "@/components/CardComponent.vue";
import NavComponent from "@/components/NavComponent.vue";
import FooterComponent from "@/components/FooterComponent.vue";
import FilterComponent from "@/components/FilterComponent.vue";
import {inject} from "vue";

export default {
  components: {CardComponent, NavComponent, FooterComponent,FilterComponent},
  setup(){
    const products = inject("productsData", []);

    return{
      products
    }
  },
  data() {
  return {
    MaxItems: 6,
    FirstPage: 1,
    PreviousButton:'Vorige',
    NextButton:'Volgende',
    startFilters: {
      cheapest: false,
      cheap: false,
      expensive: false,
      "128": false,
      "256": false,
      "512": false,
    },
  };
},
computed: {
  paginatedProducts() {
    const start = (this.FirstPage - 1) * this.MaxItems;
    const end = start + this.MaxItems;
    return this.products.slice(start, end);
  },
  AllPages() {
    return Math.ceil(this.products.length / this.MaxItems);
  },

},
methods: {
  nextPage() {
    if (this.FirstPage < this.AllPages) {
      this.FirstPage++;
    }
  },
  prevPage() {
    if (this.FirstPage > 1) {
      this.FirstPage--;
    }
  },
},
};
</script>

<template>
<FilterComponent/>
  <div class="gallery">
    <CardComponent v-for="product in paginatedProducts"
                   v-bind:key="product.id"
                   v-bind:product="product"
    />
  </div>
  <div class="paginatie">
    <button v-if="FirstPage > 1" class="ButtonPage" @click="prevPage" :disabled="FirstPage === 1">{{PreviousButton}}</button>
    <h1>{{ FirstPage }}</h1>
    <button v-if="FirstPage !== AllPages" class="ButtonPage" @click="nextPage" :disabled="FirstPage === AllPages">{{ NextButton }}</button>
  </div>
</template>

<style scoped>

</style>