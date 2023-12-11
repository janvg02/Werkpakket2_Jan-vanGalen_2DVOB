<script>

import CardComponent from "@/components/CardComponent.vue";

export default{
  components:{CardComponent},
  props: {
    products: Object
  }
}
</script>

<template>
  <CardComponent v-for="product in products"
                 v-bind:key="product.id"
                 v-bind:product="product"
  />
</template>

<style scoped>

</style>