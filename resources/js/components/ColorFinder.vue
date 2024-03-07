<script setup>
import { ref, computed } from 'vue';
import { findClosestColor } from '../utils/colorFinder';
const color = ref('');
const framework = ref('tailwind');

const getClosestColor = computed(() => {
    console.log('hello', color.value)
    return findClosestColor(color.value)
})
</script>
<template>
    <div>
        <div class="flex gap-2">
            <select v-model="framework" class="flex-1 rounded indent-1" readonly>
                <option value="tailwind" label="Tailwind" />
            </select>
            <input v-model="color" class="rounded indent-2 py-1 flex-1" placeholder="Enter your color code here" />
        </div>

        <div class="mt-4 text-white h-24">
            <div> {{ getClosestColor.closestColor }} - {{ getClosestColor.closestShade }} </div>
        </div>
    </div>
</template>
