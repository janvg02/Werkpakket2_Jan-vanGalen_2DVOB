<script>
export default {
  props: {
    product: Object
  }
}
</script>

<template>
  <main class="detail-main">
    <div class="detail-iphone">
      <div class="detail-img-big">
        <img :src="product.imageLink" :alt="product.imageAlt">
      </div>
      <div class="detail-specificaties">
        <ul class="detail-list">
          <li class="detail-list-item"><h1>{{product.name}}</h1></li>
          <li class="detail-list-item"><h2>Apple</h2></li>
          <li class="detail-list-item"><h3>{{product.description}}</h3></li>
        </ul>
      </div>
    </div>
  </main>
</template>

<style scoped>

</style>