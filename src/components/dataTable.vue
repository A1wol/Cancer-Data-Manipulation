<template>
    <div class="data">
        <v-data-table v-model:items-per-page="itemsPerPage" :headers="tableHeaders" :items="tableItems" density="compact"
            class="elevation-1 data__table">
            <template v-slot:item.status="{ item }">
                <v-chip :color="getRowChipColor(item)">
                    {{ getDataRowStatus(item) }}
                </v-chip>
            </template>
        </v-data-table>
    </div>
</template>
<script setup>
import { ref, computed } from "vue"
import { useStore } from "vuex"
const itemsPerPage = ref(10);
const store = useStore()
const tableItems = computed(() => store.getters.getTableItems);
const tableHeaders = ref([
    {
        title: 'ID',
        align: 'start',
        key: 'id',
    },
    {
        title: 'Status',
        align: 'center',
        key: 'status',
    },
    {
        title: 'Decision',
        align: 'center',
        key: 'decision',
    },
    {
        title: 'Radius',
        align: 'center',
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
function getRowChipColor(row) {
    if (store.getters.getDeletedRows.find(el => el.id == row.columns.id)) {
        return 'error'
    }
    else {
        return store.getters.getRestoredRows.find(el => el.id == row.columns.id) ? 'primary' : 'green'
    }
}
function getDataRowStatus(row) {
    if (store.getters.getDeletedRows.find(el => el.id == row.columns.id)) {
        return 'deleted'
    }
    else {
        return store.getters.getRestoredRows.find(el => el.id == row.columns.id) ? 'restored' : 'default'
    }
}
</script>
<style scoped lang="scss">
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