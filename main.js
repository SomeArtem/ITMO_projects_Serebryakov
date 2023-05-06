const App=document.getElementsByClassName('App')[0];

//настройки
const PIXEL_SIZE=50;
const PIXEL_COLOR_2='black';
const PIXEL_COLOR_1='red';
const MONSTER_SIZE=6
const ROWPART_SIZE=MONSTER_SIZE/2;

const Colors=[];
let ID=0;



const CreateBlock = (blockSize, blockColor, blockShiftX) => {
    const block=document.createElement('div');
    block.style.backgroundColor=blockColor;
    block.style.width= block.style.height=`${blockSize}px`;
    block.style.position='absolute';
    block.style.left=`${blockShiftX}px`;
    block.id=ID++;
    App.appendChild(block)
    // Arr.push(block);
}

const ColorSwitcher = () =>{
    return Math.random()>0.5 ? PIXEL_COLOR_1 : PIXEL_COLOR_2
}

const CreateRowPart = (startPosition) => {
    for (let i = 0; i < ROWPART_SIZE; i++) {
        randomColor=ColorSwitcher();
        Colors.push(randomColor);
        CreateBlock(PIXEL_SIZE, randomColor, startPosition+PIXEL_SIZE*i);
    }
}

CreateRowPart(0);
CreateRowPart(ROWPART_SIZE*PIXEL_SIZE);

let ArrBackPart=Colors.slice(0,Colors.length/2).reverse()
console.log(ArrBackPart)
Colors.splice(Colors.length/2,Colors.length/2,...ArrBackPart)

for (let i = 0; i < Colors.length; i++) {
    const element = Colors[i];
    const blockk= document.getElementById(i);
    blockk.style.backgroundColor=element;
    App.appendChild(blockk);
}

// const CreateRow=()=>{
//     CreateRowPart(0);
//     CreateRowPart(ROWPART_SIZE*PIXEL_SIZE);
//     Arr.push(Arr.reverse())
//     for (let i = 0; i < Arr.length; i++) {
//         const element = Arr[i];

//         App.appendChild(element)
//         console.log(element.style.left)   
        
//     }
// }

// CreateRow()
// console.log(Arr);





// console.log(App)