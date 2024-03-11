<script setup lang="ts">
import colors from 'tailwindcss/colors'
import fontColorContrast from 'font-color-contrast'
import { computed } from 'vue'

const props = defineProps({
    shade: String,
    color: String,
    index: Number,
})

const getTextColor = computed(() => {
    const hex = colors[props.color][props.shade]
    return fontColorContrast(hex)
})
</script>

<template>
    <div class="h-20 lg:h-24 text-center flex-1 text-sm rounded flex justify-center items-center relative overflow-hidden"
        :class="`bg-${color}-${shade}`" :style="`color: ${getTextColor}`">
        <div class="absolute top-0 left-0 w-full h-6 text-left flex items-center">
            <div class="h-full w-full bg-black opacity-60 absolute z-0" />
            <span class="z-10 text-gray-300 relative px-2">
                #{{ index }}
            </span>
        </div>
        <span class="mt-4">
            {{ color }} - {{ shade }}
        </span>
    </div>
</template>

