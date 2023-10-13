<script>
import { store } from '../data/store';

export default {
  name: "Main",
  data() {
    return {
      store
    }
  },
}
</script>

<template>
  <table class="table">
  <thead>
    <tr>
      <th scope="col">Autori</th>
      <th scope="col">Primo Editore</th>
      <th scope="col">Primo anno di pubblicazione</th>
      <th scope="col">ISBN</th>
    </tr>
  </thead>
  <tbody>
    <tr v-for="book in store.booksList" :key="book.key">
      <td>{{ book.author_name.join(" - ") }}</td>
      <td>{{ book.publisher[0] }}</td>
      <td>{{ book.first_publish_year }}</td>
      <td>{{ book.isbn ? book.isbn[0] : "-"}}</td>
    </tr>
  </tbody>
</table>
</template>

<style>

</style>