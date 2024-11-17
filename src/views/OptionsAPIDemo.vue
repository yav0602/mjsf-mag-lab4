<script lang="ts">
export default {
  data() {
    return {
      products: []
    }
  },
  methods: {
    fetchProducts() {
      this.products = this.$serviceProvider.getProductService().getAllProducts()
    }
  }
}
</script>

<template>
  <div>
    <h2>Options API Example</h2>
    <button @click="fetchProducts">Отримати продукти</button>
    <ul>
      <li v-for="product in products" :key="product.id">{{ product.title }}</li>
    </ul>
  </div>
</template>
