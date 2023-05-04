<template>
    <div class="graph">
        <div class="graph__header">
            <GraphHeader />
        </div>
        <div class="graph__chart">
            <div class="text-h4 text-blue justify-center align-center d-flex flex-column">
                {{ selectedCategory }}
                <apexchart ref="realTimeChart" width="700" type="bar" :options="options" :series="series"></apexchart>
            </div>

            <div class="graph__category-select">
                <div class="text-h4">Choose category: </div>
                <v-item-group class="d-flex flex-column" selected-class="bg-primary">
                    <div v-for="category in graphCategories" :key="category">
                        <v-item v-slot="{ selectedClass }">
                            <v-card :class="['d-flex align-center', selectedClass]" @click="selectedCategory = category">
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
import { ref, onMounted, computed, watch } from "vue"
import { useStore } from "vuex"
import GraphHeader from "./graphHeader.vue";

const realTimeChart = ref()
const store = useStore()
const graphCategories = ref([])
const selectedCategory = ref()
const tableItems = computed(() => store.getters.getTableItems);
const categoryValues = computed(() => tableItems.value.map(el => el[selectedCategory.value]));
const xAxisDuplicates = computed(() => [...new Set(categoryValues.value)].map(value => new Object({ "value": value, "duplicateCount": categoryValues.value.filter(str => str === value).length })));

function getSeriesData() {
    let xAxisCategories = [], seriesData = []
    xAxisDuplicates.value.forEach(el => {
        if (el.duplicateCount > 1) {
            if (el.value !== undefined) {
                xAxisCategories.push(el.value)
            }
            else {
                xAxisCategories.push('undefined')
            }
            seriesData.push(el.duplicateCount)
        }
    })
    series.value[0].data = seriesData;
    options.value.xaxis.categories = xAxisCategories;
}
function getGraphCategories() {
    let categoryObject = Object.keys(tableItems.value[0]);
    categoryObject.shift()
    graphCategories.value = categoryObject
}
const options = ref({
    xaxis: {
        categories: [],
        title: {
            text: 'Values'
        }
    },
    yaxis: {
        title: {
            text: 'Amount of duplicates'
        }
    }
})
const series = ref([{
    data: []
}])
watch(selectedCategory, () => {
    getSeriesData();
    realTimeChart.value.updateSeries(([{
        data: series.value[0].data
    }], false, true))
    realTimeChart.value.updateOptions({
        xaxis: {
            categories: options.value.xaxis.categories
        }
    })
})
onMounted(() => {
    getGraphCategories();
})
</script>
<style scoped lang="scss">
.graph {
    &__chart {
        display: flex;
    }

    &__category {
        margin-left: 12px;
    }

    &__category-select {
        margin-left: 20px;
    }
}
</style>