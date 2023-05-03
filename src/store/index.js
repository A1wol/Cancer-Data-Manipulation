import { createStore } from 'vuex'

export default createStore({
  state: {
    tableItems: []
  },
  getters: {
    getTableItems() {
      return state.tableItems;
    }
  },
  mutations: {
    addTableItems(items) {
      state.tableItems = items;
    }
  },
  actions: {
  },
  modules: {
  }
})
