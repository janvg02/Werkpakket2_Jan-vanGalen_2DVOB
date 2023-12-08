<script setup>
import HeaderComponent from "@/components/HeaderComponent.vue";
import FooterComponent from "@/components/FooterComponent.vue";
</script>

<template>
<HeaderComponent/>
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
  <main class="start-main">
    <div class="product">
      <h3 class="product-price"><span class="price-sale">€1.299 </span><br>€999</h3>
      <img src="./assets/iphone-15-plus.webp" alt="15 plus" class="product-pro">
      <p class="product-name">Iphone 15 plus</p>
      <p class="product-name">Apple</p>
      <p class="product-name">256 GB</p>
    </div>
    <div class="product">
      <h3 class="product-price"><span class="price-sale">€999 </span><br>€749</h3>
      <img src="./assets/iphone-15.webp" alt="15" class="product-pro">
      <p class="product-name">Iphone 15</p>
      <p class="product-name">Apple</p>
      <p class="product-name">128 GB</p>
    </div>
  </main>
  <FooterComponent/>
</template>

<style scoped>
.start-main{
  padding-bottom: 10%;
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  .product{
    @include textStyles;
    .product-name{
      font-family: $font-josefinSans;
      font-size: x-large;
      font-weight: 700;
      color: $color-light;
    }
    .product-pro{
      width: 40%;
      height: auto;
      padding: 20px;
    }
    .product-price{
      color: $color-light;
      font-family: $font-nunito;
      font-size: x-large;
      span{
        text-decoration: line-through;
        color: $color-secondary;
      }
    }
  }
}
</style>
