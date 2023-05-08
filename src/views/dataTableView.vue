<template>
    <div class="data">
        <div class="data__restoring d-flex justify-space-between ma-2">
            <DataHeader />
            <DataRestoring @open-modal="isModalVisible = true" :restoreAccepted="isRestoringAccepted" />
        </div>
        <div class="data__table">
            <DataTable />
        </div>
        <Transition>
            <InterfaceModal v-if="isModalVisible" @close="isModalVisible = false" @accept="isRestoringAccepted = true">
                Are you sure you want to restore data?
            </InterfaceModal>
        </Transition>
    </div>
</template>
<script setup>
import DataHeader from '@/components/dataHeader.vue';
import DataRestoring from '@/components/dataRestoring.vue';
import DataTable from '@/components/dataTable.vue';
import InterfaceModal from '@/components/ui/interfaceModal.vue';
import { ref } from "vue"

const isModalVisible = ref(false);
const isRestoringAccepted = ref(false);
</script>

<style scoped lang="scss">
.data {
    width: 100%;
    max-width: 1000px;

    &__table {
        margin-top: 25px;
    }
}

.v-enter-active,
.v-leave-active {
    transition: opacity 0.5s ease;
}

.v-enter-from,
.v-leave-to {
    opacity: 0;
}
</style>