<script>
export default {
  data() {
    return {
      mainTitle: "PhoneLab",
      subTitle: "The Phone Reseller",
      HeadingTitle: "Welcome",
      HeadingText: "Need a new phone? We are the Apple reseller you are looking for!",
      ButtonText: "Bekijk ons assortiment",
      ProductTitle: "Producten in de kijker"
    }
  },
}
</script>

<template>
  <header class="start-header">
    <div class="header-banner">
      <h1 class="header-name">{{ mainTitle }}</h1>
      <p class="sub-name">{{ subTitle }}</p>
      <h1 class="main-heading">{{ HeadingTitle }}</h1>
      <h3 class="sub-heading">{{HeadingText}}</h3>
      <router-link to="/Products"><button class="header-button" >{{ButtonText}}</button></router-link>
      <h2 class="product-main">{{ProductTitle}}</h2>
      <a class="arrow-down"> <i class="fa-solid fa-angles-down fa-2xl"></i></a>
    </div>
  </header>
</template>

<style scoped>

</style>