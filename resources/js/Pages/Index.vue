<script setup>
import ColorFinder from '../components/ColorFinder.vue'
import ColorUtils from '../components/ColorUtils.vue';
import { ref, onMounted } from 'vue'
defineProps({
    user: Object,
})

const previousColors = ref([])

const updatePreviousColors = (color) => {
    let colorArray = JSON.parse(localStorage.getItem('colors')) || [];

    colorArray.unshift(color);

    if (colorArray.length > 10) {
        colorArray.pop();
    }

    localStorage.setItem('colors', JSON.stringify(colorArray));

    previousColors.value = colorArray
}

onMounted(() => {
    previousColors.value = JSON.parse(localStorage.getItem('colors')) || []
})
</script>

<template>
    <main class="grid grid-cols-10 h-full relative overflow-hidden">
        <div class="gradient absolute -top-1/2 left-1/2 h-[1200px] w-[500px] rounded-full -rotate-45" />
        <div class="col-start-3 col-span-6 relative z-10">
            <h1 class="text-5xl font-black text-white text-center mt-36 z-10">
                Find the perfect color match without leaving your design.
            </h1>

            <div class="grid grid-cols-7 mt-20">
                <ColorFinder class="col-span-4" @update-previous-colors="updatePreviousColors" />
                <div class="col-span-1 flex justify-center">
                    <span class="block w-px h-full bg-gray-400" />
                </div>
                <ColorUtils class="col-span-2" :previous-colors="previousColors" />
            </div>
        </div>
    </main>
</template>

<style>
main {
    background-image: url('/resources/assets/images/background-pattern.png');
    background-repeat: repeat;
    background-size: contain;
}
</style>
