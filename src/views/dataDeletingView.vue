<template>
    <div class="deleting">
        <deletingPanel @open-modal="isModalVisible = true" :restoreAccepted="isRestoringAccepted" />
        <Transition>
            <InterfaceModal v-if="isModalVisible" @close="isModalVisible = false" @accept="isRestoringAccepted = true">
                Are you sure you want to delete data?
            </InterfaceModal>
        </Transition>
    </div>
</template>
<script setup>
import deletingPanel from '@/components/deletingPanel.vue';
import InterfaceModal from '@/components/ui/interfaceModal.vue';
import { ref } from "vue";
const isModalVisible = ref(false);
const isRestoringAccepted = ref(false);
</script>

<style scoped lang="scss">
.deleting {
    width: 100%;
    max-width: 500px;
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