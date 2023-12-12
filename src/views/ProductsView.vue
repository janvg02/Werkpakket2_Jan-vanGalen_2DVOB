<script>
import CardComponent from "@/components/CardComponent.vue";
import {defineComponent} from "vue";
import NavComponent from "@/components/NavComponent.vue";
import FooterComponent from "@/components/FooterComponent.vue";
import FilterComponent from "@/components/FilterComponent.vue";

export default defineComponent({
  components: {CardComponent, NavComponent, FooterComponent,FilterComponent},
  data() {
    return {
      products: [
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
        },
        {
          id: 4,
          title: 'Iphone 12',
          storage: '512gb',
          description:'Apple, 48MP camera, Splash, water and dust resistant.',
          imageLink: 'src/assets/iphone-12.webp',
          color: 'White',
          imageAlt: 'Iphone 12',
          price: 649,
          BTW: 649*0.21,
          Stock: 3
        },
        {
          id: 5,
          title: 'Iphone 12 Mini',
          storage: '256gb',
          description:'Apple, 48MP camera, Splash, water and dust resistant.',
          color: 'Blue',
          imageLink: 'src/assets/iphone-12-mini.webp',
          imageAlt: 'Iphone 12 Mini',
          price: 599,
          BTW: 599*0.21,
          Stock: 4
        },
        {
          id: 6,
          title: 'Iphone 13 Mini',
          storage: '128gb',
          description:'Apple, 5G compatible, 48MP camera, Splash, water and dust resistant.',
          color: 'Midnight',
          imageLink: 'src/assets/iphone-13-mini.webp',
          imageAlt: 'Iphone 13 mini',
          price: 649,
          BTW: 649*0.21,
          Stock: 3
        },
        {
          id: 7,
          title: 'Iphone 15 Pro Max',
          storage: '256gb',
          description:'Apple, 5G compatible, 48MP camera, Splash, water and dust resistant.',
          color: 'Natural Titanium',
          imageLink: 'src/assets/iphone-15-pro-max.webp',
          imageAlt: 'Iphone 15 Pro Max',
          price: 1199,
          BTW: 1199*0.21,
          Stock: 1
        },
        {
          id: 8,
          title: 'Iphone 15 Pro',
          storage: '128gb',
          description:'Apple, 128gb, 5G compatible, 48MP camera, Splash, water and dust resistant.',
          color: 'Black Titanium',
          imageLink: 'src/assets/iphone-15-pro.webp',
          imageAlt: 'Iphone 15 Pro',
          price: 999,
          BTW: 999*0.21,
          Stock: 3
        },
        {
          id: 9,
          title: 'Iphone 14 Plus',
          storage: '512gb',
          description:'Apple, 5G compatible, 48MP camera, Splash, water and dust resistant.',
          color: 'Blue',
          imageLink: 'src/assets/iphone-14-plus.png',
          imageAlt: 'Iphone 14 Plus',
          price: 979,
          BTW: 979*0.21,
          Stock: 5
        },
      ]
    }
  }
})
</script>

<template>
<FilterComponent/>
  <div class="gallery">
    <CardComponent v-for="product in products"
                   v-bind:key="product.id"
                   v-bind:product="product"
    />
  </div>
</template>

<style scoped>

</style>