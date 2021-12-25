const inp = document.getElementById('identity-num')
const btn = document.getElementById('submit')
const valid = document.getElementById('valid-text')
const dalil = document.getElementById('valid-text2')
console.log(valid)
btn.addEventListener('click', function(e){
    e.preventDefault();
    const credit = inp.value
    let text = ''
    if(check(credit) && zog(credit) && sum(credit) && isnum(credit)){
        text = ''
        dalil.textContent = ''
        valid.textContent = 'Valid';
        valid.style.background = 'green'
    } else {
        valid.textContent = 'InValid';
        valid.style.background = 'red'
        if(!check(credit)){
            text = text + 'Tol kam,'
        }
        if(!zog(credit)){
            text = text + 'Zog Nist,'
        }
        if(!sum(credit)){
            text = text + 'Jam Adad Kam Ast,'
        }
        if(!isnum(credit)){
            text = text + 'Adad Nist,'
        }
    dalil.textContent = text
    }
})

function check(string){
    if(string.length == 16){
        return true;
    }else {
        return false;
    }
}

function zog(adad){
    if(adad % 2 == 0){
        return true;
    } else {
        return false;
    }
}
function sum (adad2){
    let som = 0 ;
    for(let i = 0; i < adad2.length; i++){
        som = som + parseInt(adad2[i])
    }
    if (som > 16 ){
        return true;
    } else {
        return false
    }
}

function isnum (num){
    return !isNaN(num);
}