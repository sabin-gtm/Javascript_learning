let btn = document.querySelector('.btn');
let cBtn = document.querySelector('.cBtn');
let modalContainer = document.querySelector('.modalContainer');

btn.addEventListener('click',()=>{
    modalContainer.style.display = 'flex';
})
cBtn.addEventListener('click',()=>{
    modalContainer.style.display = 'none';
})

modalContainer.addEventListener('click',(object)=>{
    if (object.target.classList.contains('modalContainer')) {
            modalContainer.style.display = 'none';
    }
})

