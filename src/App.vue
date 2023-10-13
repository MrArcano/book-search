<script>
import Main from './components/Main.vue';
import SearchBar from './components/SearchBar.vue';
import Loader from './components/Loader.vue'

import { store } from "./data/store"

import axios from "axios"

export default {
  name: "App",
  components:{
    Main,
    SearchBar,
    Loader
  },
  data() {
    return {
      store,
      text:"Inserire il nome di un autore e premere invio"
    }
  },
  methods: {
    getAPI(){
      store.isLoading = true;
      axios.get(store.apiUrlBase,{
        params:{
          author: store.authorToSearch
        }
      })
      .then((res) => {
        store.booksList = res.data.docs;
        store.isLoading = false;

        if (res.data.numFound == 0){
          this.text = "Nessun libro trovare per: " + store.authorToSearch;
        }
      })
      .catch((err) => {
        console.log(err);
        
        store.isLoading = false;
      })
    }
  },
  mounted() {
  },
}
</script>

<template>
  <div class="container">
    <h1 class="text-center">Motore di ricerca libri</h1>
    <SearchBar @startSearch="getAPI" />
    <Loader v-if="store.isLoading" />
    <div v-else>
      <Main v-if="store.booksList.length > 0" />
      <p v-else>{{ text }}</p>
    </div>
  </div>
</template>

<style lang="scss">
  @use "./main.scss"
</style>
