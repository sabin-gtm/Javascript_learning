let button = document.querySelector(".firstBtn");

button.onclick = () => {
  console.log("I'm written via js and I have priority.");
};

button.ondblclick = () => {
  console.log("I'm written via js and I have priority. Double Click");
};

button.addEventListener("click", () => {
  console.log("From Event Listner");
});

button.addEventListener("click", () => {
  console.log("From Event Listner 2nd");
});

let fun = function click() {
  console.log("Written seperately On function");
};

button.addEventListener("click", fun);

button.removeEventListener("click", fun);

let name = document.querySelector(".name");
let form = document.querySelector("form");

form.addEventListener('submit', function(e){
    e.preventDefault();
    console.log("Submitted.");
})

