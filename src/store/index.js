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
    }
  },
  actions: {
    addTableItems(context, payload) {
      context.commit('addTableItems', payload);
    }
  },
  modules: {
  }
})
