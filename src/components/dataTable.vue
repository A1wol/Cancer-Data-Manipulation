<template>
    <div class="data">
        <v-data-table v-model:items-per-page="itemsPerPage" :headers="tableHeaders" :items="tableItems" item-value="name"
            class="elevation-1 data__table"></v-data-table>
    </div>
</template>
<script setup>
import { onMounted, ref } from "vue";
import { useStore } from "vuex"
import breastCancerData from "@/dist/data/breast-cancer-wisconsin.data"

const store = useStore()
const tableItems = ref([]);
const itemsPerPage = ref(5);
const tableHeaders = ref([
    {
        title: 'Radius',
        align: 'start',
        sortable: false,
        key: 'radius',
    },
    { title: 'Texture', align: 'center', key: 'texture' },
    { title: 'Perimeter', align: 'center', key: 'perimeter' },
    { title: 'Area', align: 'center', key: 'area' },
    { title: 'Smoothness', align: 'center', key: 'smoothness' },
    { title: 'Compactness', align: 'center', key: 'compactness' },
    { title: 'Concavity', align: 'center', key: 'concavity' },
    { title: 'Concave Points', align: 'center', key: 'concavePoints' },
    { title: 'Symmetry', align: 'center', key: 'symmetry' },
    { title: 'Fractal Dimension', align: 'center', key: 'fractalDimension' },
]);

function getData() {
    breastCancerData.split("\n").forEach(element => {
        const elementValues = element.split(",")
        tableItems.value.push(
            {
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
    });
    store.dispatch('addTableItems', tableItems.value)
}
onMounted(() => {
    getData();
})
</script>
<style lang="scss">
.data {

    &__table {
        border: 1px solid white;
        border-radius: 15px;
        -webkit-box-shadow: 1px 3px 24px 3px rgba(66, 68, 90, 1);
        -moz-box-shadow: 1px 3px 24px 3px rgba(66, 68, 90, 1);
        box-shadow: 1px 3px 24px 3px rgba(66, 68, 90, 1);
    }
}
</style>