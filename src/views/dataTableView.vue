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
    
    <Transition>
      <InterfaceModal
        v-if="modal.visibility"
        accept-text="Restore"
        header-text="How would you like to restore the data?"
        @close="modal.visibility = false"
        @accept="modal.restoringAccepted = true"
      >
      <div class="data__select-list">
          <div class="data__select">
            <v-select
            v-model="selected.measureOfDistance"
            :items="selectItems.distance"
            label="Distance measure"
          />
          </div>

          <div class="data__select">
            <v-select
            v-model="selected.normalForm"
            :items="selectItems.normalization"
            label="Normalization type"
          />
          </div>

          <div class="data__select">
            <v-select
            v-model="selected.type"
            :items="selectItems.type"
            label="Restoring type"
          />
          </div>
          
          <div class="data__select">
            <v-select
            v-model="selected.amountOfNeighbours"
            :items="selectItems.neighbours"
            :disabled="selected.type !== 'K-Nearest Neighbors'"
            label="Amount of neighbours"
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
import { DistanceMeasure, NormalizationTypes, RestoringType } from "@/enums";
import { reactive } from "vue";

const modal = reactive({
  visibility: false,
  restoringAccepted: false,
});

const selectItems = reactive({
  distance: Object.values(DistanceMeasure),
  normalization: Object.values(NormalizationTypes),
  type: Object.values(RestoringType),
  neighbours: Array.from({ length: 50 }, (_, i) => (i + 1) * 5)
});

const selected = reactive({
  measureOfDistance: selectItems.distance[0],
  normalForm: selectItems.normalization[0],
  type: selectItems.type[0],
  neighbours: 2
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
