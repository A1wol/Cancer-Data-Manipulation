<template>
    <div class="data">
    </div>
</template>
<script setup>
import { onMounted, ref } from "vue"
import breastCancerData from "@/dist/data/breast-cancer-wisconsin.data"

const tableData = ref([]);
const itemsPerPage = ref(5);
const tableHeaders = ref([
    {
        title: 'Dessert (100g serving)',
        align: 'start',
        sortable: false,
        key: 'name',
    },
    { title: 'Calories', align: 'end', key: 'calories' },
    { title: 'Fat (g)', align: 'end', key: 'fat' },
    { title: 'Carbs (g)', align: 'end', key: 'carbs' },
    { title: 'Protein (g)', align: 'end', key: 'protein' },
    { title: 'Iron (%)', align: 'end', key: 'iron' },
]);

function getData() {
    breastCancerData.split("\n").forEach(element => {
        const elementValues = element.split(",")
        tableData.value.push(
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
}
onMounted(() => {
    getData();
})
</script>
<style lang="scss"></style>