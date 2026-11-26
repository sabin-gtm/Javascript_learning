let listContainer = document.querySelector(".listContainer");

listContainer.addEventListener("click", (event) => {
  if (event.target.classList.contains("listItem")) {
    if (event.target.style.textDecoration === "none") {
      event.target.style.textDecoration = "line-through";
    }
    else{
        event.target.style.textDecoration = "none";
    }
  }
});

 