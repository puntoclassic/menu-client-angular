/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./src/**/*.{html,ts}",
    ],
    theme: {
        extend: {},
    },
    safelist: [
        "badge-primary",
        "badge-secondary",
        "badge-info",
        "badge-danger",
        "badge-success"
    ],
    plugins: [
        require('@tailwindcss/forms'),
    ],
}
