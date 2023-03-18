import host from 'vite-plugin-host'



export default {
  plugins: [    
    host(),    
  ],
  build:{
    
  },

  server: {    
    port: 8080,
    },    
}