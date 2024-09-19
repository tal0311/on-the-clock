<template>
  <main>
    <EntryList v-if="entries" :entries="entries" />
  </main>
</template>

<script setup>
import { onBeforeMount, computed } from 'vue';
import { useEntryStore } from '@/stores/entryStore';
import EntryList from '@/components/EntryList.vue';

onBeforeMount(() => {
  entryStore.loadEntries();
});

const entryStore = useEntryStore();
const entries = computed(() => entryStore?.getEntries);






</script>
