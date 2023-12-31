export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'cian-oscuro': '#09B6C2',
        'cian-claro': '#C5E9EA',
        'gris-claro': '#CCDBDB',
        'azul-oscuro': '#026DBB',
        'color-icons': '#4D88AE',
      },
      height: {
        'custom': '72%',
    },
    fontFamily: {
      Inter: ['Inter', 'sans'],
  },
  plugins: [],
}
}
}