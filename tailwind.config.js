/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ['./index.html', './src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        LidereAzul62: '#3B4AFF',
        LiderePreto10: '#ECECEC',
        LiderePreto100: '#000000',
        AzulEscuro: '#0000C9',
        Vermelho95: '#FFEAE5',
        Vermelho85: '#FFC1B3',
        Vermelho35: '#B22400',
        Cinza: '#8B99A7',
      },
      fontFamily: {
        campuni: ['Campuni', 'sans-serif'],
        alegreya: ['Alegreya Sans', 'sans-serif'],
        inter: ['Inter', 'sans-serif'],
        figtree: ['Figtree', 'serif'],
      },
    },
  },
  plugins: [],
};
