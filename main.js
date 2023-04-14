import './public/style.css'
import javascriptLogo from './javascript.svg'
import "uno.css"
import Dom from "./src/constants/keys"
import RandomString from "./src/utils/stringUtils"
import { randomStr } from '@antfu/utils'


const KEY_LOCAL_TASKS = 'tasks';


class TaskVO {
    // методы класса
    constructor(title, date, tag) {
        this.title=title;
        this.date=date;
        this.tag=tag;
    }
}

let tasks=[];
const tags=['работа','дом','отдых','web','спорт','хобби','финансы'];
const domTask = getDOM(Dom.Template.TASK);
const TaskCounter = getDOM(Dom.Template.TaskCounter);
getDataFromStorage();
RenderTasks();

//открывает popup
getDOM(Dom.Button.CREATE_BUTTON).onclick=()=>{    
    const DomPopCreateTask=getDOM(Dom.Popup.ID);   
    const CloseButton=FIND(DomPopCreateTask, Dom.Popup.CLOSE_BUTTON);   
    const ConfirmButton=FIND(DomPopCreateTask, Dom.Popup.CONFIRM_BUTTON);
    const tagSelect=FIND(DomPopCreateTask, Dom.Popup.INPUT_TAG);
    
    DynamicSelect();    
    //закрывают popup
    CloseButton.onclick = ClosePopUp;
    DomPopCreateTask.onclick = (e) => {
      if (e.target == DomPopCreateTask) ClosePopUp();
    };

    //изменяет массив тасков и закрывает popup
    ConfirmButton.onclick = ()=>{
        //получаем введенные в попап данные 
        const InputTitle=FIND(DomPopCreateTask, Dom.Popup.INPUT_TITLE);
        const InputDate=FIND(DomPopCreateTask, Dom.Popup.INPUT_DATE);
        const InputTag=FIND(DomPopCreateTask, Dom.Popup.INPUT_TAG).selectedOptions;
        const InputTag2=[];

        for (let i = 0; i < InputTag.length; i++) {
            InputTag2[i]=InputTag[i].innerText;            
        }        

        if (InputTitle.value.trim()== '' || InputDate.value.trim()== '' || InputTag.length == 0) {
            alert('Чо, о**ел? Всё заполняй! :D');
        }else{
            //создаём таск и кладём в массив тасков
            const NewTask=new TaskVO(InputTitle.value, InputDate.value, InputTag);
            const NewTask2=new TaskVO(InputTitle.value, InputDate.value, InputTag2);
            
            tasks.push(NewTask2);
            localStorage.setItem(KEY_LOCAL_TASKS, JSON.stringify(tasks));
            AddTask(NewTask);
            TaskCounter.innerHTML=tasks.length;

            ClosePopUp();
            InputTitle.value=null;
            InputDate.value=null;
        }
    }
    
    //закрывает попап, чистит листенеры
    function ClosePopUp() {
        DomPopCreateTask.classList.toggle('hidden');
        CloseButton.onclick=null;
        ConfirmButton.onclick=null;        
    }
    //чистит селект и вставляет теги из tags
    function DynamicSelect() {
        tagSelect.innerHTML='';
        tags.forEach(element => {
            const newTag = new Option(element, element);
            tagSelect.appendChild(newTag);       
        });        
    }
    //снимаем с попапа сокрытие 
    DomPopCreateTask.classList.toggle('hidden');
}


// полчаем данные из LS
function getDataFromStorage() {
    let arr=localStorage.getItem(KEY_LOCAL_TASKS);
    if (arr===null){
        localStorage.setItem(KEY_LOCAL_TASKS, JSON.stringify(tasks));        
    } else{
        tasks = JSON.parse(arr);
    }    
}

//функции поиска элементов
function getDOM(selector) {
    console.log('найден через getDOM:', document.getElementById(selector))
    return document.getElementById(selector);        
}

function FIND(container, selector) {
    console.log('найден через FIND:', container.querySelector(`[data-id="${selector}"]`))
    return container.querySelector(`[data-id="${selector}"]`);
    
}

//функция рендера таска
function AddTask(ob) {
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

//функция рендера тасков
function RenderTasks() {    
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
    TaskCounter.innerHTML=tasks.length;  
}

