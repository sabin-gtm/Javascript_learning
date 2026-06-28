//DOM -> Document Object Model

let h1 = document.querySelector("h1");
h1.innerHTML = "I'm Sabin Gautam";
h1.style.backgroundColor = "blue";
h1.style.color = "yellow";

let p = document.querySelector("p");
p.innerHTML = "My name is Sabin Gautam";
h1.addEventListener("click", () => {
  console.log("alpha");
  h1.style.backgroundColor = "green";
  h1.style.color = "purple";
  h1.innerHTML = "Html change vayo";
});


let button1= document.querySelector(".Off");
button1.addEventListener('click',()=>{
  console.log("Off Mode");
  p.style.scale='1.1';
})

let button2=document.querySelector(".On");
button2.addEventListener('click',()=>{
  console.log("On Mode");
  p.style.scale='0.9';
})

