/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },
    colors: {
      "white": '#FFFFFF',
      "primary-cyan": 'hsl(180, 66%, 49%)',
      "primary-dark-violet": "hsl(257, 27%, 26%)",
      "secondary-red": "hsl(0, 87%, 67%)",
      "user-neutral-gray": "hsl(0, 0%, 90%)",
      "neutral-gray-violet": "hsl(257, 7%, 63%)",
      "neutral-dark-blue": "hsl(255, 11%, 22%)",
      "neutral-dark-violet": "hsl(260, 8%, 14%)"
    }
  },
  plugins: [],
}
