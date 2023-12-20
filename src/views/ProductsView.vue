<script>
import CardComponent from "@/components/CardComponent.vue";
import FilterComponent from "@/components/FilterComponent.vue";
import { useProductsStore } from "@/Stores/Products";

export default {
  components: { CardComponent, FilterComponent },
  data() {
    return {
      StorageTitle: "Opslag (GB):",
      DetailButton: "Details",
      PriceTitle: "€",
      productsStore: useProductsStore(),
      itemsPerPage: 8,
      currentPage: 1,
    };
  },
  computed: {
    allProducts() {
      return this.productsStore.getAllProducts();
    },
    totalPages() {
      return Math.ceil(this.allProducts.length / this.itemsPerPage);
    },
    paginatedProducts() {
      const start = (this.currentPage - 1) * this.itemsPerPage;
      const end = start + this.itemsPerPage;
      return this.allProducts.slice(start, end);
    },
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
  goToDetailPage(id){
    this.store.selectedProduct = id;
    this.$router.push('ProductDetail');
  }



};
</script>
<template>
  <main>
    <FilterComponent />
    <ul id="gallery">
      <CardComponent v-for="product in paginatedProducts"
                            @click="goToDetailPage(product.id)"
                            v-bind:key="product.id"
                            v-bind:product="product"/>
    </ul>
    <div class="paginatie">
      <span v-if="currentPage > 1">
        <button @click="previousPage" class="ButtonPage">Previous Page</button>
      </span>
      <p>Page {{ currentPage }} of {{ totalPages }}</p>
      <span v-if="currentPage < totalPages">
        <button @click="nextPage" class="ButtonPage">Next Page</button>
      </span>

    </div>
  </main>
</template>

<style scoped>

</style>