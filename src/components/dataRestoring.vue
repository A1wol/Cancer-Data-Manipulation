<template>
    <div class="restoring">
        <v-btn :disabled="store.getters.getDeletedRows.length === 0" color="primary" variant="outlined"
            @click="$emit('openModal')">DATA
            RESTORE</v-btn>
    </div>
</template>
<script setup>
import { ref, defineEmits, defineProps, watch } from "vue"
import { useStore } from 'vuex';
const store = useStore();
defineEmits(['openModal']);
const props = defineProps(['restoreAccepted'])
const averageDataRow = ref({
    radius: 0,
    texture: 0,
    perimeter: 0,
    area: 0,
    smoothness: 0,
    compactness: 0,
    concavity: 0,
    concavePoints: 0,
    symmetry: 0,
    fractalDimension: 0
})
function resetAverages() {
    Object.keys(averageDataRow.value).map(el => averageDataRow.value[el] = 0)
}
function restoreData() {
    resetAverages()
    let deletedRows = store.getters.getDeletedRows;
    store.getters.getTableItems.map(el => {
        averageDataRow.value.radius += parseInt(el.radius)
        averageDataRow.value.texture += parseInt(el.texture)
        averageDataRow.value.perimeter += parseInt(el.perimeter)
        averageDataRow.value.area += parseInt(el.area)
        averageDataRow.value.smoothness += parseInt(el.smoothness)
        averageDataRow.value.compactness += parseInt(el.compactness)
        if (typeof el.concavity === Number) {
            averageDataRow.value.concavity += parseInt(el.concavity)
        }
        averageDataRow.value.concavePoints += parseInt(el.concavePoints)
        averageDataRow.value.symmetry += parseInt(el.symmetry)
        averageDataRow.value.fractalDimension += parseInt(el.fractalDimension)
    })
    for (let element of deletedRows) {
        element.radius = Math.ceil(averageDataRow.value.radius / store.getters.getTableItems.length)
        element.texture = Math.ceil(averageDataRow.value.texture / store.getters.getTableItems.length)
        element.perimeter = Math.ceil(averageDataRow.value.perimeter / store.getters.getTableItems.length)
        element.area = Math.ceil(averageDataRow.value.area / store.getters.getTableItems.length)
        element.smoothness = Math.ceil(averageDataRow.value.smoothness / store.getters.getTableItems.length)
        element.compactness = Math.ceil(averageDataRow.value.compactness / store.getters.getTableItems.length)
        element.concavity = Math.ceil(averageDataRow.value.concavity / store.getters.getTableItems.length)
        element.concavePoints = Math.ceil(averageDataRow.value.concavePoints / store.getters.getTableItems.length)
        element.symmetry = Math.ceil(averageDataRow.value.symmetry / store.getters.getTableItems.length)
        element.fractalDimension = Math.ceil(averageDataRow.value.fractalDimension / store.getters.getTableItems.length)
    }
    store.commit('clearDeletedRows')
}
watch(props, () => {
    if (props.restoreAccepted) {
        restoreData()
    }
})
</script>
<style scoped lang="scss"></style>