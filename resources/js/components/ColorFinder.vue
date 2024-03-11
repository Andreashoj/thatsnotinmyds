<script setup lang="ts">
import { ref, computed, watch, defineEmits } from 'vue';
import { findClosestColors } from '../utils/colorFinder';
import ColorItem from './ColorItem.vue';
import Dropdown from '../base/Dropdown.vue';

const color = defineModel({ default: '#fdfdfd' })
const frameworkOptions = [{ name: 'Tailwind', value: 'tailwind' }]
const framework = ref(frameworkOptions[0])
const getClosestColors = computed(() => findClosestColors(color.value))
const emits = defineEmits(['update-previous-colors', 'update-color'])


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
        <div class="z-10 relative mb-8 lg:mb-0">
            <div class="flex gap-4">
                <Dropdown class="flex-1" v-model="framework" :options="frameworkOptions" />
                <input v-model="color" class="rounded indent-2 py-1 flex-1 text-sm text-gray-700"
                    placeholder="Enter your color code here" />
            </div>

            <div v-if="validHex" class="mt-4">
                <span class="text-gray-300 text-sm">Sorted by closest color match to your code</span>
                <div v-if="validHex" class=" flex gap-4 w-full mt-1">
                    <ColorItem v-for="item in getClosestColors" :color="item.colorName" :shade="item.shade"
                        @click="emits('update-color')" />
                </div>
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
