import host from 'vite-plugin-host'
import UnoCSS from 'unocss/vite'
import presetUno from "unocss/preset-uno"
import presetIcons from '@unocss/preset-icons'
import presetWebFonts from '@unocss/preset-web-fonts'


export default {
  plugins: [    
    host(),
    UnoCSS({
      presets: [
        presetUno(), // disable default preset
        presetIcons({ /* options */ }),
        presetWebFonts({
          provider: 'google', // default provider
          fonts: {
            // these will extend the default theme
            sans: 'Roboto',
            mono: ['Fira Code', 'Fira Mono:400,700'],
            // custom ones
            lobster: 'Lobster',
            delicious_handrawn: [{
              name:'Delicious Handrawn', 
              cursive: true
            }],
            poppins:'Poppins',
            lato: [
              {
                name: 'Lato',
                weights: ['400', '700'],
                italic: true,
              },
              {
                name: 'sans-serif',
                provider: 'none',
              },
            ],
          },
        }),
      ], 
      // rules: [
      //   // your custom rules
      // ],
    }),   
  ],
  build:{
    
  },

  server: {    
    port: 8080,
    },    
}