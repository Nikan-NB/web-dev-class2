const audio = document.getElementById('audio')
const audio2 = document.getElementById('2')
const audio3 = document.getElementById('3')
const audio4 = document.getElementById('4')
const audio5 = document.getElementById('5')
const audio6 = document.getElementById('6')
const audio7 = document.getElementById('7')
const audio8 = document.getElementById('8')
const audio9 = document.getElementById('9')
const audio10 = document.getElementById('10')
const audio11 = document.getElementById('11')
const audio12 = document.getElementById('12')
const btn = document.getElementById('a')
const btn2 = document.getElementById('b')
const btn3 = document.getElementById('c')
const btn4 = document.getElementById('d')
const btn5 = document.getElementById('e')
const btn6 = document.getElementById('f')
const btn7 = document.getElementById('g')
const btn8 = document.getElementById('h')
const btn9 = document.getElementById('i')
const btn10 = document.getElementById('j')
const btn11 = document.getElementById('k')
const btn12 = document.getElementById('l')



btn.addEventListener('click',function(){
    audio.currentTime = 0 ;
    audio.play();
})
   

btn2.addEventListener('click',function(){
    audio2.currentTime = 0 ;
    audio2.play();
})


btn3.addEventListener('click', function(){
    audio3.currentTime = 0 ;
    audio3.play();
})

btn4.addEventListener('click', function(){
    audio4.currentTime = 0 ;
    audio4.play();
})

btn5.addEventListener('click', function(){
    audio5.currentTime = 0 ;
    audio5.play();
})

btn6.addEventListener('click', function(){
    audio6.currentTime = 0 ;
    audio6.play();
})

btn7.addEventListener('click', function(){
    audio7.currentTime = 0 ;
    audio7.play();
})


btn8.addEventListener('click', function(){
    audio8.currentTime = 0 ;
    audio8.play();
})

btn9.addEventListener('click', function(){
    audio9.currentTime = 0 ;
    audio9.play();
})

btn10.addEventListener('click', function(){
    audio10.currentTime = 0 ;
    audio10.play();
})

btn11.addEventListener('click', function(){
    audio11.currentTime = 0 ;
    audio11.play();
})

btn12.addEventListener('click', function(){
    audio12.currentTime = 0 ;
    audio12.play();
})

document.addEventListener('keydown',function(e){
    if(e.key == 'a'){
        audio.currentTime = 0 ;
        audio.play();
        console.log('ok')
    }
    else if(e.key == 's'){
        audio2.currentTime = 0 ;
        audio2.play();
    }
    else if(e.key == 'd'){
        audio3.currentTime = 0 ;
        audio3.play();
    }
    else if(e.key == 'f'){
        audio4.currentTime = 0 ;
        audio4.play();
    }
    else if(e.key == 'g'){
        audio5.currentTime = 0 ;
        audio5.play();
    }
    else if(e.key == 'h'){
        audio6.currentTime = 0 ;
        audio6.play();
    }
    else if(e.key == 'j'){
        audio7.currentTime = 0 ;
        audio7.play();
    }
    else if(e.key == 'k'){
        audio8.currentTime = 0 ;
        audio8.play();
    }
    else if(e.key == 'l'){
        audio9.currentTime = 0 ;
        audio9.play();
    }
    else if(e.key == 'z'){
        audio10.currentTime = 0 ;
        audio10.play();
    }
    else if(e.key == 'x'){
        audio11.currentTime = 0 ;
        audio11.play();
    }
    else if(e.key == 'c'){
        audio12.currentTime = 0 ;
        audio12.play();
    }
})