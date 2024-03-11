<script setup>
import ColorFinder from '../components/ColorFinder.vue'
import ColorUtils from '../components/ColorUtils.vue';
import { Head } from '@inertiajs/vue3'
import { ref, onMounted } from 'vue'
defineProps({
    user: Object,
})

const color = ref('#fdfdfd')
const previousColors = ref([])

const updateColor = (val) => {
    color.value = val
}

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
    <Head>
        <title>DS color finder</title>
        <meta name="description" content="Find the closest matching color for your tailwind design system">
    </Head>

    <main class="grid grid-cols-10 h-full relative overflow-hidden">
        <div class="gradient absolute -top-1/2 left-1/2 h-[1200px] w-[500px] rounded-full -rotate-45" />
        <div
            class="col-start-2 col-span-8 lg:col-start-3 lg:col-span-6 2xl:col-span-4 2xl:col-start-4 relative z-10 flex justify-center items-center  flex-col mb-8">
            <h1 class="text-3xl lg:text-5xl font-black text-white text-center z-10">
                Find the perfect color match without leaving your design.
            </h1>

            <div class="grid grid-cols-7 mt-12 lg:mt-20 w-full">
                <ColorFinder class="col-span-7 lg:col-span-4" v-model="color"
                    @update-previous-colors="updatePreviousColors" />
                <div class="hidden lg:flex col-span-1 justify-center">
                    <span class="block w-px h-full bg-gray-400" />
                </div>
                <ColorUtils class="col-span-7 lg:col-span-2" :previous-colors="previousColors"
                    @update-color="updateColor" />
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
