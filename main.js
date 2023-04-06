import './public/style.css'
//import './reset.css'
import javascriptLogo from './javascript.svg'
import "uno.css"

const DOM=(id)=>document.getElementById(id)

const DomTemplateTask=DOM('templateTask')
const DOMTaskColumn=DomTemplateTask.parentNode;


[1,2,3,4].forEach( (item) => {
    const DOMTaskClone=DomTemplateTask.cloneNode(true);
    DOMTaskColumn.prepend(DOMTaskClone);
})


DOMTaskColumn.removeChild(DomTemplateTask)

console.log('Main', DomTemplateTask)