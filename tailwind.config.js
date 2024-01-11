/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        linkscolor:'#A0138E',
        activecl:'#4A7C82',
        homebtn:'#4B7D82',
        landingbtn:'#7AB68B',
        servicesbg:'#81DEAE',
        primary: "#304A4D",
        bgsecondary: "#D3D9DA",
        btncolor: "#81decd",
        footerbg:'#d8ddde',
        footerbtn:'#D8641E',
        abouttext:'#CBD2D3',
      },
      fontFamily: {
        prompt:'Prompt',
        novamono: ['Nova Square'],
        raleway: ['Raleway'],
        spacegrotesk: ['Space Grotesk'],
        helvetica: ['Helvetica W01 Roman'],
        lato: ['Lato'],
        spinnaker: ['Spinnaker'],
      },
    },
  },
  plugins: [],
};
