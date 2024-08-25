import { useDataStore } from "@/store";
import { ref } from "vue";

export function useDataDeleting() {
  const store = useDataStore();

  const selectedRowsToDelete = ref();
  const randomRowsToDeleteQuantity = ref(50);
  const randomAttributesToDeleteQuantity = ref(1);
  const isDeletingRandom = ref(true);
  const isInfoVisible = ref(false);

  function deleteData() {
    if (
      (isDeletingRandom.value && randomRowsToDeleteQuantity.value > 0) ||
      (!isDeletingRandom.value && selectedRowsToDelete.value)
    ) {
      store.deleteTableRows({
        rows: selectedRowsToDelete.value,
        isRandom: isDeletingRandom.value,
        rowQuantity: randomRowsToDeleteQuantity.value,
        propertyQuantity: randomAttributesToDeleteQuantity.value,
      });
      isInfoVisible.value = true;
      selectedRowsToDelete.value = undefined;
      
      setTimeout(() => {
        isInfoVisible.value = false;
      }, 3000);
    }
  }

  return {
    deleteData,
    isDeletingRandom,
    isInfoVisible,
    randomRowsToDeleteQuantity,
    selectedRowsToDelete,
    randomAttributesToDeleteQuantity,
  };
}
