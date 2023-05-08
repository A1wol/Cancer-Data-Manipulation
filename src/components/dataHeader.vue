<template>
    <div class="header">
        <div class="header__title">
            Wisconsin breast cancer data
        </div>
    </div>
</template>
<style scoped lang="scss">
.header {
    &__title {
        font-size: 26px;
    }
}

@media(max-width: 700px) {
    .header {
        &__title {
            font-size: 20px;
        }
    }
}
</style>