<script setup>
import { Link } from '@inertiajs/vue3'
import { ref } from 'vue'

const count = ref(0)
</script>

<template>
    <main>
        <h1 class="text-3xl font-bold underline">
            Hello world!
        </h1>

        <header>
            <Link href="/">Home</Link>
            <Link href="/about">About</Link>
            <Link href="/contact">Contact</Link>
            hey there!

            can i update??
            YOOOo

            <button class="text-blue-500" @click="count += 1">adder</button>
            {{ count }}
        </header>
        <article>
            <slot />
        </article>
    </main>
</template>
