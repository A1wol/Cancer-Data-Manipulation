<template>
    <Transition>
        <div v-if="isUpdatePanelVisible" class="row-update mt-5">
            <div class="row-update__column">
                <v-text-field v-model="updatedRow.radius" type="number" density="compact" variant="outlined"
                    prepend-icon="mdi-radius-outline" label="Radius" hint="Enter proper radius" class="mb-2" />
                <v-text-field v-model="updatedRow.texture" type="number" density="compact" variant="outlined"
                    prepend-icon="mdi-texture-box" label="Texture" hint="Enter proper texture" class="mb-2" />
                <v-text-field v-model="updatedRow.perimeter" type="number" density="compact" variant="outlined"
                    prepend-icon="mdi-dots-circle" label="Perimeter" hint="Enter proper perimeter" class="mb-2" />
                <v-text-field v-model="updatedRow.area" type="number" density="compact" variant="outlined"
                    prepend-icon="mdi-chart-areaspline" label="Area" hint="Enter proper area" class="mb-2" />
                <v-text-field v-model="updatedRow.smoothness" type="number" density="compact" variant="outlined"
                    prepend-icon="mdi-wall-sconce-flat-variant-outline" class="mb-2" label="Smoothness"
                    hint="Enter proper smoothness" />
            </div>
            <div class="row-update__column">
                <v-text-field v-model="updatedRow.compactness" type="number" density="compact" variant="outlined"
                    prepend-icon="mdi-view-compact-outline" label="Compactness" hint="Enter proper compactness"
                    class="mb-2" />
                <v-text-field v-model="updatedRow.concavity" type="number" density="compact" variant="outlined"
                    prepend-icon="mdi-wall-sconce-round-variant-outline" label="Concavity" hint="Enter proper concavity"
                    class="mb-2" />
                <v-text-field v-model="updatedRow.concavePoints" type="number" density="compact" variant="outlined"
                    prepend-icon="mdi-progress-star-four-points" label="Concave Points" hint="Enter proper concavePoints"
                    class="mb-2" />
                <v-text-field v-model="updatedRow.symmetry" type="number" density="compact" variant="outlined"
                    prepend-icon="mdi-math-integral" label="Symmetry" hint="Enter proper symmetry" class="mb-2" />
                <v-text-field v-model="updatedRow.fractalDimension" type="number" density="compact" variant="outlined"
                    prepend-icon="mdi-fraction-one-half" label="Fractal Dimension" hint="Enter proper fractal dimension"
                    class="mb-2" />
            </div>
            <div class="row-update__submit">
                <v-btn variant="outlined" color="orange" @click="$emit('updateRow', updatedRow)">UPDATE</v-btn>
            </div>
        </div>
    </Transition>
</template>
<script setup>
import { ref, defineProps, defineEmits, onMounted } from "vue"

const props = defineProps(['rowData']);
const isUpdatePanelVisible = ref(false)
defineEmits(['updateRow'])
const updatedRow = ref({
    radius: props.rowData.columns.radius,
    texture: props.rowData.columns.texture,
    perimeter: props.rowData.columns.perimeter,
    area: props.rowData.columns.area,
    smoothness: props.rowData.columns.smoothness,
    compactness: props.rowData.columns.compactness,
    concavity: props.rowData.columns.concavity,
    concavePoints: props.rowData.columns.concavePoints,
    symmetry: props.rowData.columns.symmetry,
    fractalDimension: props.rowData.columns.fractalDimension
});
onMounted(() => {
    isUpdatePanelVisible.value = true
})
</script>
<style scoped lang="scss">
.row-update {
    display: flex;
    justify-content: flex-start;

    &__column {
        display: flex;
        flex-direction: column;
        width: 15%;
        margin-right: 15px;
    }
}

.v-enter-active,
.v-leave-active {
    transition: all 1s ease;
    overflow: hidden;
}

.v-enter-from,
.v-leave-to {
    max-height: 0px;
}

.v-leave-from,
.v-enter-to {
    max-height: 350px;
}

@media (max-width: 650px) {
    .row-update {
        flex-direction: column;
    }
}
</style>