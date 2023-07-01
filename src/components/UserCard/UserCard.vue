<template>
  <div class="user">
    <h2><span>username: </span>{{ user.username }}</h2>
    <p><span>password:  </span>{{ user.password }}</p>
  </div>
</template>

<script>
export default {
  name: 'UserCard',
  props: {
    user: {
      type: Object,
      required: true
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
</style>
