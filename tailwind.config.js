/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class', // add this to enable dark mode
  theme: {
    extend: {
      screens: {
        xsm: "340px",
        sm: "640px",
        md: "768px",
        md2: "800px",
        md3: "941px",
        lg: "1024px",
        lg2: "1180px",
        xl: "1280px",
        "2xl": "1536px",
      },
      colors: {
        // Add your custom color palette here for both light and dark modes
        primary: {
          DEFAULT: "#00796b",
          dark: "#004c40",
        },
        secondary: {
          DEFAULT: "#388e3c",
          dark: "#1b5e20",
        },

        // Add a color scheme for dark mode
        dark: {
          background: '#1c1c1c',
          text: '#f9f9f9'
        }
      }
    }
  },
  plugins: [],
};
