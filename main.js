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
// domTask.remove();

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
        ConfirmButton.onclick=null;
    }
    ConfirmButton.onclick = ()=>{
        const InputTitle=FIND(DomPopCreateTask, Dom.Popup.INPUT_TITLE).value;
        const InputDate=FIND(DomPopCreateTask, Dom.Popup.INPUT_DATE).value;
        const InputTag=FIND(DomPopCreateTask, Dom.Popup.INPUT_TAG).value;
       
        
        
        const TaskVOo=new TaskVO(InputTitle, InputDate, InputTag);
        tasks.push(TaskVOo);

        const taskView=domTask.cloneNode(true)

        const title = FIND(taskView,Dom.Template.Title);
        const date = FIND(taskView,Dom.Template.Date);
        const tag = FIND(taskView,Dom.Template.Tag);

        title.innerText=TaskVOo.title;
        date.innerText=TaskVOo.x;
        tag.innerText=TaskVOo.y;

        domTask.parentNode.prepend(taskView)

        
        console.log(tasks);        
    }
}