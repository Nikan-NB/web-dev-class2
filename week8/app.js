const inp = document.getElementById('identity-num')
const btn = document.getElementById('submit')
const valid = document.getElementById('valid-text')

btn.addEventListener('click', function(e){
    e.preventDefault();
    const credit = inp.value
    console.log(credit);
    console.log(check(credit));
    console.log(zog(credit));
    console.log(sum(credit));
    console.log(isnum(credit));
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
    adad2 = parseInt(adad2)
    for(let i = 0; i < adad2.length; i++){
        som = som + adad2[i]
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