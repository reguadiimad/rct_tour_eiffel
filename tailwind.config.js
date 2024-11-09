module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}", // Add this line
  ],
  theme: {
    extend: {
      colors: {
        'custom-red': '#e54c5e',
        'custom-blue': '#6369e2',
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },

      animation: {
        'fast-pulse': 'pulse 0.1s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      },
    },
  },
  plugins: [],
};
