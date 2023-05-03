import { createRouter, createWebHashHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    name: 'data-table',
    component: function () {
      return import('../views/dataTableView.vue')
    }
  },
  {
    path: '/graph',
    name: 'graph',
    component: function () {
      return import('../views/graphView.vue')
    }
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
