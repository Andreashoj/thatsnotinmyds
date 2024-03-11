<script setup lang="ts">
import { useEyeDropper } from '@vueuse/core'
import { EyeDropperIcon } from '@heroicons/vue/20/solid'
import { watch, defineEmits } from 'vue'

defineProps({
    previousColors: Array as () => string[]
})

const { isSupported, open, sRGBHex } = useEyeDropper()
const emits = defineEmits(['update-color'])

const updateColor = (val) => {
    emits('update-color', val)
}

watch(sRGBHex, (val) => {
    if (val) {
        updateColor(val)
    }
})

</script>
<template>
    <div>
        <div class="flex">
            <button name="eye dropper button, lets you select a visible color on your screen" :disabled="!isSupported"
                @click="() => open()" class="bg-emerald-500 px-2 h-9 flex justify-center items-center rounded">
                <span class="whitespace-nowrap">
                    Pick color
                </span>
                <EyeDropperIcon class="ml-2.5 h-4 w-4 fill-black" />
            </button>
        </div>

        <div class=" w-full mt-4">
            <span class="text-gray-300 text-sm">Previously selected colors</span>

            <div class="flex flex-wrap  gap-2 mt-1">
                <button v-for="( color, index ) in  previousColors " :key="color + index"
                    :style="{ backgroundColor: color }" @click="updateColor(color)" class="h-11 w-10 rounded bg-red-200"
                    :aria-label="`previous color ${color}, select it again`" />
            </div>
        </div>
    </div>
</template>
