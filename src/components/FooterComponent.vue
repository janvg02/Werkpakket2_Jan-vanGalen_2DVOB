<script setup>

</script>

<template>
  <footer class="start-footer">
    <ul class="start-gegevenslijst">
      <li class="start-gegeven">Jan van Galen</li>
      <li class="start-gegeven">janvg02@gmail.com</li>
      <li class="start-gegeven">PhoneLab</li>
    </ul>
    <ul class="start-adres">
      <li class="start-adres">Elfde-liniestraat 22</li>
      <li class="start-adres">3500</li>
      <li class="start-adres">Hasselt</li>
    </ul>
  </footer>
</template>

<style scoped>

.start-footer {
  padding: 5%;
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
}
.start-footer .start-gegevenslijst, .start-footer .start-adres {
  font-family: "Josefin Sans", sans-serif;
  font-size: large;
  list-style-type: none;
  letter-spacing: 2px;
  font-variant: all-small-caps;
  text-align: center;
  color: #f9F9F9;
}
</style>