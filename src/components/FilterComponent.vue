<script>
export default {
  data() {
    return {
      OverzichtTitle: 'Ons Assortiment',
      OverzichtSubTitle: 'Telefoons van hoge kwaliteit',
      TitlePrice: 'Prijsklasse',
      TitleStorage: 'Opslag'
    }
  },
}
</script>

<template>
  <div class="top-overzicht-main">
    <h1 class="top-overzicht-titel">{{ OverzichtTitle }}</h1>
    <p class="top-overzicht-text">{{ OverzichtSubTitle }}</p>
    <div class="filters">
      <div class="filter-item">
        <fieldset class="filter">
          <legend>{{TitlePrice}}</legend>
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
          <legend>{{TitleStorage}}</legend>
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
</template>

<style scoped>

</style>