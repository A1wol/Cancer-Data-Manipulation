<template>
  <div class="deleting">
    <DeletingPanel
      @open-modal="isModalVisible = true"
      :restoreAccepted="isRestoringAccepted"
    />

    <Transition>
      <InterfaceModal
        v-if="isModalVisible"
        @close="isModalVisible = false"
        accept-text="Delete data"
        header-text="Data deleting"
        @accept="isRestoringAccepted = true"
      >
        Are you sure you want to delete data?
      </InterfaceModal>
    </Transition>
  </div>
</template>

<script setup>
import DeletingPanel from "@/components/deletingPanel.vue";
import InterfaceModal from "@/components/ui/interfaceModal.vue";
import { ref } from "vue";

const isModalVisible = ref(false);
const isRestoringAccepted = ref(false);
</script>

<style scoped lang="scss">
.deleting {
  width: 100%;
  max-width: 500px;
}
</style>
