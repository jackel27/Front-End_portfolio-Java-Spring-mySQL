<template>
  <div class="category-view">
    <h1>Categories</h1>
    <div class="container">
      <form @submit.prevent="createCategory" class="row g-3">
        <div class="col-md-10">
          <input v-model="newCategory.name" type="text" placeholder="Category Name" required class="form-control"/>
        </div>
        <div class="col-md-2">
          <button type="submit" class="btn btn-primary">Create Category</button>
        </div>
      </form>
    </div>
    <div class="container table-container">
      <table class="table table-dark table-striped">
        <thead>
          <tr>
            <th scope="col">ID</th>
            <th scope="col">Name</th>
            <th scope="col">Products Count</th>
            <th scope="col">Actions</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="category in categories" :key="category.id">
            <td>{{ category.id }}</td>
            <td>{{ category.name }}</td>
            <td>{{ category.productsCount }}</td>
            <td>
              <button @click="editCategory(category.id)">Edit</button>
              <button @click="deleteCategory(category.id)">Delete</button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  name: 'CategoryView',
  data () {
    return {
      newCategory: {
        name: ''
      },
      categories: []
    }
  },
  async created () {
    this.getCategories()
  },
  methods: {
    async getCategories () {
      const response = await axios.get('http://localhost:8080/api/categories')
      this.categories = response.data
    },
    async createCategory () {
      await axios.post('http://localhost:8080/api/categories', this.newCategory)
      this.newCategory.name = ''
      this.getCategories()
    },
    async deleteCategory (id) {
      await axios.delete(`http://localhost:8080/api/categories/${id}`)
      this.getCategories()
    },
    editCategory (id) {
      // here you would probably navigate to a different view to edit the category, or open a modal dialog
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
.category {
  border: 1px solid #ccc;
  padding: 10px;
  margin: 10px;
}
</style>
