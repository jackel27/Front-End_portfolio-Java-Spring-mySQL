<template>
  <div class="category-view">
    <h1>Categories</h1>
    <div v-for="category in categories" :key="category.id" class="category">
      <h2>{{ category.name }}</h2>
    </div>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  name: 'CategoryView',
  data () {
    return {
      categories: []
    }
  },
  async created () {
    const response = await axios.get('http://localhost:8080/api/categories')
    this.categories = response.data
  }
}
</script>

<style scoped>
.category {
  border: 1px solid #ccc;
  padding: 10px;
  margin: 10px;
}
</style>
