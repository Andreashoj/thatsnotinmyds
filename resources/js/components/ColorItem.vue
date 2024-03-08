<script setup lang="ts">
import colors from 'tailwindcss/colors'
import fontColorContrast from 'font-color-contrast'
import { computed } from 'vue'

const props = defineProps({
    shade: String,
    color: String,
})

const getTextColor = computed(() => {
    const hex = colors[props.color][props.shade]
    return fontColorContrast(hex)
})
</script>

<template>
    <div class="h-24 flex-1 text-sm rounded flex justify-center items-center" :class="`bg-${color}-${shade}`"
        :style="`color: ${getTextColor}`">
        {{ color }} - {{ shade }}
    </div>
</template>

