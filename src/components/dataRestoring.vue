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
const countedRowLength = ref(0)
function resetAverages() {
    Object.keys(averageDataRow.value).map(el => averageDataRow.value[el] = 0);
    countedRowLength.value = 0;
}
function restoreData() {
    resetAverages()
    store.getters.getTableItems.map(tableItem => {
        Object.entries(averageDataRow.value).forEach(averageValue => {
            averageDataRow.value[averageValue[0]] += isNaN(tableItem[averageValue[0]]) ? 1 : parseInt(tableItem[averageValue[0]])
        });
        countedRowLength.value++;
    })
    for (let element of store.getters.getDeletedRows) {
        Object.entries(element).forEach(el => {
            if (el[0] !== 'id') {
                element[el[0]] = Math.ceil(averageDataRow.value[el[0]] / countedRowLength.value)
            }
        });
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