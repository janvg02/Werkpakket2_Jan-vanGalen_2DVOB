<script>
import CardComponent from "@/components/CardComponent.vue";
import { useProductsStore } from "@/Stores/Products";

export default {
  components: { CardComponent },
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



};
</script>
<template>
  <main>
    <ul id="gallery">
      <CardComponent/>
    </ul>
  </main>
</template>

<style scoped>

</style>