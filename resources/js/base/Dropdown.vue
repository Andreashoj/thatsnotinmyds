<script setup lang="ts">
import {
    Listbox,
    ListboxButton,
    ListboxOptions,
    ListboxOption,
} from '@headlessui/vue'
import { CheckIcon, ChevronUpDownIcon } from '@heroicons/vue/20/solid'

defineProps({
    options: Array as () => { name: string; value: string }[],
})

const selected = defineModel({ type: Object as () => { name: string, value: string } })

</script>
<template>
    <Listbox v-model="selected">
        <div class="relative">
            <ListboxButton
                class="relative w-full cursor-default rounded bg-white py-2 pl-3 pr-10 text-left shadow-md focus:outline-none  focus-visible:ring-2 focus-visible:ring-white/75 focus-visible:ring-offset-2 focus-visible:ring-offset-orange-300 sm:text-sm">
                <span class="block truncate">{{ selected.name }}</span>
                <span class="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2">
                    <ChevronUpDownIcon class="h-5 w-5 text-gray-400" aria-hidden="true" />
                </span>
            </ListboxButton>

            <transition leave-active-class="transition duration-100 ease-in" leave-from-class="opacity-100"
                leave-to-class="opacity-0">
                <ListboxOptions
                    class="absolute mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black/5 focus:outline-none sm:text-sm z-50">
                    <ListboxOption v-slot="{ active, selected }" v-for="option in options" :key="option.name"
                        :value="option" as="template">
                        <li :class="[
                            active ? 'bg-blue-100' : 'text-gray-900',
                            'relative cursor-default select-none py-2 px-4',
                        ]">
                            <span v-if="selected" class="absolute inset-y-0 right-4 flex items-center pl-3">
                                <CheckIcon class="h-4 w-4 fill-gray-700" aria-hidden="true" />
                            </span>
                            <span :class="[
                                selected ? 'font-medium' : 'font-normal',
                                'block truncate',
                            ]">{{ option.name }}</span>
                        </li>
                    </ListboxOption>
                </ListboxOptions>
            </transition>
        </div>
    </Listbox>
</template>

