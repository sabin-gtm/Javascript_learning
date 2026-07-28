let random = document.querySelector('.random');
let apply = document.querySelector('.apply');
let input = document.querySelector('#input');
let current = document.querySelector('.current');
let container = document.querySelector('.container')

const colorArray = ['red','blue','yellow','white','black','pink','tomato','skyblue','purple','lightseagreen','cyan','lightcoral','aqua']


const changeColor = (color)=>{
    container.style.backgroundColor = color;
    current.innerText = color;
}

const handleRandom = ()=>{
    let  rd = Math.floor(Math.random()*10);
     changeColor(colorArray[rd]);
}

const handleApply = ()=>{
    changeColor(input.value);
}


random.addEventListener('click',handleRandom);
apply.addEventListener('click',handleApply);
