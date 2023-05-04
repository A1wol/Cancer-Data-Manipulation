import { createStore } from 'vuex'

export default createStore({
  state: {
    tableItems: []
  },
  getters: {
    getTableItems(state) {
      return state.tableItems;
    }
  },
  mutations: {
    addTableItems(state, items) {
      state.tableItems = items;
    },
    deleteTableRows(state, deleteData) {
      if (deleteData.isRandom) {
        state.tableItems.forEach(element => {
          let randomRows = Array.from({ length: deleteData.rowQuantity }, () => Math.floor(Math.random() * state.tableItems.length));
          if (randomRows.includes(element.id)) {
            for (let i in element) {
              element[i] = null
            }
          }
        })
      }
      else {
        state.tableItems.forEach(element => {
          for (let i in element) {
            element[i] = null
          }
        });
      }
    }
  },
  actions: {
  },
  modules: {
  }
})
