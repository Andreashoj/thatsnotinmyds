/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./resources/js/**/*.{vue,js,ts}",
    ],
    theme: {
        extend: {},
    },
    plugins: [],
    safelist: [
        {
            pattern: /^bg-/, // This regular expression will match any class starting with `bg-`
        },
    ],
}
