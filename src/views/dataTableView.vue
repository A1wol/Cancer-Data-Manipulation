<template>
    <div class="data">
        <div class="data__header">
            <DataHeader />
        </div>
        <div class="data__restoring d-flex justify-end ma-2">
            <DataRestoring />
        </div>
        <div class="data__table">
            <DataTable />
        </div>
    </div>
</template>
<script setup>
import DataHeader from '@/components/dataHeader.vue';
import DataRestoring from '@/components/dataRestoring.vue';
import DataTable from '@/components/dataTable.vue';
</script>

<style scoped lang="scss">
.data {
    max-width: 1000px;

    &__table {
        margin-top: 25px;
    }
}
</style>