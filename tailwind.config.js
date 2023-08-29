/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      boxShadow: {
        'purple-intense': '0 0 25px rgba(233, 30, 99, 0.9)',
        'purple': '0 0 10px rgba(128,0,128, 0.7)',
      },
      fontFamily: {
        "pacifico": ['Pacifico', 'cursive']
    },
    borderWidth: {
      '3': '3px', // Adjust the width as needed
    },
    borderColor: {
      darkGray: '#666', // Change this to your preferred gray color
    },
    borderStyle: {
      dashed: 'dashed',
    },
      animation: {
        blob: "blob 7s infinite",
        "bounce-slow": "bounce-slow 2s ease-in-out infinite", // Add this line for the gentle bounce animation
      },
      keyframes: {
        blob: {
          "0%": {
            transform: "translate(0px, 0px) scale(1)",
          },
          "33%": {
            transform: "translate(30px, -50px) scale(1.1)",
          },
          "66%": {
            transform: "translate(-20px, 20px) scale(0.9)",
          },
          "100%": {
            transform: "tranlate(0px, 0px) scale(1)",
          },
        },
        // Add the keyframes for the gentle bounce animation
        "bounce-slow": {
          "0%, 100%": {
            transform: "translateY(0)",
          },
          "50%": {
            transform: "translateY(-10px)", // Adjust this value to control the bounce height
          },
        },
      },
    },
  },
  plugins: [],
}
