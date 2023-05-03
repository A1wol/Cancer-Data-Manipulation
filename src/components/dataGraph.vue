<template>
    <div class="graph">
        <div class="graph__header">
            <GraphHeader />
        </div>
        <div class="graph__chart">
            <apexchart width="600" type="bar" :options="options" :series="series"></apexchart>

            <div class="graph__category-select">
                <div class="text-h4">Choose category: </div>
                <v-item-group class="d-flex flex-column" selected-class="bg-primary">
                    <div v-for="category in graphCategories" :key="category">
                        <v-item v-slot="{ selectedClass, toggle }">
                            <v-card :class="['d-flex align-center', selectedClass]" @click="toggle">
                                <div class="text-h5 text-center graph__category" @click="selectedCategory = category">
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

const store = useStore()
const graphCategories = ref([])
const selectedCategory = ref('radius')
const seriesData = ref([])
const seriesCategories = ref([])
const tableItems = computed(() => store.getters.getTableItems);
const categoryValues = computed(() => tableItems.value.map(el => el[selectedCategory.value]));
const xAxisCategories = ref(...new Set([categoryValues.value]))
const xAxisDuplicates = ref(xAxisCategories.value.map(value => [{ "value": value, "duplicateCount": categoryValues.value.filter(str => str === value).length }]));

function getSeriesData() {
    let seriesValues = [],
        seriesCategory = []
    xAxisDuplicates.value.forEach(element => {
        if (element[0].duplicateCount > 2) {
            seriesValues.push(element[0].duplicateCount)
            seriesCategory.push(element[0].value)
        }
    });
    seriesData.value = seriesValues;
    seriesCategories.value = seriesCategory;
}
function getGraphCategories() {
    graphCategories.value = Object.keys(tableItems.value[0]);
}
const options = ref({
    xaxis: {
        // categories: seriesCategories._rawValue,
        categories: ['a', 'b', 'c', 'd', 'a', 'b', 'c', 'd', 'a', 'b', 'c', 'd', 'a', 'b']
    }
})
const series = ref([{
    // data: seriesData._rawValue
    data: [1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2]
}])
watch(selectedCategory, () => {
    getSeriesData();
    console.log(seriesData._rawValue, [1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2])
})
onMounted(() => {
    getGraphCategories();
    getSeriesData()
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