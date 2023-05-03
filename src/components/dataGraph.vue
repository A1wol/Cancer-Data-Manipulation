<template>
    <div class="graph">
        <VueApexCharts width="500" type="bar" :options="options" :series="series">
        </VueApexCharts>
    </div>
</template>
<script setup>
import VueApexCharts from 'vue-apexcharts';
import { ref } from "vue"

const options = ref({
    chart: {
        id: 'vuechart-example'
    },
    xaxis: {
        categories: [
            "Jan",
            "Feb",
            "Mar",
            "Apr",
            "May",
            "Jun",
            "Jul",
            "Aug",
            "Sep",
            "Oct",
            "Nov",
            "Dec"
        ]
    }
})
const series = ref([{
    name: 'series-1',
    data: [55, 62, 89, 66, 98, 72, 101, 75, 94, 120, 117, 139]
}])
</script>