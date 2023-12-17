<script>
import { inject, ref, computed, watch} from "vue";

export default {
  setup() {
    const products = inject("productsData", []);
    const appliedFilters = ref({
      cheapest: false,
      cheap: false,
      expensive: false,
      "128": false,
      "256": false,
      "512": false,
    });

    const filteredProducts = computed(() => {
      return products.filter((product) => {
        const priceFilter =
            (!appliedFilters.cheapest && !appliedFilters.cheap && !appliedFilters.expensive) ||
            (appliedFilters.cheapest && product.price < 529) ||
            (appliedFilters.cheap && product.price >= 529 && product.price <= 749) ||
            (appliedFilters.expensive && product.price > 749);

        const storageFilter =
            (!appliedFilters["128"] && !appliedFilters["256"] && !appliedFilters["512"]) ||
            (appliedFilters["128"] && product.storage === 128) ||
            (appliedFilters["256"] && product.storage === 256) ||
            (appliedFilters["512"] && product.storage === 512);

        return priceFilter && storageFilter;
      });
    });

    return {
      appliedFilters,
      products: filteredProducts,
      OverzichtTitle: "Ons Assortiment",
      OverzichtSubTitle: "Telefoons van hoge kwaliteit",
      TitlePrice: "Prijsklasse",
      TitleStorage: "Opslag",
      Price1: "Minder dan 529",
      Price2: "529 - 749",
      Price3: "Meer dan 749",
      Storage1: "128 GB",
      Storage2: "256 GB",
      Storage3: "512 GB",
    };
  },
};
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
            <input v-model="appliedFilters.cheapest" type="checkbox" id="cheapest" name="cheapest" />
            <label for="cheapest">{{ Price1 }}</label>
          </div>
          <div class="filter-text">
            <input v-model="appliedFilters.cheap" type="checkbox" id="cheap" name="cheap" />
            <label for="cheap">{{ Price2 }}</label>
          </div>
          <div class="filter-text">
            <input v-model="appliedFilters.expensive" type="checkbox" id="expensive" name="expensive" />
            <label for="expensive">{{ Price3 }}</label>
          </div>
        </fieldset>
      </div>
      <div class="filter-item">
        <fieldset class="filter">
          <legend>{{ TitleStorage }}</legend>
          <div class="filter-text">
            <input v-model="appliedFilters['128']" type="checkbox" id="128" name="128" />
            <label for="128">{{ Storage1 }}</label>
          </div>
          <div class="filter-text">
            <input v-model="appliedFilters['256']" type="checkbox" id="256" name="256" />
            <label for="256">{{ Storage2 }}</label>
          </div>
          <div class="filter-text">
            <input v-model="appliedFilters['512']" type="checkbox" id="512" name="512" />
            <label for="512">{{ Storage3 }}</label>
          </div>
        </fieldset>
      </div>
    </div>
  </div>
</template>

<style scoped>

</style>