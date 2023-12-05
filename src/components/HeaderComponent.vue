<script setup>

</script>

<template>
  <nav class="start-nav">
    <ul class="nav-components">
      <li><a href="#" class="logo"><i class="fa-solid fa-mobile fa-2xl"></i> </a></li>
      <li><a href="#" class="home">Home</a></li>
      <li><a href="overzicht.html">Assortiment</a></li>
      <li><a href="login.html">Log in</a></li>
      <li id="cart"><a href="winkelmand.html"><i class="fa-solid fa-cart-shopping fa-2xl"></i></a></li>
    </ul>
  </nav>
</template>

<style scoped>
.start-nav .nav-components, .login-nav .nav-components, .overzicht-nav .nav-components, .detail-nav .nav-components {
  display: flex;
  flex-direction: row;
  color: #f9F9F9;
  list-style-type: none;
  font-family: "Nunito", sans-serif;
}
.start-nav .nav-components li, .login-nav .nav-components li, .overzicht-nav .nav-components li, .detail-nav .nav-components li {
  margin: 10px 30px;
}
.start-nav .nav-components li .logo, .login-nav .nav-components li .logo, .overzicht-nav .nav-components li .logo, .detail-nav .nav-components li .logo {
  color: #3b83bd;
}
.start-nav .nav-components li a, .login-nav .nav-components li a, .overzicht-nav .nav-components li a, .detail-nav .nav-components li a {
  text-decoration: none;
  width: 20px;
  height: auto;
  padding: 10px;
  color: #f9F9F9;
}
.start-nav .nav-components li a:hover, .login-nav .nav-components li a:hover, .overzicht-nav .nav-components li a:hover, .detail-nav .nav-components li a:hover {
  color: #3b83bd;
  background-color: #bbb;
  border-radius: 2px;
  transition: all 0.4s;
}
</style>