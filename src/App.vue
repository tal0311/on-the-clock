<template>
  <section class="app-container main-layout">
    <AppHeader />
    <section class="router-container">
      <RouterView />
    </section>
    <AppFooter />
  </section>
</template>

<script setup>
import AppHeader from './components/AppHeader.vue';
import AppFooter from './components/AppFooter.vue';
import { onBeforeMount } from 'vue';



onBeforeMount(() => {
  console.log('App.vue onBeforeMount');

});
</script>
<style scoped>
.app-container {
  .router-container {
    height: 80vh;
    overflow-y: auto;
  }


  footer {
    height: 10vh;
  }

 }
</style>
