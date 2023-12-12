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
      Popularproducts: [
        {
          id: 1,
          title: 'Iphone 15',
          storage: '256gb',
          description:'Apple, 5G compatible, 48MP camera, Splash, water and dust resistant.',
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
          storage: '128gb',
          description:'Apple, 5G compatible, 48MP camera, Splash, water and dust resistant.',
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
          storage: '256gb',
          description:'Apple, 5G compatible, 48MP camera, Splash, water and dust resistant.',
          color: 'Yellow',
          imageLink: 'src/assets/iphone-14.webp',
          imageAlt: 'Iphone 14',
          price: 749,
          BTW: 749*0.21,
          Stock: 8
        }
      ]
    }
  }
})
</script>

<template>
  <HeaderComponent/>
  <div class="gallery">
  <CardComponent v-for="product in Popularproducts"
                 v-bind:key="product.id"
                 v-bind:product="product"
  />
  </div>
</template>

<style scoped>

</style>