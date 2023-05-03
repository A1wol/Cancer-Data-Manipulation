<template>
    <div class="graph">
        <div class="graph__header">
            <GraphHeader />
        </div>
        <div class="graph__chart">
            <apexchart width="1000" type="bar" :options="options" :series="series">
            </apexchart>
        </div>
        {{ store.state }}
    </div>
</template>
<script setup>
import { ref, onMounted } from "vue"
import { useStore } from "vuex"
import GraphHeader from "./graphHeader.vue";

const store = useStore()
const graphCategories = ref([])

function getGraphCategories() {
    // store.dispatch('addTableItems', )
}
const options = ref({
    chart: {
        type: 'bar',
        events: {
            click: function (chart, w, e) {
                // console.log(chart, w, e)
            }
        }
    },
    xaxis: {
        categories: [
            ['John', 'Doe'],
            ['Joe', 'Smith'],
            ['Jake', 'Williams'],
            'Amber',
            ['Peter', 'Brown'],
            ['Mary', 'Evans'],
            ['David', 'Wilson'],
            ['Lily', 'Roberts'],
        ],
    }
}
)
const series = ref([{
    data: [21, 22, 10, 28, 16, 21, 13, 30]
}])
onMounted(() => {
    getGraphCategories()
})
</script>