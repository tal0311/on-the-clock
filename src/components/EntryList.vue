<template>
    <section v-for="day in days" :key="day">
        <details>
            <summary class="grid grid-dir-col">
                <h4>{{ day }}/9/2024 </h4>
                <span class="icon-svg" v-if="getEntryForDay(day)" v-html="$svg('indication')"></span>
            </summary>
            <p v-if="getEntryForDay(day)">Details about the day</p>
            <div v-if="getEntryForDay(day)">

                <p>Date: {{ convertToReadableDate(getEntryForDay(day).date) }}</p>
                <p>Start Time: {{ convertToReadableTime(getEntryForDay(day).startTime) }}</p>
                <p>End Time: {{ convertToReadableTime(getEntryForDay(day).endTime) }}</p>
                <p>Project ID: {{ getEntryForDay(day).projectId }}</p>
                <p>Notes: {{ getEntryForDay(day).notes }}</p>

            </div>
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

function getEntryForDay(day) {
    return props.entries.find(entry => {
        const entryDate = new Date(entry.date).getDate();
        return entryDate === day;
    });
}
</script>

<style scoped>
details{
    
    padding: 1rem;
    border: 1px solid #ccc;
    border-radius: 0.5rem;
    margin-block-end: 0.5rem;
}
</style>