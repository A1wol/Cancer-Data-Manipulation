<template>
    <div class="data">
        <v-data-table v-model:items-per-page="itemsPerPage" :headers="tableHeaders" :items="tableItems" density="compact"
            class="elevation-1 data__table" expand-on-click>
            <template v-slot:item.status="{ item }">
                <v-chip :color="item.props.title.status !== 'updated' ? getRowChipColor(item) : 'blue'">
                    {{ item.props.title.status }}
                </v-chip>
            </template>
            <template v-slot:expanded-row="{ item, columns }">
                <tr>
                    <td :colspan="columns.length" style="background-color: rgb(27, 27, 27);">
                        <div class="text-h5 ml-5 mt-3">
                            Data Update
                        </div>
                        <table-row-update :rowData="item" @update-row="updateRow($event, item.columns.id)" />
                    </td>
                </tr>
            </template>
        </v-data-table>
        <div class="table-info d-flex justify-end">
            Click a row to update the data
        </div>
    </div>
</template>
<script setup>
import { ref, computed } from "vue"
import TableRowUpdate from "./tableRowUpdate.vue";
import { useDataStore } from "@/store/index"

const store = useDataStore()
const itemsPerPage = ref(10);
const tableItems = computed(() => store.getTableItems);
const tableHeaders = ref([
    { title: 'ID', align: 'start', key: 'id', },
    { title: 'Status', align: 'center', key: 'status', },
    { title: 'Decision', align: 'center', key: 'decision', },
    { title: 'Radius', align: 'center', key: 'radius', },
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
    if (store.getDeletedRows.find(el => el.id == row.columns.id)) {
        return 'error'
    }
    else {
        return store.getRestoredRows.find(el => el.id == row.columns.id) ? 'primary' : 'green'
    }
}
function updateRow(row, itemID) {
    let updateData = {
        id: itemID,
        row: { status: "updated", ...row }
    }
    store.updateRow(updateData)
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

::v-deep .v-data-table {
    &__tr:hover {
        color: white;
        font-weight: bold;
    }
}
</style>