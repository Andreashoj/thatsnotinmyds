<script setup lang="ts">
import { ref, computed } from 'vue';
import { findClosestColors } from '../utils/colorFinder';
import ColorItem from './ColorItem.vue';
const color = ref('');
const framework = ref('tailwind');
const getClosestColors = computed(() => findClosestColors(color.value))
</script>
<template>
    <div>
        <div class="flex gap-2">
            <select v-model="framework" class="flex-1 rounded indent-1" readonly>
                <option value="tailwind" label="Tailwind" />
            </select>
            <input v-model="color" class="rounded indent-2 py-1 flex-1" placeholder="Enter your color code here" />
        </div>

        <div class="mt-8 h-24 flex gap-4 w-full">
            <ColorItem v-for="item in getClosestColors" :color="item.colorName" :shade="item.shade" />
        </div>
    </div>
</template>
