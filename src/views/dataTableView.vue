<template>
  <div class="data">
    <div class="data__restoring d-flex justify-space-between ma-2">
      <DataHeader />

      <DataRestoring
        @open-modal="modal.visibility = true"
        :restoreAccepted="modal.restoringAccepted"
      />
    </div>
    <div class="data__table">
      <DataTable />
    </div>
    <!-- <Transition>
            <InterfaceModal v-if="isModalVisible" @close="isModalVisible = false" @accept="isRestoringAccepted = true">
                Are you sure you want to restore data?
            </InterfaceModal>
        </Transition> -->
    <Transition>
      <InterfaceModal
        v-if="modal.visibility"
        accept-text="Restore"
        header-text="How would you like to restore the data?"
        @close="modal.visibility = false"
        @accept="modal.restoringAccepted = true"
      >
      <h5>Are you sure you want to restore data?</h5>
      <div class="data__select-list">
          <div class="data__select">
            <v-select
            v-model="selected.measureOfDistance"
            :items="distanceMeasures"
            label="Distance measure"
            name="label"
          />
          </div>
        </div>
      </InterfaceModal>
    </Transition>
  </div>
</template>

<script setup>
import DataHeader from "@/components/dataHeader.vue";
import DataRestoring from "@/components/dataRestoring.vue";
import DataTable from "@/components/dataTable.vue";
import InterfaceModal from "@/components/ui/interfaceModal.vue";
import { DistanceMeasure } from "@/enums";
import { reactive, computed } from "vue";

const modal = reactive({
  visibility: false,
  restoringAccepted: false,
});

const selected = reactive({
  measureOfDistance: Object.keys(DistanceMeasure)[0],
});

const distanceMeasures = computed(() => {
  return Object.keys(DistanceMeasure);
});
</script>

<style scoped lang="scss">
.data {
  width: 100%;
  max-width: 1000px;

  &__table {
    margin-top: 25px;
  }

  &__select-list {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 12px;
  }

  &__select {
    margin-top: 25px;
  }
}
</style>
