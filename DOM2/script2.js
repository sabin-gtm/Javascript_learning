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

let div = document.querySelector('div');
let p=document.createElement('p');
div.append(p);

p.innerText = 'New Paragraph';
div.append(p);//cannot be done  like this copying append is error

div.prepend(p);
div.after(p);
div.before(p);//moved as in div.append(p) with div.prepend(p)

div.insertAdjacentElement('beforeend', p);

// div.remove(Children);

let elem = document.createElement('div'); 
elem.textContent = "Hello, I am the new element!";
elem.style.color = "red";
elem.style.border='red solid 2px'

let box2 = document.querySelector('#box2');
box2.style.backgroundColor='blue';

let parentNode=box2.parentNode;
parentNode.append(elem); //append works on textNode too

let newElem = document.createElement('div2')
newElem.innerText='Hello Guys !!';

parentNode.replaceChild(newElem, box2)

