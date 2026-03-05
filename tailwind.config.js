/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        // 'Inter' for that clean, professional SaaS/Doc aesthetic
        sans: ['Inter', 'ui-sans-serif', 'system-ui'],
        // 'JetBrains Mono' for your code snippets and terminal-style labels
        mono: ['JetBrains Mono', 'ui-monospace', 'SFMono-Regular'],
      },
      backgroundImage: {
        // This creates the subtle "developer doc" grid/dot background
        'dot-pattern': "radial-gradient(circle at 1px 1px, #18181b 1px, transparent 0)",
      },
      backgroundSize: {
        'dot-size': '24px 24px',
      },
    },
  },
  plugins: [],
}