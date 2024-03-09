<script setup>
import ColorFinder from '../components/ColorFinder.vue'
import Signup from '../components/Signup.vue'
import ColorUtils from '../components/ColorUtils.vue';
defineProps({
    user: Object,
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
                <ColorFinder class="col-span-4" />
                <div class="col-span-1 flex justify-center">
                    <span class="block w-px h-full bg-gray-400" />
                </div>
                <!-- <Signup class="col-span-2" /> -->
                <ColorUtils />
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
