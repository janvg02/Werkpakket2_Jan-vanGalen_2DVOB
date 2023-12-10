<script>
import {defineComponent} from "vue";
import CardComponent from "@/components/CardComponent.vue";
import HeaderComponent from "@/components/HeaderComponent.vue";
import NavComponent from "@/components/NavComponent.vue";
import FooterComponent from "@/components/FooterComponent.vue";
export default defineComponent({
  components: {CardComponent, HeaderComponent, NavComponent, FooterComponent},
  data() {
    return {
      products: [
        {
          id: 1,
          title: 'Iphone 15',
          description:'Apple, 256gb, 5G compatible, 48MP camera, Splash, water and dust resistant.',
          color: 'Pink',
          imageLink: 'src/assets/iphone-15.webp',
          imageAlt: 'Iphone 15',
          price: 749,
          BTW: 749*0.21,
          Stock: 5
        },
        {
          id: 2,
          title: 'Iphone 15 Plus',
          description:'Apple, 128gb, 5G compatible, 48MP camera, Splash, water and dust resistant.',
          color: 'Black',
          imageLink: 'src/assets/iphone-15-plus.webp',
          imageAlt: 'Iphone 15 Plus',
          price: 999,
          BTW: 999*0.21,
          Stock: 12
        },
        {
          id: 3,
          title: 'Iphone 14',
          description:'Apple, 256gb, 5G compatible, 48MP camera, Splash, water and dust resistant.',
          imageLink: 'src/assets/iphone-14.webp',
          imageAlt: 'Iphone 14',
          price: 749,
          BTW: 749*0.21,
          Stock: 8
        },
      ]
    }
  }
})
</script>

<template>
  <HeaderComponent/>
      <CardComponent v-for="product in products"
                     v-bind:key="product.id"
                     v-bind:product="product"
      />
</template>

<style scoped>

</style>