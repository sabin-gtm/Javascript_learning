// let button = document.querySelector(".firstBtn");

// button.onclick = () => {
//   console.log("I'm written via js and I have priority.");
// };

// button.ondblclick = () => {
//   console.log("I'm written via js and I have priority. Double Click");
// };

// button.addEventListener("click", () => {
//   console.log("From Event Listner");
// });

// button.addEventListener("click", () => {
//   console.log("From Event Listner 2nd");
// });

// let fun = function click() {
//   console.log("Written seperately On function");
// };

// button.addEventListener("click", fun);

// button.removeEventListener("click", fun);

// let name = document.querySelector(".name");
// let form = document.querySelector("form");

// form.addEventListener('submit', function(e){
//     e.preventDefault();
//     console.log("Submitted.");
// })

//QUESTION 1

// let dec = document.querySelector('.decrement');
// let inc = document.querySelector('.increment');
// let count = document.querySelector('.counter');

// dec.addEventListener('click',()=>{
//   count.innerText=(Number(count.innerText) -1);
// })

// inc.addEventListener('click',()=>{
//   count.innerText=(Number(count.innerText) + 1);
// })

//Question 2

let form = document.querySelector("form");
let name = document.querySelector("#name");
let email = document.querySelector("#email");
let submit = document.querySelector(".submit");
let body = document.querySelector("body");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  if (!name.value || !email.value) {
    alert("Fill the form");
    return;
  }

let div = document.createElement('div');
div.innerHTML = `
<p>${name.value}</p>
<p>${email.value}</p>
`
body.append(div);

});

