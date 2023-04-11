import './public/style.css'
//import './reset.css'
import javascriptLogo from './javascript.svg'
import "uno.css"
import Dom from "./src/constants/keys"
import RandomString from "./src/utils/stringUtils"
import { randomStr } from '@antfu/utils'

// let names=[];

// if (localStorage.getItem("names")===null){
//     localStorage.setItem("names", JSON.stringify(names));
    
// } else{
//     names = JSON.parse(localStorage.getItem("names"));
// }

// let newMemver=prompt("New member name?");
// names.push(newMemver);
// localStorage.setItem("names", JSON.stringify(names));



let tasks=[];

if (localStorage.getItem("tasks")===null){
    localStorage.setItem("tasks", JSON.stringify(tasks));
    
} else{
    tasks = JSON.parse(localStorage.getItem("tasks"));
}


//функции поиска элементов
const getDOM=(selector)=>document.querySelector(selector);
const FIND = (container, selector)=>container.querySelector(selector);

//функция рендера таска
const AddTask=(ob)=>{    
    //получаем поля темплейта для представления
    const domTaskcontainer= domTask.parentNode;
    const taskView=domTask.cloneNode(true);
    const title = FIND(taskView,Dom.Template.Title);
    const date = FIND(taskView,Dom.Template.Date);    
    const tagContainer = FIND(taskView,Dom.Template.Tag).parentNode;

    title.innerText=ob.title;
    date.innerText=ob.date; 

    //if (ob.tag.length==0) tagContainer.innerHTML='';

    for (let i = 0; i < ob.tag.length; i++) {        
        const tag = FIND(taskView,Dom.Template.Tag).cloneNode(true);
        if (i==0) tagContainer.innerHTML='';
        tag.innerText=ob.tag[i].value;
        tagContainer.appendChild(tag);
    }
    taskView.style.display='block';
    domTaskcontainer.prepend(taskView);    
}

const GetTasks=()=>{
    //tasks = JSON.parse(localStorage.getItem("tasks"));

    tasks.forEach(el => {
        //получаем поля темплейта для представления
        let domTaskcontainer= domTask.parentNode;
        let taskView=domTask.cloneNode(true);
        taskView.style.display='block';
        let title = FIND(taskView,Dom.Template.Title);
        let date = FIND(taskView,Dom.Template.Date);    
        let tagContainer = FIND(taskView,Dom.Template.Tag).parentNode;



        //присваиваем строчные значения 
        title.innerText=el.title;
        date.innerText=el.date;
        //присваиваем сложные значения
        for (let i = 0; i < el.tag.length; i++) {        
            const tag = FIND(taskView,Dom.Template.Tag).cloneNode(true);
            if (i==0) tagContainer.innerHTML='';
            //tag.innerText=el.tag[i].value;
            tag.innerText=el.tag[i];
            tagContainer.appendChild(tag);
                  
        }    
        domTaskcontainer.prepend(taskView);
    });

   
}



//Темплейт таска
const domTask = getDOM(Dom.Template.TASK);
const Counter = getDOM(Dom.Template.TaskCounter);

Counter.innerHTML=tasks.length;

GetTasks();



const tasks2=[];
const tags=['работа','дом','отдых','web','спорт','хобби','финансы'];

class TaskVO {
    // методы класса
    constructor(title, date, tag) {
        this.title=title;
        this.date=date;
        this.tag=tag;
    }
}

//открывает popup
getDOM(Dom.Button.CREATE_BUTTON).onclick=()=>{    
    const DomPopCreateTask=getDOM(Dom.Popup.ID);   
    const CloseButton=FIND(DomPopCreateTask, Dom.Popup.CLOSE_BUTTON);   
    const ConfirmButton=FIND(DomPopCreateTask, Dom.Popup.CONFIRM_BUTTON);
    const tagSelect=FIND(DomPopCreateTask, Dom.Popup.INPUT_TAG);

    //чистим селект и вставляем свои теги
    tagSelect.innerHTML='';
    tags.forEach(element => {
        const newTag = new Option(element, element);
        tagSelect.appendChild(newTag);       
    });
    
    //закрывают popup
    CloseButton.onclick = ()=>{
        DomPopCreateTask.classList.toggle('hidden');
        CloseButton.onclick=null;
        ConfirmButton.onclick=null;
    }
    DomPopCreateTask.onclick = (e)=>{
        if (e.target==DomPopCreateTask) {
            DomPopCreateTask.classList.toggle('hidden')
            CloseButton.onclick=null
            ConfirmButton.onclick=null
        }

    }
    //изменяет массив тасков и закрывает popup
    ConfirmButton.onclick = ()=>{
        //получаем введенные в попап данные 
        const InputTitle=FIND(DomPopCreateTask, Dom.Popup.INPUT_TITLE).value;
        const InputDate=FIND(DomPopCreateTask, Dom.Popup.INPUT_DATE).value;
        const InputTag=FIND(DomPopCreateTask, Dom.Popup.INPUT_TAG).selectedOptions;
        const InputTag2=[];


        for (let i = 0; i < InputTag.length; i++) {
            InputTag2[i]=InputTag[i].innerText;            
        }        

        if (InputTitle.trim()== '' || InputDate.trim()== '' || InputTag.length == 0) {
            alert('Чо, о**ел? Всё заполняй! :D');
        }else{
            //создаём таск и кладём в массив тасков
            const NewTask=new TaskVO(InputTitle, InputDate, InputTag);
            const NewTask2=new TaskVO(InputTitle, InputDate, InputTag2);
            
            tasks.push(NewTask2);
            localStorage.setItem("tasks", JSON.stringify(tasks));
            AddTask(NewTask);
            Counter.innerHTML=tasks.length;
            
            //закрываем попап, чистим листенеры
            DomPopCreateTask.classList.toggle('hidden');
            CloseButton.onclick=null;
            ConfirmButton.onclick=null;
        }

        
        FIND(DomPopCreateTask, Dom.Popup.INPUT_DATE).value=null;
        FIND(DomPopCreateTask, Dom.Popup.INPUT_TAG).selectedOptions=null;
    }    
    //снимает с попапа сокрытие 
    DomPopCreateTask.classList.toggle('hidden');
}