<template>
    <tr>
      <td>{{ product.name }}</td>
      <td>{{ product.description }}</td>
      <td>{{ product.price }}</td>
    </tr>
</template>

<script>
export default {
  name: 'ProductCard',
  props: {
    product: {
      type: Object,
      required: true
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
