<template>
  <div class="restoring">
    <v-btn
      :disabled="getDeletedRows.length === 0"
      color="primary"
      variant="outlined"
      @click="$emit('openModal')"
      >DATA RESTORE</v-btn
    >
  </div>
</template>

<script setup>
import { defineEmits, defineProps, watch } from "vue";
import { useDataRestore } from "@/composables/dataRestore";

const emit = defineEmits(["openModal"]);
const props = defineProps(["restoreAccepted"]);

const { restoreData, getDeletedRows } = useDataRestore();

watch(props, () => {
  if (!props.restoreAccepted) return;

  restoreData();
});
</script>
