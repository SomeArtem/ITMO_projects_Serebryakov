import './public/style.css'
//import './reset.css'
import javascriptLogo from './javascript.svg'
import "uno.css"


let popup=document.querySelector('#popupCreateTask')
document.querySelector('#createButton').addEventListener('click', (e)=>{
    popup.classList.toggle('hidden')    
})



document.querySelector('#closeBtn').addEventListener('click', (e)=>{
    popup.classList.toggle('hidden')    
})