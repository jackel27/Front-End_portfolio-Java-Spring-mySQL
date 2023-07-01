<template>
  <div class="user-view container mt-5">
    <h1>Users</h1>
    <form @submit.prevent="createUser" class="row g-3 mb-5">
      <div class="col-md-5">
        <input v-model="newUser.username" type="text" placeholder="User Name" required class="form-control"/>
      </div>
      <div class="col-md-5">
        <input v-model="newUser.password" type="password" placeholder="User Password" required class="form-control"/>
      </div>
      <div class="col-md-2">
        <button type="submit" class="btn btn-primary w-100">Create User</button>
      </div>
    </form>
    <div class="table-container mt-3">
      <table class="table table-dark table-striped">
        <thead>
          <tr>
            <th scope="col">id</th>
            <th scope="col">Username</th>
            <th scope="col">Password</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="user in users" :key="user.id">
            <td>{{ user.id }}</td>
            <td>{{ user.username }}</td>
            <td>{{ user.password }}</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  name: 'UserView',
  data () {
    return {
      newUser: {
        username: '',
        password: ''
      },
      users: []
    }
  },
  async created () {
    const userResponse = await axios.get('http://localhost:8080/api/users')
    this.users = userResponse.data
  },
  methods: {
    async createUser () {
      const response = await axios.post('http://localhost:8080/api/users', this.newUser)
      this.users.push(response.data)
      this.newUser = {
        username: '',
        password: ''
      }
    }
  }
}
</script>

<style scoped>
.user {
  border: 1px solid #ccc;
  padding: 10px;
  margin: 10px;
}

.table-container {
  padding-top: 0px;
}
</style>
