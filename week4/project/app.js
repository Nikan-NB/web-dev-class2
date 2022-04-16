const btn =document.getElementById('btnu');
const btnd =document.getElementById('btnd');
const time =document.getElementById('time');
const start =document.getElementById('start');
const asli =document.getElementById('asli');
const stop =document.getElementById('stop');

let minut = 25;
let second = 1


function timer(){
    second--;
    if(second == 00){
        minut--;
        second = 59
    }
    asli.innerHTML = minut + ':' + second ;
}

btn.addEventListener('click', function(){
    minut++;
    time.innerHTML= minut;
})

btnd.addEventListener('click', function(){
    minut--;
    time.innerHTML= minut;
    if(minut == 1){
        minut = 60
    }
})



start.addEventListener('click', function(){
    asli.innerHTML= minut + ':' + '00';
    const myinterval = setInterval(timer, 1000)
    
    
    stop.addEventListener('click' , function() {
        clearInterval(myinterval);
    })
})


