//строки
// let myf2name=new String('Artemd');
// let year = 1997;
// let isHappy=true;
// let friendname='alexandr';

// console.log(myf2name);
// console.log('John '+'Maxwell '+(year+' '+year))
// console.log(myf2name[3])


//массивы
// let fibonacci=[0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, 233]
// let arr=new Array(10);
// console.log(fibonacci[1], `\n длина массива arr - ${arr.length}`)

//obj
// class User{
//   constructor(name, age){
//     this.name=name
//     this.age=age
//   }
// }

// let user={
//   name:'Vladimir',
//   age:37
// }
// let user2=new User('Volodymir', 50)
// let user3=new User('Shoygoo', 73)
// console.log(user2['name'], user2.age, '\n', user3.name, user3.age, user3?.weight)

// console.log('John Bolton'.slice(0, 3))
// console.log('John Bolton'.substring(0, 3))


//браузерный api
let app=document.body.children[0]
app.textContent='Volodymir'
console.log()

//функции
const DOM = document.getElementById.bind(document)
const domInpName=DOM('inpName')
const domInpSurname=DOM('inpSurname')
const domConResult=DOM('result')
let addResult=add(10,3)

function add(a,b=5){
    const result=a+b
    console.log("a+b: "+result)
    return result
}

console.log('addresult:', {addResult})
console.log(domInpName.value, domInpSurname.value)

domInpName.oninput=oninpchange;
domInpSurname.oninput=oninpchangesur;
let firstname=''
let surname=''
let fullname=''


function oninpchange(e){
    firstname=e.target.value
    //console.log('oninpchange: ',firstname)    
    e.stopPropagation();    
    fullname=firstname+' '+surname
    renderName(fullname)
}
function oninpchangesur(e){
    surname=e.target.value
    //console.dir('onsurchange: ',surname)  
    e.stopPropagation(); 
    
    fullname=firstname+' '+surname
    renderName(fullname)
}

function renderName(f) {
    console.dir(f)
    domConResult.textContent=f    
}