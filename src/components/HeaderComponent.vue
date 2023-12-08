<script setup>
export default {
  data() {
    return {
      mainTitle: "PhoneLab",
      subTitle: "The Phone Reseller",
      HeadingTitle: "Welcome",
      HeadingText:"Need a new phone? We are the Apple reseller you are looking for!",
      ButtonText:"Bekijk ons assortiment",
      ProductTitle:"Producten in de kijker"
    }
  }
</script>

<template>
  <header class="start-header">
    <div class="header-banner">
      <h1 class="header-name">PhoneLab</h1>
      <p class="sub-name">The phone reseller</p>
      <h1 class="main-heading">Welcome</h1>
      <h3 class="sub-heading">Need a new phone? We are the Apple reseller you are looking for!</h3>
      <a href="overzicht.html"> <button class="header-button" >Bekijk ons assortiment</button></a>
      <h2 class="product-main">Producten in de kijker</h2>
      <a class="arrow-down"> <i class="fa-solid fa-angles-down fa-2xl"></i></a>
    </div>
  </header>
</template>

<style scoped>

</style>