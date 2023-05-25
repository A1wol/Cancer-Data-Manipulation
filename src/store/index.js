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
    addTableItems(items) {
      this.tableItems = items;
    },
    clearDeletedRows() {
      this.deletedRows = []
    },
    clearRestoredRows() {
      this.restoredRows = []
    },
    setRestoredRows(rows) {
      this.restoredRows = rows
    },
    updateRow(updateData) {
      let rowToMutate = this.tableItems.find(el => el.id == updateData.id);
      let updatedRow = { id: rowToMutate.id, decision: rowToMutate.decision, ...updateData.row }
      Object.assign(rowToMutate, updatedRow)
    },
    deleteTableRows(deleteData) {
      this.deletedRows = []
      if (deleteData.isRandom) {
        this.tableItems.forEach(element => {
          let randomRows = Array.from({ length: deleteData.rowQuantity }, () => Math.floor(Math.random() * this.tableItems.length));
          if (randomRows.includes(element.id)) {
            this.deletedRows.push(element)
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
        this.tableItems.forEach(element => {
          if (deleteData.rows.includes(element.id)) {
            this.deletedRows.push(element)
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
