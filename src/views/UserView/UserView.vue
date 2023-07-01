<template>
  <div class="user-view">
    <h1>Users</h1>
    <div v-for="user in users" :key="user.id" class="user">
      <h2>{{ user.username }}</h2>
      <p>Email: {{ user.email }}</p>
    </div>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  name: 'UserView',
  data () {
    return {
      users: []
    }
  },
  async created () {
    const response = await axios.get('http://localhost:8080/api/users')
    this.users = response.data
  }
}
</script>

<style scoped>
.user {
  border: 1px solid #ccc;
  padding: 10px;
  margin: 10px;
}
</style>
