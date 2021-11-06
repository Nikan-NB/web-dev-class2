const img = document.getElementById("img");
const img2 = document.getElementById("img2");
let step =  -300 ; 
let step2 = screen.width; 
setInterval(cat ,10);
setInterval(cat2 ,10);


function cat() {
    step++
    img.style.left =`${step}px`
    // console.log(step)
    if(step == screen.width){
        step = -300;
        // console.log(step)
    }
}
function cat2() {
    step2--
    img2.style.left =`${step2}px`
    console.log(step2)
    if(step2 == -300){
        step2 = screen.width;
        console.log(step2)
    }
}




