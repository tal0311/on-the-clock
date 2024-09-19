<template>
    <footer>
    
      <section class="main-action">
        <span class="icon-svg" v-html="$svg('plus')"></span>
      </section>
    </footer>
</template>

<script setup>


</script>

<style scoped>
footer{
    position: relative;
}
.main-action{
    width: min-content;
    background: lightgreen;
    border-radius: 100vh;
    position: absolute;
    right: 0;
    top: -1rem;
}

</style>