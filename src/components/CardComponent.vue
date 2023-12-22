<script>
import {useProductsStore} from "@/Stores/Products";
import productsData from "@/assets/products.json"

export default {
  data(){
    return{
      StorageTitle: 'Opslag (GB):',
      DetailButton: 'Details',
      PriceTitle: '€',
      product: productsData,
      productsStore: useProductsStore(),
      itemsPerPage: 8,
      currentPage: 1,
      OverzichtTitle: 'Ons assortiment',
      OverzichtSubTitle: 'Telefoons van hoge kwaliteit',
      TitlePrice:'Prijs',
      Price1:'< € 549',
      Price2:'€ 549 - € 799',
      Price3:'> € 799',
      TitleStorage: 'Opslag',
      Storage1:'128 GB',
      Storage2:'256 GB',
      Storage3:'512 GB',
      checkedFilters: {
        least: false,
        less: false,
        most: false,
        cheapest: false,
        cheap: false,
        expensive: false
      }
    }
  },


  methods: {
    previousPage() {
      if (this.currentPage > 1) {
        this.currentPage--;
      }
    },
    nextPage() {
      if (this.currentPage < this.totalPages) {
        this.currentPage++;
      }
    },

  },
    computed: {
      getAllProducts() {
        return this.productsStore.getAllProducts();
      },

      totalPages() {
        return Math.ceil(this.getAllProducts.length / this.itemsPerPage);
      },
      paginatedProducts() {
        const start = (this.currentPage - 1) * this.itemsPerPage;
        const end = start + this.itemsPerPage;
        return this.getAllProducts.slice(start, end);
      },
    },
}
</script>
<template>
    <div class="top-overzicht-main">
      <h1 class="top-overzicht-titel">{{ OverzichtTitle }}</h1>
      <p class="top-overzicht-text">{{ OverzichtSubTitle }}</p>
      <div class="filters">
        <div class="filter-item">
          <fieldset class="filter">
            <legend>{{ TitlePrice }}</legend>
            <div class="filter-text">
              <input type="checkbox" id="cheapest" name="cheapest" />
              <label for="cheapest">{{ Price1 }}</label>
            </div>
            <div class="filter-text">
              <input type="checkbox" id="cheap" name="cheap" />
              <label for="cheap">{{ Price2 }}</label>
            </div>
            <div class="filter-text">
              <input type="checkbox" id="expensive" name="expensive" />
              <label for="expensive">{{ Price3 }}</label>
            </div>
          </fieldset>
        </div>
        <div class="filter-item">
          <fieldset class="filter">
            <legend>{{ TitleStorage }}</legend>
            <div class="filter-text">
              <input  type="checkbox" id="128" name="least" />
              <label for="128">{{ Storage1 }}</label>
            </div>
            <div class="filter-text">
              <input  type="checkbox" id="256" name="less" />
              <label for="256">{{ Storage2 }}</label>
            </div>
            <div class="filter-text">
              <input  type="checkbox" id="512" name="most" />
              <label for="512">{{ Storage3 }}</label>
            </div>
          </fieldset>
        </div>
      </div>
    </div>
    <li class="item" v-for="(product) in paginatedProducts" :key="product.id">
      <div class="item-overlay">
        <h1 class="item-overlay-titel">{{product.title}}</h1>
        <router-link :to="'/Detail/' + product.id"   class="item-overlay-button" type="button">{{ DetailButton }}</router-link>
        <p class="product-price">{{PriceTitle}}{{product.price}} </p>
        <p class="product-price">{{product.color}} </p>
        <p class="product-price">{{StorageTitle}}{{product.storage}} </p>
      </div>
      <img :src="product.image" :alt="product.title" class="item-image">
    </li>
  <div class="paginatie">
      <span v-if="currentPage > 1">
        <button @click="previousPage" class="ButtonPage">Previous Page</button>
      </span>
  <p>Page {{ currentPage }} of {{ totalPages }}</p>
  <span v-if="currentPage < totalPages">
        <button @click="nextPage" class="ButtonPage">Next Page</button>
      </span>
</div>
</template>

<style>

</style>