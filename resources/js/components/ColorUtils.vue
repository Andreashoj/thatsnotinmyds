<script setup lang="ts">
import { useEyeDropper } from '@vueuse/core'
import { EyeDropperIcon } from '@heroicons/vue/20/solid'
import { watch, defineEmits } from 'vue'

defineProps({
    previousColors: Array as () => string[]
})

const { isSupported, open, sRGBHex } = useEyeDropper()
const emits = defineEmits(['update-color'])

watch(sRGBHex, (val) => {
    if (val) {
        emits('update-color', val)
    }
})
</script>
<template>
    <div>
        <div class="flex" v-if="isSupported">
            <button :disabled="!isSupported" @click="() => open()"
                class="bg-emerald-500 px-2 h-8 flex justify-center items-center rounded">
                <span class="whitespace-nowrap">
                    Pick color
                </span>
                <EyeDropperIcon class="ml-2.5 h-4 w-4 fill-black" />
            </button>

            <div :style="{ backgroundColor: sRGBHex }" class="h-8 w-8 rounded ml-2.5" />
        </div>

        <div class=" w-full" :class="isSupported ? 'mt-3' : '-mt-2'">
            <span class="text-gray-200">Previously selected colors</span>

            <div class="flex flex-wrap  gap-2 mt-1">
                <div v-for="color in previousColors" :key="color" :style="{ backgroundColor: color }"
                    class="h-11 w-10 rounded bg-red-200" />
            </div>
        </div>
    </div>
</template>
