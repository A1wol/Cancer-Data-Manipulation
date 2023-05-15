<template>
    <div class="deleting-panel">
        <v-sheet class="mx-auto">
            <div class="deleting-panel__title text-h4 mb-4 d-flex justify-center">
                Deleting panel
            </div>
            <v-form ref="form">
                <div style="min-height: 80px;">
                    <v-select v-if="!isDeletingRandom" v-model="selectedRowsToDelete"
                        :items="Array.from(Array(store.getters.getTableItems.length).keys())"
                        :rules="[v => !!v || 'Category is required']" label="Rows to delete" multiple></v-select>
                    <div v-else>
                        <v-slider v-model="randomRowsToDeleteQuantity" :rules="[v => v > 0 || 'Must be greater than 0']"
                            :step="1" thumb-label color="orange" label="Amount of rows to delete">
                        </v-slider>
                        <div>Selected amount: {{ randomRowsToDeleteQuantity }}</div>
                    </div>
                </div>

                <v-checkbox v-model="isDeletingRandom" label="Random deleting"></v-checkbox>

                <div class="w-50 d-flex flex-column">
                    <v-btn :disabled="store.getters.getDeletedRows.length !== 0 || randomRowsToDeleteQuantity === 0"
                        color="green" class="mt-4" block @click="$emit('openModal')">
                        Delete
                    </v-btn>

                    <Transition>
                        <v-btn v-if="!isDeletingRandom" color="error" class="mt-4" block @click="formReset">
                            Reset Form
                        </v-btn>

                    </Transition>
                </div>
            </v-form>
        </v-sheet>
        <Transition>
            <div v-if="isInfoVisible">
                <v-alert type="success" title="Success!" position="absolute" class="mt-4"
                    text="Some of the data has been deleted. Check data table or data graph to see the changes."></v-alert>
            </div>
        </Transition>
    </div>
</template>
<script setup>
import { useStore } from 'vuex';
import { ref, defineEmits, defineProps, watch } from "vue";

const store = useStore();
const form = ref();
const selectedRowsToDelete = ref();
const randomRowsToDeleteQuantity = ref(50)
const isDeletingRandom = ref(true);
const isInfoVisible = ref(false);
defineEmits(['openModal']);
const props = defineProps(['restoreAccepted']);

function deleteData() {
    form.value.validate();
    if ((isDeletingRandom.value && randomRowsToDeleteQuantity.value > 0) || (!isDeletingRandom.value && selectedRowsToDelete.value)) {
        store.commit('deleteTableRows', { "rows": selectedRowsToDelete.value, "isRandom": isDeletingRandom.value, "rowQuantity": randomRowsToDeleteQuantity.value })
        isInfoVisible.value = true;
        selectedRowsToDelete.value = undefined;
        setTimeout(() => {
            isInfoVisible.value = false
        }, 3000)
    }
}

watch(props, () => {
    if (props.restoreAccepted) {
        deleteData();
    }
})
function formReset() {
    form.value.reset()
}

</script>
<style lang="scss">
.v-enter-active,
.v-leave-active {
    transition: opacity 0.5s ease;
}

.v-enter-from,
.v-leave-to {
    opacity: 0;
}

.deleting-panel {
    position: relative;
}
</style>