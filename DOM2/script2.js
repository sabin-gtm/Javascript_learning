// let h1 = document.querySelector('h1')
// console.log(h1.tagName); //returns tag
// console.log(h1.nodeName);//returns tagname, text, node, comment node etc..
// console.log(h1.firstChild.nodeName);

// const { Children } = require("react");

// console.log(h1.innerText);
// console.log(h1.textContent);

// h1.innerText = 'My surname is gautam'
// h1.textContent = 'My                     \nsurname is gautam'
// console.log(h1.innerText);
// console.log(h1.textContent);

// h1.innerHTML = '<p>Hello </p>'
// console.log(h1.innerHTML)

///inserting elements

// let div = document.querySelector('div');
// let p=document.createElement('p');
// div.append(p);

// p.innerText = 'New Paragraph';
// div.append(p);//cannot be done  like this copying append is error

// div.prepend(p);
// div.after(p);
// div.before(p);//moved as in div.append(p) with div.prepend(p)

// div.insertAdjacentElement('beforeend', p);

// // div.remove(Children);

// let elem = document.createElement('div');
// elem.textContent = "Hello, I am the new element!";
// elem.style.color = "red";
// elem.style.border='red solid 2px'

// let box2 = document.querySelector('#box2');
// box2.style.backgroundColor='blue';

// let parentNode=box2.parentNode;
// parentNode.append(elem); //append works on textNode too

// let newElem = document.createElement('div')
// newElem.innerText='Hello Guys !!';

// parentNode.replaceChild(newElem, box2)

/*

//Attributes

let div2 = document.querySelector('.box');
console.log(div2.attributes.class.value);
console.log(div2.getAttribute('title'));

div2.setAttribute('title', 'This is a box');
console.log(div2.title);

//Question 1

let para = document.createElement('p');
para.innerText = 'I do not love you.'
let body = document.querySelector('body');
// para.style.backgroundColor = 'yellow';
// para.style.color = 'red';
para.setAttribute('style', 'background-color: yellow; color: red;');
body.append(para);
console.log(para);

//Question 2

let button = document.createElement('button');
button.innerText = 'Click Me';
para.prepend(button);
// console.log(button);

//Question 3

let div3 = document.querySelector('.three');
div3.setAttribute('class', `${div3.getAttribute('class')} three2`)

 //Question 4

 function changeTagName(oldNode, newTagname){
    if(oldNode instanceof Element){
        // console.log('Old Node is an Element');
        let para = document.createElement(newTagname);
        para.innerText = oldNode.innerText;

        for(let attr of oldNode.attributes){
           console.log(attr.name, attr.value);
           para.setAttribute(attr.name, attr.value);

        }

        oldNode.replaceWith(para);
 }
 else{
    console.error('Old Node is not an Element');
 }
}
 changeTagName(div3, 'h1');

*/

let div = document.querySelector("div");
// div.setAttribute('class','redbg');
// div.setAttribute('style','background-color:red');

// div.style.backgroundColor = "blue";
// div.style.fontSize = '50px';

// div.style.cssText ='color:red; font-size:60px;';

// div.className = 'redbg';

// div.classList.add('redbg') // it does not replae insted adds also have .remove(), .toggle()[If not adds if yes removes] and more.

let button = document.querySelector('button');
let body = document.querySelector('body');
let theme = 'light';
button.addEventListener('click',()=>{
   body.classList.toggle('dark');
});


