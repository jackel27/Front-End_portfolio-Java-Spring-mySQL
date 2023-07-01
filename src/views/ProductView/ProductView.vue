<template>
  <div class="product-view container mt-5">
    <h1>Products</h1>
    <div class="container">
      <form @submit.prevent="createProduct" class="row g-3">
        <div class="col-md-3">
          <input v-model="newProduct.name" type="text" placeholder="Product Name" required class="form-control"/>
        </div>
        <div class="col-md-2">
          <input v-model="newProduct.description" type="text" placeholder="Product Description" required class="form-control"/>
        </div>
        <div class="col-md-2">
          <input v-model="newProduct.price" type="text" placeholder="Product Price" required class="form-control"/>
        </div>
        <div class="col-md-3">
          <select v-model="newProduct.categoryId" required class="form-select">
            <option disabled value="">Please select a category</option>
            <option v-for="category in categories" :key="category.id" :value="category.id">
              {{ category.name }}
            </option>
          </select>
        </div>
        <div class="col-md-2">
          <button type="submit" class="btn btn-primary">Create Product</button>
        </div>
      </form>
    </div>
    <div class="container table-container">
      <table class="table table-dark table-striped">
        <thead>
        <tr>
          <th scope="col">Name</th>
          <th scope="col">Description</th>
          <th scope="col">Price</th>
        </tr>
        </thead>
        <tbody>
        <ProductCard v-for="product in products" :key="product.id" :product="product" />
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
import ProductCard from '@/components/ProductCard/ProductCard.vue'

export default {
  name: 'ProductView',
  components: {
    ProductCard
  },
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
    console.log(productResponse.data)
    this.products = productResponse.data
    const categoryResponse = await axios.get('http://localhost:8080/api/categories')
    console.log(categoryResponse.data)
    this.categories = categoryResponse.data
  },
  methods: {
    async createProduct () {
      const response = await axios.post('http://localhost:8080/api/products', {
        ...this.newProduct,
        category: this.categories.find(cat => cat.id === this.newProduct.categoryId)
      })
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
.table-container {
  max-height: 500px;
  padding-top: 14px;
  overflow-y: scroll;
}
.product {
  border: 1px solid #ccc;
  padding: 10px;
  margin: 10px;
}
</style>
