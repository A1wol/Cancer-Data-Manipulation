<template>
    <div class="restoring">
        <v-btn :disabled="store.getDeletedRows.length === 0" color="primary" variant="outlined"
            @click="$emit('openModal')">DATA
            RESTORE</v-btn>
    </div>
</template>
<script setup>
import { ref, defineEmits, defineProps, watch } from "vue"
import { DataRow } from "@/classes/dataRestore.js"
import { useDataStore } from "@/store/index"

const store = useDataStore()
defineEmits(['openModal']);
const props = defineProps(['restoreAccepted']);
const restoredRows = ref([])

const averageDataRow2Decision = new DataRow(0, 0, 0, 0, 0, 0, 0, 0, 0, 2)
const averageDataRow4Decision = new DataRow(0, 0, 0, 0, 0, 0, 0, 0, 0, 4)

const countedRowLength2Decision = ref(0)
const countedRowLength4Decision = ref(0)

function resetAverages() {
    Object.keys(averageDataRow2Decision).map(el => { if (el !== 'decision') { averageDataRow2Decision[el] = 0 } });
    Object.keys(averageDataRow4Decision).map(el => { if (el !== 'decision') { averageDataRow4Decision[el] = 0 } });
    countedRowLength2Decision.value = 0;
    countedRowLength4Decision.value = 0;
}

function sumRowAttributeValues() {
    store.getTableItems.map(tableItem => {
        if (tableItem.decision !== 0) {
            if (tableItem.decision == 2) {
                Object.entries(averageDataRow2Decision).forEach(averageValue => {
                    averageDataRow2Decision[averageValue[0]] += isNaN(tableItem[averageValue[0]]) ? 1 : parseInt(tableItem[averageValue[0]])
                });
                countedRowLength2Decision.value++;
            }
            else if (tableItem.decision == 4) {
                Object.entries(averageDataRow4Decision).forEach(averageValue => {
                    averageDataRow4Decision[averageValue[0]] += isNaN(tableItem[averageValue[0]]) ? 1 : parseInt(tableItem[averageValue[0]])
                });
                countedRowLength4Decision.value++;
            }
        }
    })
}
function getDataRowValues() {
    restoredRows.value = store.getRestoredRows
    for (let element of store.getDeletedRows) {
        Object.entries(element).forEach(el => {
            if (el[0] !== 'id' && el[0] !== 'decision') {
                element['status'] = 'restored'
                if (element.decision == 2) {
                    element[el[0]] = Math.ceil(averageDataRow2Decision[el[0]] / countedRowLength2Decision.value)
                }
                else if (element.decision == 4) {
                    element[el[0]] = Math.ceil(averageDataRow4Decision[el[0]] / countedRowLength4Decision.value)
                }
                restoredRows.value.push(element)
            }
        });
    }
}

function restoreData() {
    resetAverages()
    sumRowAttributeValues()
    getDataRowValues()
    store.clearDeletedRows();
    store.setRestoredRows(restoredRows.value)
}
watch(props, () => {
    if (props.restoreAccepted) {
        restoreData()
    }
})
</script>
<style scoped lang="scss"></style>