import { createStore } from 'vuex'

export default createStore({
  state: {
    tableItems: [],
    deletedRows: [],
    restoredRows: []
  },
  getters: {
    getTableItems(state) {
      return state.tableItems;
    },
    getDeletedRows(state) {
      return state.deletedRows;
    },
    getRestoredRows(state) {
      return state.restoredRows;
    }
  },
  mutations: {
    addTableItems(state, items) {
      state.tableItems = items;
    },
    clearDeletedRows(state) {
      state.deletedRows = []
    },
    setRestoredRows(state, rows) {
      state.restoredRows = rows
    },
    deleteTableRows(state, deleteData) {
      state.deletedRows = []
      if (deleteData.isRandom) {
        state.tableItems.forEach(element => {
          let randomRows = Array.from({ length: deleteData.rowQuantity }, () => Math.floor(Math.random() * state.tableItems.length));
          if (randomRows.includes(element.id)) {
            state.deletedRows.push(element)
            for (let i in element) {
              if (i !== 'id' && i !== 'decision') {
                element[i] = 0
              }
            }
          }
        })
      }
      else {
        state.tableItems.forEach(element => {
          if (deleteData.rows.includes(element.id)) {
            state.deletedRows.push(element)
            for (let i in element) {
              if (i !== 'id' && i !== 'decision') {
                element[i] = 0
              }
            }
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
