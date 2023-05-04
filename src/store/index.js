import { createStore } from 'vuex'

export default createStore({
  state: {
    tableItems: [],
    deletedRows: []
  },
  getters: {
    getTableItems(state) {
      return state.tableItems;
    },
    getDeletedRows(state) {
      return state.deletedRows;
    }
  },
  mutations: {
    addTableItems(state, items) {
      state.tableItems = items;
    },
    deleteTableRows(state, deleteData) {
      state.deletedRows = []
      if (deleteData.isRandom) {
        state.tableItems.forEach(element => {
          let randomRows = Array.from({ length: deleteData.rowQuantity }, () => Math.floor(Math.random() * state.tableItems.length));
          if (randomRows.includes(element.id)) {
            state.deletedRows.push(element)
            for (let i in element) {
              if (i !== 'id') {
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
              if (i !== 'id') {
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
