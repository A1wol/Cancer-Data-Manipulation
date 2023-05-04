<template>
    <div class="deleting-panel">
        <v-sheet width="800" class="mx-auto">
            <div class="deleting-panel__title text-h4 mb-4 d-flex justify-center">
                Deleting panel
            </div>
            <v-form ref="form" v-model="isFormValid">
                <div style="min-height: 80px;">
                    <v-select v-if="!isDeletingRandom" v-model="selectedCategoryToDelete" :items="selectItems"
                        :rules="[v => !!v || 'Category is required']" label="Category to delete from"></v-select>
                    <div v-else class="text-h5 text-red">
                        Random category
                    </div>
                </div>

                <v-checkbox v-model="isDeletingRandom" label="Random deleting"></v-checkbox>

                <div class="d-flex flex-column w-25 ">
                    <v-btn color="green" class="mt-4" block @click="deleteData">
                        Delete
                    </v-btn>

                    <v-btn color="error" class="mt-4" @click="formReset">
                        Reset Form
                    </v-btn>
                </div>
            </v-form>
            <div v-if="isDataDeleted" class="text-h5 mt-5 text-blue">
                <div>Some of the data has been deleted.</div>
                <div>Check data table or data graph to see the changes</div>
            </div>
        </v-sheet>
    </div>
</template>
<script setup>
import { useStore } from 'vuex';
import { ref, computed } from "vue";

const store = useStore();
const form = ref();
const selectItems = computed(() => Object.keys(store.getters.getTableItems[0]))
const selectedCategoryToDelete = ref();
const isDeletingRandom = ref(false);
const isDataDeleted = ref(false);
const isFormValid = ref(false)

function deleteData() {
    form.value.validate();
    if (isFormValid.value) {
        isDataDeleted.value = true;
        setTimeout(() => {
            isDataDeleted.value = false
        }, 3000)
    }
}

function formReset() {
    form.value.reset()
}

</script>
<style lang="scss"></style>