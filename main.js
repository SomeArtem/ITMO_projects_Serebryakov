import './public/style.css'
//import './reset.css'
import javascriptLogo from './javascript.svg'
import "uno.css"
import Dom from "./src/constants/keys"

//функции поиска элементов
const getDOM=(selector)=>document.querySelector(selector);
const FIND = (container, selector)=>container.querySelector(selector)

//открывает popup
getDOM(Dom.Button.CREATE_BUTTON).onclick=()=>{    
    const DomPopCreateTask=getDOM(Dom.Popup.ID);   
    const CloseButton=FIND(DomPopCreateTask, Dom.Popup.CLOSE_BUTTON);    
    
    DomPopCreateTask.classList.toggle('hidden');
    
    //закрывает popup
    CloseButton.onclick = ()=>{
        DomPopCreateTask.classList.toggle('hidden');
        CloseButton.onclick=null;
    }
}