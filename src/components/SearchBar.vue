<script>
import { store } from '../data/store';

export default {
  name: "SearchBar",
  data() {
    return {
      store
    }
  },
}
</script>

<template>
  <div class="input-group my-3">
    <input @keyup.enter="$emit('startSearch')" v-model.trim="store.authorToSearch" type="text" class="form-control" placeholder="Inserisci autore" aria-label="Recipient's username" aria-describedby="button-addon2">
    <button @click="$emit('startSearch')" class="btn btn-outline-secondary" type="button" id="button-addon2">Cerca</button>
  </div>
</template>


<style>

</style>