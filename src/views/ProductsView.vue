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
    OverzichtTitle: 'Ons Assortiment',
    OverzichtSubTitle: 'Telefoons van hoge kwaliteit',
    TitlePrice: 'Prijsklasse',
    TitleStorage: 'Opslag',
    Price1: 'Minder dan 529',
    Price2: '529 - 749',
    Price3: 'Meer dan 749',
    Storage1: '128 GB',
    Storage2: '256 GB',
    Storage3: '512 GB',
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
  <div class="top-overzicht-main">
    <h1 class="top-overzicht-titel">{{ OverzichtTitle }}</h1>
    <p class="top-overzicht-text">{{ OverzichtSubTitle }}</p>
    <div class="filters">
      <div class="filter-item">
        <fieldset class="filter">
          <legend>{{TitlePrice}}</legend>
          <div class="filter-text">
            <input type="checkbox" id="cheapest" name="cheapest"  />
            <label for="cheapest">{{ Price1 }}</label>
          </div>
          <div class="filter-text">
            <input type="checkbox" id="cheap" name="cheap"  />
            <label for="cheap">{{ Price2 }}</label>
          </div>
          <div class="filter-text">
            <input type="checkbox" id="expensive" name="expensive" />
            <label for="expensive">{{Price3}}</label>
          </div>
        </fieldset>
      </div>
      <div class="filter-item">
        <fieldset class="filter">
          <legend>{{TitleStorage}}</legend>
          <div class="filter-text">
            <input type="checkbox" id="128" name="128" />
            <label for="128">{{Storage1}}</label>
          </div>
          <div class="filter-text">
            <input type="checkbox" id="256" name="256" />
            <label for="256">{{Storage2}}</label>
          </div>
          <div class="filter-text">
            <input type="checkbox" id="512" name="512"  />
            <label for="512">{{Storage3}}</label>
          </div>
        </fieldset>
      </div>
    </div>
  </div>  <div class="gallery">
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