<script setup>
import ColorFinder from '../components/ColorFinder.vue'
import Signup from '../components/Signup.vue'
defineProps({
    user: Object,
})
</script>

<template>
    <main class="grid grid-cols-10 bg-gray-800 h-full">
        <div class="col-start-3 col-span-6">
            <h1 class="text-5xl font-black text-white text-center mt-36">
                Find the perfect color match without leaving your design.
            </h1>

            <div class="grid grid-cols-7 mt-20">
                <Signup class="col-span-2" />

                <div class="col-span-1 flex justify-center">
                    <span class="block w-px h-full bg-gray-400" />
                </div>

                <ColorFinder class="col-span-4" />
            </div>
        </div>
    </main>
</template>
