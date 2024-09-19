<template>
    <header class="grid grid-dir-col">
        <h5>App Header</h5>
        <section class="main-action">
            <span class="icon-svg" v-html="$svg('filter')"></span>
        </section>
    </header>
</template>

<script setup>

</script>

<style scoped>
header {
    justify-content: space-between;
    padding-block: 0.5rem;
}
</style>