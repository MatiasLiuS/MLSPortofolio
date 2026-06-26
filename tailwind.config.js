// 1. THESE MUST BE AT THE VERY TOP OF THE FILE
const designColor1 = "#08a73b"; 
const designColor2 = "#013e11";

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        bodyFont: ["Poppins", "sans-serif"],
        titleFont: ["Montserrat", "sans-serif"],
      },
      colors: {
        designColor1: designColor1, // Your main vibrant color (Magenta)
        designColor2: designColor2, // Your dark accent color (Deep Purple)
        borderColor: "#ffffff",

        bodyColor: "#141414",
        bodyColor2:"#252525",
        lightText: "#ffffff",
        
        btnBg: '#252239',          
        btnHover: '#2d255a',       
        
        btnLang:'#030304',
        btnGithub: designColor1,      
        btnGithubHover: designColor2, 
        btnTextColor: '#ffffff'
      },
      // 3. Pass the variables safely right into the shadow string
      boxShadow: {
        shadowOne: `10px 10px 19px ${designColor1}, -10px -10px 19px ${designColor2}`,
      },
    },
  },
  plugins: [],
};