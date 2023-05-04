<template>
    <div class="restoring">
        <v-btn color="primary" @click="restoreData">DATA RESTORE</v-btn>
    </div>
</template>
<script setup>
// import { ref } from "vue"
import { useStore } from 'vuex';
const store = useStore();
// const averageDataRow = ref({
//     radius: 0,
//     texture: 0,
//     perimeter: 0,
//     area: 0,
//     smoothness: 0,
//     compactness: 0,
//     concavity: 0,
//     concavePoints: 0,
//     symmetry: 0,
//     fractalDimension: 0
// })
function restoreData() {
    let deletedRows = store.getters.getDeletedRows;
    let averageRadius = 0;
    store.getters.getTableItems.forEach(el => {
        console.log(el.radius)
        averageRadius += parseInt(el.radius)
    })
    console.log(averageRadius)
    for (let element of deletedRows) {
        element.radius = averageRadius
    }
}
</script>
<style scoped lang="scss"></style>