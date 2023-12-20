<script>
import CardComponent from "@/components/CardComponent.vue";
import FilterComponent from "@/components/FilterComponent.vue";
import {useProductsStore} from "@/Stores/Products";

export default {
  components: {CardComponent,FilterComponent},
  data() {
    return {
      StorageTitle: 'Opslag (GB):',
      DetailButton: 'Details',
      PriceTitle: '€',
      productsStore: useProductsStore(),

    }
  },

  computed: {
    allProducts() {return this.productsStore.getAllProducts()}
  },
};
</script>
<template>
  <FilterComponent/>
    <CardComponent/>
</template>

<style scoped>

</style>