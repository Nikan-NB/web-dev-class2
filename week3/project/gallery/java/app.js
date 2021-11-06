const img1 =document.getElementById('1');
const img2 =document.getElementById('2');
const img3 =document.getElementById('3');
const img4 =document.getElementById('4');
const img5 =document.getElementById('5');
const img6 =document.getElementById('6');
const modal =document.getElementById('image');

img1.addEventListener('click' , function(){
    modal.src = 'image/' + '1' + '.jpg';
})

img2.addEventListener('click' , function(){
    modal.src = 'image/' + '2' + '.jpg';
})

img3.addEventListener('click' , function(){
    modal.src = 'image/' + '3' + '.jpg';
})

img4.addEventListener('click' , function(){
    modal.src = 'image/' + '4' + '.jpg';
})

img5.addEventListener('click' , function(){
    modal.src = 'image/' + '5' + '.jpg';
})

img6.addEventListener('click' , function(){
    modal.src = 'image/' + '6' + '.jpg';
})