let listContainer = document.querySelector(".listContainer");
let addInput = document.querySelector("#addInput");
let addBtn = document.querySelector(".addBtn");
var index = 0;

const list = [
]

function renderList(arr){
    listContainer.innerHTML = "";
    arr.map((obj) => {
    let divElem = document.createElement("div");
    divElem.classList.add("list");
    divElem.innerHTML = `
              <p>${obj.id}&nbsp;&nbsp;&nbsp;${obj.text}</p>
    `
    let btnElem = document.createElement("button");
    btnElem.innerText = "❌";
    divElem.appendChild(btnElem);
    btnElem.onclick = ()=>{
        handleDelete(obj.id);
    }
    listContainer.append(divElem);
});

}
renderList(list);

function handleAdd(){
    let obj = {
        id: ++index,
        text: addInput.value
    }
    list.push(obj); //.unshift for adding to the beginning of the array
    renderList(list);
}

addBtn.addEventListener("click", handleAdd);

function handleDelete (id) {
    let filterList  = list.filter(obj=>{
        return obj.id !== id
    });
    list.length = 0;
    list.push(...filterList); //Updated list here
    renderList(list);
    --index;
}