<template>
    <div class="deleting-panel">
        <v-sheet width="400" class="mx-auto">
            <div class="deleting-panel__title text-h4 mb-4 d-flex justify-center">
                Deleting panel
            </div>
            <v-form ref="form" v-model="isFormValid">
                <div style="min-height: 80px;">
                    <v-select v-if="!isDeletingRandom" v-model="selectedRowsToDelete"
                        :items="Array.from(Array(store.getters.getTableItems.length).keys())"
                        :rules="[v => !!v || 'Category is required']" label="Rows to delete" multiple></v-select>
                    <div v-else>
                        <v-slider v-model="randomRowsToDeleteQuantity" :step="1" thumb-label color="orange"
                            label="Amount of rows to delete">
                        </v-slider>
                        <div>Selected amount: {{ randomRowsToDeleteQuantity }}</div>
                    </div>
                </div>

                <v-checkbox v-model="isDeletingRandom" label="Random deleting"></v-checkbox>

                <div class="w-50 d-flex flex-column">
                    <v-btn color="green" class="mt-4" block @click="deleteData">
                        Delete
                    </v-btn>

                    <v-btn v-if="!isDeletingRandom" color="error" class="mt-4" block @click="formReset">
                        Reset Form
                    </v-btn>
                </div>
            </v-form>
        </v-sheet>
        <div v-if="isInfoVisible" class="text-h5 mt-5 text-blue">
            <div>Some of the data has been deleted.</div>
            <div>Check data table or data graph to see the changes</div>
        </div>
    </div>
</template>
<script setup>
import { useStore } from 'vuex';
import { ref } from "vue";

const store = useStore();
const form = ref();
const selectedRowsToDelete = ref();
const randomRowsToDeleteQuantity = ref(50)
const isDeletingRandom = ref(true);
const isInfoVisible = ref(false);
const isFormValid = ref(false)

function deleteData() {
    form.value.validate();
    if (isFormValid.value) {
        store.commit('deleteTableRows', { "rows": selectedRowsToDelete.value, "isRandom": isDeletingRandom.value, "rowQuantity": randomRowsToDeleteQuantity.value })
        isInfoVisible.value = true;
        selectedRowsToDelete.value = undefined;
        setTimeout(() => {
            isInfoVisible.value = false
        }, 3000)
    }
}

function formReset() {
    form.value.reset()
}

</script>
<style lang="scss"></style>