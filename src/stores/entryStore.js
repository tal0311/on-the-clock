import { ref, computed } from 'vue'
import { defineStore } from 'pinia'
import {entryService} from '@/services/entry'

export const useEntryStore = defineStore('entry', () => {

  const entries=ref(null)

  const getEntries= computed(()=> entries.value)

  async function loadEntries() {
    console.log(entryService);
    
    entries.value = await entryService.query()
    console.log(entries.value);
    
  }

  async function addEntry(entry) {
    const newEntry = await entryService.save(entry)
    entries.value.push(newEntry)
  }

  async function updateEntry(updatedEntry) {
    const entry = await entryService.save(updatedEntry)
    const index = entries.value.findIndex(e => e._id === entry._id)
    if (index !== -1) {
      entries.value[index] = entry
    }
  }

  async function removeEntry(id) {
    await entryService.remove(id)
    entries.value = entries.value.filter(e => e.id !== id)
  }

  return { entries, loadEntries, addEntry, updateEntry, removeEntry, getEntries }

})
