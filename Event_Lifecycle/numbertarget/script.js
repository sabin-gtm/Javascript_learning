let numberOfCircle =  Math.ceil(Math.random()*100);
let numberContainer = document.querySelector('.numberContainer');
let targetValue = document.querySelector('.targetValue');
let scoreValue = document.querySelector('.scoreValue');
let time = document.querySelector('.timer');
let timer = 60;
let target;

for (let i = 0; i < numberOfCircle; i++) {
    let divElem = document.createElement('div')
    divElem.className = 'circle'
    divElem.innerText = Math.ceil(Math.random()*10);
    numberContainer.appendChild(divElem)
}

setInterval(() => {
    if (timer <= 0) {
        numberContainer.innerHTML = `<div class = "gameOver">GAME OVER !!!<br>Score: ${scoreValue.innerText} <br>F5 to try again</div>`
        return
    }
    timer --;
    time.innerText = timer;
}, 1000);


function generateTarget(){
target = Math.ceil(Math.random() * 10)
targetValue.innerText = target;
}

generateTarget();

numberContainer.addEventListener('click', function (event) {
    if(event.target.className === 'circle'){
        let number = Number(event.target.innerText)
        if (target === number) {
        let sv = Number(scoreValue.innerText);
        sv+=10
        scoreValue.innerText = sv;
            generateTarget();
        }
    }
})