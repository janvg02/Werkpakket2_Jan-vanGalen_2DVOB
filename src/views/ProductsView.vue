<script>
import CardComponent from "@/components/CardComponent.vue";

export default {
    props: {
      products: []
    }
}
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
  <CardComponent v-for="product in products"
                 v-bind:key="product.id"
                 v-bind:product="product"
  />
</template>

<style scoped>

</style>