<template>
    <section v-for="day in days" :key="day">
        <details>
            <summary class="grid grid-dir-col">
                <h4>{{ day }}/9/2024 </h4>
                <span class="icon-svg" v-if="getEntriesForDay(day).length" v-html="$svg('indication')"></span>
            </summary>
            <p v-if="getEntriesForDay(day).length">Details about the day</p>
            <ul v-if="getEntriesForDay(day).length">
                <li v-for="entry in getEntriesForDay(day)" :key="entry._id">
                    <p>Date: {{ convertToReadableDate(entry.date) }}</p>
                    <p>Start Time: {{ convertToReadableTime(entry.startTime) }}</p>
                    <p>End Time: {{ convertToReadableTime(entry.endTime) }}</p>
                    <p>Project ID: {{ entry.projectId }}</p>
                    <p>Notes: {{ entry.notes }}</p>
                    <hr />
                </li>
            </ul>
            <p v-else>No entry for this day</p>
        </details>
    </section>
</template>

<script setup>
import { ref } from 'vue';
import { daysInMonth } from '@/services/util.service';
import { convertToReadableDate, convertToReadableTime } from '@/services/util.service';

const props = defineProps(['entries']);

const days = ref(daysInMonth(9, 2024));

function getEntriesForDay(day) {
    return props.entries.filter(entry => {
        const entryDate = new Date(entry.date).getDate();
        return entryDate === day;
    });
}
</script>

<style scoped>
details {
    padding: 1rem;
    border: 1px solid #ccc;
    border-radius: 0.5rem;
    margin-block-end: 0.5rem;
}
hr {
    margin: 1rem 0;
}
</style>

