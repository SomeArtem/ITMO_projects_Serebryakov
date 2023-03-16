import host from 'vite-plugin-host'



export default {
  plugins: [    
    host(),    
  ],

  server: {    
    port: 8080,
    },    
}