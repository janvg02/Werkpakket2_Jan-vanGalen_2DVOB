<script>
import CardComponent from "@/components/CardComponent.vue";
import NavComponent from "@/components/NavComponent.vue";
import FooterComponent from "@/components/FooterComponent.vue";
import FilterComponent from "@/components/FilterComponent.vue";

export default {
  components: {CardComponent, NavComponent, FooterComponent,FilterComponent},
  data() {
  return {
    products: [
        {
      id: 1,
      title: 'Iphone 15',
      storage: 256,
      description:'Apple, 5G compatible, 48MP camera, Splash, water and dust resistant.',
      color: 'Kleur: Pink',
      imageLink: 'src/assets/iphone-15.webp',
      imageAlt: 'Iphone 15',
      price: '€' + 749,
      BTW: 'BTW: €' + 749*0.21,
      Stock: 10
    },
      {
        id: 2,
        title: 'Iphone 15 Plus',
        storage: 128,
        description:'Apple, 5G compatible, 48MP camera, Splash, water and dust resistant.',
        color: 'Kleur: Black',
        imageLink: 'src/assets/iphone-15-plus.webp',
        imageAlt: 'Iphone 15 Plus',
        price: '€' +999,
        BTW: 'BTW: €' + 999*0.21,
        Stock: 12
      },
      {
        id: 3,
        title: 'Iphone 14',
        storage: 256,
        description:'Apple, 5G compatible, 48MP camera, Splash, water and dust resistant.',
        color: 'Kleur: Yellow',
        imageLink: 'src/assets/iphone-14.webp',
        imageAlt: 'Iphone 14',
        price: '€' + 749,
        BTW: 'BTW: €' + 749*0.21,
        Stock: 8
      },
      {
        id: 4,
        title: 'Iphone 12',
        storage: 512,
        description:'Apple, 48MP camera, Splash, water and dust resistant.',
        imageLink: 'src/assets/iphone-12.webp',
        color: 'Kleur: White',
        imageAlt: 'Iphone 12',
        price: '€' + 649,
        BTW: 'BTW: €' + 649*0.21,
        Stock: 3
      },
      {
        id: 5,
        title: 'Iphone 12 Mini',
        storage: 256,
        description:'Apple, 48MP camera, Splash, water and dust resistant.',
        color: 'Kleur: Blue',
        imageLink: 'src/assets/iphone-12-mini.webp',
        imageAlt: 'Iphone 12 Mini',
        price: '€' + 599,
        BTW: 'BTW: €' + 599*0.21,
        Stock: 4
      },
      {
        id: 6,
        title: 'Iphone 13 Mini',
        storage: 128,
        description:'Apple, 5G compatible, 48MP camera, Splash, water and dust resistant.',
        color: 'Kleur: Midnight',
        imageLink: 'src/assets/iphone-13-mini.webp',
        imageAlt: 'Iphone 13 mini',
        price: '€'+ 649,
        BTW: 'BTW: €' + 649*0.21,
        Stock: 3
      },
      {
        id: 7,
        title: 'Iphone 15 Pro Max',
        storage: 256,
        description:'Apple, 5G compatible, 48MP camera, Splash, water and dust resistant.',
        color: 'Kleur: Natural Titanium',
        imageLink: 'src/assets/iphone-15-pro-max.webp',
        imageAlt: 'Iphone 15 Pro Max',
        price: '€' +1199,
        BTW: 'BTW: €' + 1199*0.21,
        Stock: 1
      },
      {
        id: 8,
        title: 'Iphone 15 Pro',
        storage: 128,
        description:'Apple, 5G compatible, 48MP camera, Splash, water and dust resistant.',
        color: 'Kleur: Black Titanium',
        imageLink: 'src/assets/iphone-15-pro.webp',
        imageAlt: 'Iphone 15 Pro',
        price: '€' + 999,
        BTW: 'BTW: €'+ 999*0.21,
        Stock: 3
      },
      {
        id: 9,
        title: 'Iphone 14 Plus',
        storage: 512,
        description:'Apple, 5G compatible, 48MP camera, Splash, water and dust resistant.',
        color: 'Kleur: Blue',
        imageLink: 'src/assets/iphone-14-plus.png',
        imageAlt: 'Iphone 14 Plus',
        price: '€' + 979,
        BTW: 'BTW: €' + 979*0.21,
        Stock: 5
      },
      {
        id: 10,
        title: 'Iphone 13',
        storage: 128,
        description:'Apple, 48MP camera, Splash, water and dust resistant.',
        color: 'Kleur: Midnight',
        imageLink: 'src/assets/iphone-13.webp',
        imageAlt: 'Iphone 13',
        price: '€' + 629,
        BTW: 'BTW: €' + 629*0.21,
        Stock: 2
      },
      {
        id: 11,
        title: 'Iphone SE (3th Gen)',
        storage: 128,
        description:'Apple, 48MP camera, Splash, water and dust resistant.',
        color: 'Kleur: Midnight',
        imageLink: 'src/assets/iphone-se.webp',
        imageAlt: 'Iphone SE',
        price: '€' + 429,
        BTW: 'BTW: €' + 429*0.21,
        Stock: 4
      },
      {
        id: 12,
        title: 'Iphone 14 Pro Max',
        storage: 256,
        description:'Apple, 5G compatible, 48MP camera, Splash, water and dust resistant.',
        color: 'Kleur: Deep Purple',
        imageLink: 'src/assets/iphone-14-pro-max.png',
        imageAlt: 'Iphone 14 Pro Max',
        price: '€' + 1099,
        BTW: 'BTW: €' + 1099*0.21,
        Stock: 1
      },
      {
        id: 13,
        title: 'Iphone 14 Pro',
        storage: 128,
        description:'Apple, 5G compatible, 48MP camera, Splash, water and dust resistant.',
        color: 'Kleur: Deep Purple',
        imageLink: 'src/assets/iphone-14-pro.png',
        imageAlt: 'Iphone 14 Pro',
        price: '€' + 899,
        BTW: 'BTW: €' + 899*0.21,
        Stock: 6
      },
      {
        id: 14,
        title: 'Iphone 14 (RED Edition)',
        storage: 128,
        description:'Apple, 5G compatible, 48MP camera, Splash, water and dust resistant.',
        color: 'Kleur: (Product)RED',
        imageLink: 'src/assets/iphone-14-red.png',
        imageAlt: 'Iphone 14 Red',
        price: '€' + 729,
        BTW: 'BTW: €' + 729*0.21,
        Stock: 4
      },
      {
        id: 15,
        title: 'Iphone 14 Plus (RED Edition)',
        storage: 256,
        description:'Apple, 5G compatible, 48MP camera, Splash, water and dust resistant.',
        color: 'Kleur: (Product)RED',
        imageLink: 'src/assets/iphone-14-red.png',
        imageAlt: 'Iphone 14 Red',
        price: '€' + 929,
        BTW: 'BTW: €' + 929*0.21,
        Stock: 7
      },
    ],
    MaxItems: 6,
    FirstPage: 1,
    PreviousButton:'Vorige',
    NextButton:'Volgende'
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
<FilterComponent/>
  <div class="gallery">
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