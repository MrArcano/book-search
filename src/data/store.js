import { reactive } from "vue";

export const store = reactive({
  apiUrlBase: "https://openlibrary.org/search.json",
  authorToSearch: "",
  booksList: [],
  isLoading: false,
})