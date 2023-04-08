import './public/style.css'
//import './reset.css'
import javascriptLogo from './javascript.svg'
import "uno.css"
import Dom from "./src/constants/keys"
import RandomString from "./src/utils/stringUtils"
import { randomStr } from '@antfu/utils'

//функции поиска элементов
const getDOM=(selector)=>document.querySelector(selector);
const FIND = (container, selector)=>container.querySelector(selector)

const domTask = getDOM(Dom.Template.TASK)

const tasks=[]

class TaskVO {
    // методы класса
    constructor(title, x, y) {
        this.title=title;
        this.x=x;
        this.y=y;
    }
  }

//открывает popup
getDOM(Dom.Button.CREATE_BUTTON).onclick=()=>{    
    const DomPopCreateTask=getDOM(Dom.Popup.ID);   
    const CloseButton=FIND(DomPopCreateTask, Dom.Popup.CLOSE_BUTTON);   
    const ConfirmButton=FIND(DomPopCreateTask, Dom.Popup.CONFIRM_BUTTON);   
    
    DomPopCreateTask.classList.toggle('hidden');
    
    //закрывает popup
    CloseButton.onclick = ()=>{
        DomPopCreateTask.classList.toggle('hidden');
        CloseButton.onclick=null;
    }
    ConfirmButton.onclick = ()=>{
        const TaskVOo=new TaskVO(RandomString(12), Date.now(),'asfasf');

        const taskView=domTask.cloneNode(true)
        const title = FIND(taskView,Dom.Template.Title);
        title.innerText=TaskVOo.title;
        domTask.parentNode.prepend(taskView)

        tasks.push(TaskVOo);
        console.log(tasks);        
    }
}