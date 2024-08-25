<template>
  <div class="graph">
    <div class="graph__header d-none d-md-flex d-lg-flex">
      <GraphHeader />
    </div>
    <div class="graph__content">
      <div
        style="width: 100%"
        class="text-h4 text-blue justify-center align-center"
      >
        <div style="min-height: 50px">{{ selectedCategory }}</div>
        <apexchart
          class="graph__chart"
          ref="realTimeChart"
          :options="options"
          :series="series"
        >
        </apexchart>
      </div>

      <div class="graph__category-select">
        <div class="text-h5">Choose category:</div>
        <v-item-group
          class="d-flex flex-column ma-5"
          selected-class="bg-primary"
        >
          <div v-for="category in graphCategories" :key="category">
            <v-item v-slot="{ selectedClass }">
              <v-card
                :class="['d-flex align-center', selectedClass]"
                @click="selectedCategory = category"
              >
                <div class="text-h5 text-center graph__category">
                  {{ category }}
                </div>
              </v-card>
            </v-item>
          </div>
        </v-item-group>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, watch, onMounted } from "vue";
import GraphHeader from "./graphHeader.vue";
import { useDataGraph } from "@/composables/graph";

const realTimeChart = ref();
const graphCategories = ref([]);
const { series, selectedCategory, options, getSeriesData, tableItems } =
  useDataGraph();

function getGraphCategories() {
  let categoryObject = Object.keys(tableItems.value[0]);
  categoryObject.shift();
  graphCategories.value = categoryObject;
}

watch(selectedCategory, () => {
  getSeriesData();
  realTimeChart.value.updateSeries(
    ([
      {
        data: series.value[0].data,
      },
    ],
    false,
    true)
  );

  realTimeChart.value.updateOptions({
    xaxis: {
      categories: options.value.xaxis.categories,
    },
  });
});

onMounted(() => {
  getGraphCategories();
});
</script>

<style scoped lang="scss">
.graph {
  flex-direction: column;
  display: flex;
  justify-content: center;
  align-items: center;

  &__content {
    display: flex;
    justify-content: center;
    width: 100%;
  }

  &__chart {
    width: 100%;
    max-width: 700px;
  }

  &__category-select {
    width: 35%;
  }
}

@media (max-width: 900px) {
  .graph {
    &__content {
      text-align: center;
      flex-direction: column-reverse;
    }

    &__category-select {
      width: 100%;
    }
  }
}
</style>
