import { defineStore } from 'pinia'

export const useDataStore = defineStore('dataStore', {
  state: () => {
    return {
      tableItems: [],
      deletedRows: [],
      restoredRows: []
    }
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
  actions: {
    addTableItems(state, items) {
      state.tableItems = items;
    },
    clearDeletedRows(state) {
      state.deletedRows = []
    },
    clearRestoredRows(state) {
      state.restoredRows = []
    },
    setRestoredRows(state, rows) {
      state.restoredRows = rows
    },
    updateRow(state, updateData) {
      let rowToMutate = state.tableItems.find(el => el.id == updateData.id);
      let updatedRow = { id: rowToMutate.id, decision: rowToMutate.decision, ...updateData.row }
      Object.assign(rowToMutate, updatedRow)
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
                element['status'] = 'deleted'
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
                element['status'] = 'deleted'
              }
            }
          }
        });
      }
    }
  },
})
