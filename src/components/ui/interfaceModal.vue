<template>
    <div class="modal-backdrop">
        <div class="modal d-flex flex-column ">
            <div class="modal__header text-h4">
                Confirmation
            </div>

            <div class="modal__body text-h5 mt-5">
                <slot />
            </div>

            <footer class="modal__footer mt-5">
                <v-btn color="green" class="mr-3" @click="$emit('accept'), $emit('close')">
                    Accept
                </v-btn>
                <v-btn color="red" @click="$emit('close')">
                    Close Modal
                </v-btn>
            </footer>
        </div>
    </div>
</template>
<script setup>
import { defineEmits } from 'vue';
defineEmits(['close', 'accept'])
</script>
<style scoped lang="scss">
.modal-backdrop {
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    background-color: rgba(0, 0, 0, 0.3);
    display: flex;
    justify-content: center;
    align-items: center;
}

.modal {
    padding: 24px;
    background: #FFFFFF;
    color: black;
    border-radius: 12px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    text-align: center;
}
</style>
