<script>



export default{
  data(){
    return{
      OverzichtTitle: 'Ons assortiment',
      OverzichtSubTitle: 'Telefoons van hoge kwaliteit',
      TitlePrice:'Prijs',
      Price1:'< € 549',
      Price2:'€ 549 - € 799',
      Price3:'> € 799',
      TitleStorage: 'Opslag',
      Storage1:'128 GB',
      Storage2:'256 GB',
      Storage3:'512 GB'
    }
  }
}
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
            <input type="checkbox" id="cheapest" name="cheapest" />
            <label for="cheapest">{{ Price1 }}</label>
          </div>
          <div class="filter-text">
            <input type="checkbox" id="cheap" name="cheap" />
            <label for="cheap">{{ Price2 }}</label>
          </div>
          <div class="filter-text">
            <input type="checkbox" id="expensive" name="expensive" />
            <label for="expensive">{{ Price3 }}</label>
          </div>
        </fieldset>
      </div>
      <div class="filter-item">
        <fieldset class="filter">
          <legend>{{ TitleStorage }}</legend>
          <div class="filter-text">
            <input  type="checkbox" id="128" name="128" />
            <label for="128">{{ Storage1 }}</label>
          </div>
          <div class="filter-text">
            <input  type="checkbox" id="256" name="256" />
            <label for="256">{{ Storage2 }}</label>
          </div>
          <div class="filter-text">
            <input  type="checkbox" id="512" name="512" />
            <label for="512">{{ Storage3 }}</label>
          </div>
        </fieldset>
      </div>
    </div>
  </div>
</template>

<style scoped>

</style>