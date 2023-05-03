<template>
    <div class="data">
        <div v-for="row in getDataRows()">
            {{ row }}
        </div>
    </div>
</template>
<script setup>
import { onMounted } from "vue"
import breastCancer from "@/dist/data/breast-cancer-wisconsin.data"

function getDataRows() {
    return breastCancer.split("\n")
}
onMounted(() => {
    getDataRows()
})
</script>
<style lang="scss"></style>