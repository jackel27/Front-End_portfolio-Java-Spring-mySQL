<template>
  <div class="product-view">
    <h1>Products</h1>
    <form @submit.prevent="createProduct">
      <input v-model="newProduct.name" type="text" placeholder="Product Name" required/>
      <input v-model="newProduct.description" type="text" placeholder="Product Description" required/>
      <input v-model="newProduct.price" type="double" placeholder="Product Price" required/>
      <select v-model="newProduct.categoryId" required>
        <option disabled value="">Please select a category</option>
        <option v-for="category in categories" :key="category.id" :value="category.id">
          {{ category.name }}
        </option>
      </select>
      <button type="submit">Create Product</button>
    </form>
    <div v-for="product in products" :key="product.id" class="product">
      <h2>{{ product.name }}</h2>
      <p>{{ product.description }}</p>
      <p>{{ product.price }}</p>
    </div>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  name: 'ProductView',
  data () {
    return {
      newProduct: {
        name: '',
        description: '',
        price: '',
        categoryId: ''
      },
      products: [],
      categories: []
    }
  },
  async created () {
    const productResponse = await axios.get('http://localhost:8080/api/products')
    this.products = productResponse.data
    const categoryResponse = await axios.get('http://localhost:8080/api/categories')
    this.categories = categoryResponse.data
  },
  methods: {
    async createProduct () {
      const response = await axios.post('http://localhost:8080/api/products', this.newProduct)
      this.products.push(response.data)
      this.newProduct = {
        name: '',
        description: '',
        price: '',
        categoryId: ''
      }
    }
  }
}
</script>

<style scoped>
.product {
  border: 1px solid #ccc;
  padding: 10px;
  margin: 10px;
}
</style>
