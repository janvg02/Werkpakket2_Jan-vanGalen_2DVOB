<script>
import CardComponent from "@/components/CardComponent.vue";
import {defineComponent} from "vue";
import HeaderComponent from "@/components/HeaderComponent.vue";
import NavComponent from "@/components/NavComponent.vue";
import FooterComponent from "@/components/FooterComponent.vue";
import FilterComponent from "@/components/FilterComponent.vue";

export default defineComponent({
  components: {CardComponent, HeaderComponent, NavComponent, FooterComponent,FilterComponent},
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
          description:'Apple, 512gb, 48MP camera, Splash, water and dust resistant.',
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
          description:'Apple, 256gb,48MP camera, Splash, water and dust resistant.',
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
          description:'Apple, 128gb, 5G compatible, 48MP camera, Splash, water and dust resistant.',
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
          description:'Apple, 256gb, 5G compatible, 48MP camera, Splash, water and dust resistant.',
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
          description:'Apple, 512gb, 5G compatible, 48MP camera, Splash, water and dust resistant.',
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
  <div class="top-overzicht-main">
    <h1 class="top-overzicht-titel">Ons assortiment</h1>
    <p class="top-overzicht-text">Telefoons van hoge kwaliteit</p>
    <div class="filters">
      <div class="filter-item">
        <fieldset class="filter">
          <legend>Prijsklasse</legend>
          <div class="filter-text">
            <input type="checkbox" id="cheap" name="cheap"  />
            <label for="cheap">529.99 - 749.99</label>
          </div>

          <div class="filter-text">
            <input type="checkbox" id="expensive" name="expensive" />
            <label for="expensive">> 749.99</label>
          </div>
        </fieldset>
      </div>
      <div class="filter-item">
        <fieldset class="filter">
          <legend>Opslag</legend>
          <div class="filter-text">
            <input type="checkbox" id="64" name="64"  />
            <label for="64">64gb</label>
          </div>

          <div class="filter-text">
            <input type="checkbox" id="128" name="128" />
            <label for="128">128gb</label>
          </div>
          <div class="filter-text">
            <input type="checkbox" id="256" name="256" />
            <label for="256">256gb</label>
          </div>
        </fieldset>
      </div>
    </div>
  </div>
  <div class="gallery">
    <CardComponent v-for="product in products"
                   v-bind:key="product.id"
                   v-bind:product="product"
    />
  </div>
</template>

<style scoped>

</style>