import { defineStore } from 'pinia'
import { sample } from 'underscore'
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
      this.deletedRows = [];
      if (deleteData.isRandom) {
        this.tableItems.forEach(element => {
          let randomRows = Array.from({ length: deleteData.rowQuantity }, () => Math.floor(Math.random() * this.tableItems.length));
          if (randomRows.includes(element.id)) {
            element['status'] = 'deleted'
            this.deletedRows.push(element)
            let { id, decision, status, ...rest } = element
            sample(Object.keys(rest), deleteData.propertyQuantity).forEach(el => element[el] = 0)
          }
        })
      }
      else {
        this.tableItems.forEach(element => {
          if (deleteData.rows.includes(element.id)) {
            element['status'] = 'deleted'
            this.deletedRows.push(element)
            let { id, decision, status, ...rest } = element
            sample(Object.keys(rest), deleteData.propertyQuantity).forEach(el => element[el] = 0)
          }
        });
      }
    }
  },
})
