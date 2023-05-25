<template>
  <v-app app>
    <v-layout>
      <v-navigation-drawer expand-on-hover rail>
        <v-list>
          <v-list-item>
            <v-img :src="logoUR"></v-img>
          </v-list-item>
        </v-list>

        <v-divider></v-divider>

        <v-list density="compact" nav>
          <v-list-item prepend-icon="mdi-table" title="Data Table" @click="router.push('/')"></v-list-item>
          <v-list-item prepend-icon="mdi-graph-outline" title="Graph" @click="router.push('/graph')"></v-list-item>
          <v-list-item prepend-icon="mdi-delete" title="Deleting Panel"
            @click="router.push('/deleting-panel')"></v-list-item>
          <v-list-item :disabled="store.getDeletedRows.length === 0" prepend-icon="mdi-restart" title="Reset"
            @click="getData()" class="text-red"></v-list-item>
        </v-list>
      </v-navigation-drawer>

      <v-main class="main">
        <router-view />
      </v-main>
    </v-layout>
  </v-app>
</template>
<script setup>
import logoUR from "@/assets/logo-ur.jpg"
import router from "./router";
import { onMounted } from "vue"
import breastCancerData from "@/dist/data/breast-cancer-wisconsin.data";
import { ref } from "vue";
import { useDataStore } from "@/store/index"

const store = useDataStore()
const tableItems = ref([]);

function getData() {
  let id = 1;
  tableItems.value = [];
  store.clearDeletedRows();
  store.clearRestoredRows();
  breastCancerData.split("\n").forEach(element => {
    const elementValues = element.split(",")
    tableItems.value.push(
      {
        id: id,
        status: 'default',
        decision: elementValues[10],
        radius: elementValues[0],
        texture: elementValues[1],
        perimeter: elementValues[2],
        area: elementValues[3],
        smoothness: elementValues[4],
        compactness: elementValues[5],
        concavity: elementValues[6],
        concavePoints: elementValues[7],
        symmetry: elementValues[8],
        fractalDimension: elementValues[9]
      }
    )
    id++;
  });
  tableItems.value.pop();
  store.addTableItems(tableItems.value)
}
onMounted(() => {
  getData();
})
</script>
<style scoped lang="scss">
.main {
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: rgb(33, 33, 33);
}

@media (max-width: 900px) {
  .main {
    padding: 12px;
  }
}
</style>
