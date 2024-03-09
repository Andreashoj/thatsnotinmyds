<script setup lang="ts">
import { ref, computed, watch, defineEmits } from 'vue';
import { findClosestColors } from '../utils/colorFinder';
import ColorItem from './ColorItem.vue';
import Dropdown from '../base/Dropdown.vue';

const color = ref('#fdfdfd');
const frameworkOptions = [{ name: 'Tailwind', value: 'tailwind' }]
const framework = ref(frameworkOptions[0])
const getClosestColors = computed(() => findClosestColors(color.value))
const emits = defineEmits(['update-previous-colors'])


const validHex = computed(() => {
    const isHexCode = /^#([0-9A-Fa-f]{6})$/;
    return isHexCode.test(color.value);
})

watch(color, () => {
    if (validHex.value) {
        emits('update-previous-colors', color.value)
    }
});

</script>
<template>
    <div class="relative">
        <div class="z-10 relative">
            <div class="flex gap-2">
                <Dropdown class="flex-1" v-model="framework" :options="frameworkOptions" />
                <input v-model="color" class="rounded indent-2 py-1 flex-1" placeholder="Enter your color code here" />
            </div>

            <div v-if="validHex" class="mt-8 h-24 flex gap-4 w-full">
                <ColorItem v-for="item in getClosestColors" :color="item.colorName" :shade="item.shade" />
            </div>

            <span v-else class="text-white mt-4 block">Uh ohh! Invalid hexcode</span>
        </div>
    </div>
</template>

<style>
.gradient {
    background: radial-gradient(#0d9488 10%, #011727 70%);
    opacity: 0.2;
    animation: pulseAnimation 10s infinite;
}

@keyframes pulseAnimation {
    0% {
        opacity: 0.2;
    }

    50% {
        opacity: 0.35;
    }

    100% {
        opacity: 0.2;
    }
}
</style>
