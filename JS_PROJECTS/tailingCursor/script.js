let smallCursor = document.querySelector('.smallCursor');
let shadowCursor  = document.querySelector('.shadowCursor')

let mousex, mousey,animationId=null,timer = null;

document.addEventListener('mousemove',function (cods) {
    mousex = cods.x;
    mousey = cods.y;
    smallCursor.style.left = `${cods.x}px`;
    smallCursor.style.top = `${cods.y}px`;

    if (!animationId) {
        animateShadowCursor()
    }
    clearTimeout(timer);
    timer = setTimeout(() => {
        cancelAnimationFrame(animationId)
        animationId = null;
    }, 2000);
})

function animateShadowCursor() {
    let currentx =  parseFloat(shadowCursor.style.left) || 0;
    let currenty =  parseFloat(shadowCursor.style.top) || 0;


    let distanceX = mousex - currentx;
    let distanceY = mousey - currenty;

    shadowCursor.style.left = currentx + distanceX * 0.05 + "px"
    shadowCursor.style.top = currenty + distanceY * 0.05 + "px"
console.log(distanceX);

    animationId = requestAnimationFrame(animateShadowCursor)
}