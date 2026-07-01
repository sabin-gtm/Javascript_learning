let a = document.getElementsByTagName('div')
console.log(a);

console.log(document.getElementById('h1'));

console.log(document.getElementsByClassName('box'));

let b=document.querySelector('div')
console.log(b);

let c=document.querySelectorAll('div')
console.log(c);

let d=document.querySelectorAll('.box')
console.log(d);

let e = document.querySelector('#h1') // it gets multiple id which is basically html error does not recommanded to use
console.log(e);

let child = document.querySelector('.child')
console.log(child);

console.log(child.firstChild);
console.log(child.lastChild);
console.log(child.children);
console.log(child.childNodes);
