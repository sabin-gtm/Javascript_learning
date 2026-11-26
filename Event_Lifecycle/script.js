// let grandparent = document.querySelector(".grand-parent");
// let parent = document.querySelector(".parent");
// let child = document.querySelector(".child");

// // child.addEventListener(
// //   "click",
// //   function name() {
// //     alert("Yeh Kya ho Gaya.Child pe");
// //   },
// //   true,
// // );
// // parent.addEventListener(
// //   "click",
// //   function name() {
// //     alert("Yeh Kya ho Gaya.Parent pe");
// //   },
// //   true,
// // );
// // grandparent.addEventListener(
// //   "click",
// //   function name() {
// //     alert("Yeh Kya ho Gaya.Grandparent pe");
// //   },
// //   true,
// // );

// // grandparent.addEventListener("click", function (){
// //   alert("Hello This is not true for grandparent")
// // })
// //Catches when it is reversed up

// // grandparent.addEventListener("click", function (event) {
// //   console.log(event.target);
// //   console.log(event.currentTarget);
// // })

// // parent.addEventListener("click", function (event) {
// //   console.log(event.target);
// //     console.log(event.currentTarget);
// // })

// // child.addEventListener("click", function (event) {
// //   console.log(event.target);
// //     console.log(event.currentTarget);
// // })

// //  parent.addEventListener("click", function (event) {
// //   console.log(event.target);
// //     console.log(event.currentTarget);
// //     console.log(this);
// // })

// grandparent.addEventListener("click", function (event) {
//   console.log(event.target);
//   console.log(event.currentTarget);
// });

// parent.addEventListener("click", function (event) {
//   console.log(event.target);
//   console.log(event.currentTarget);
//   event.stopPropagation(); //event.propagation() stops the further propagation of  event listner to any parent or child, But to own another eventlistner
//   //  ->event.stopImmediatePropagation() -> stops the further propagation of  event listner to any parent or child, Not even own another eventlistner
// });

// child.addEventListener("click", function (event) {
//   console.log(event.target);
//   console.log(event.currentTarget);
// });

let container = document.querySelector('.container')

container.addEventListener('click',function (event) {
  if (event.target.classList.contains('box')) {
    console.log(event.target.innerText);
  }
})

