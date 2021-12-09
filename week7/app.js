const hazine = document.getElementById('bill');
const rezayat = document.getElementById('service');
const tedad = document.getElementById('people');
const mohasebe = document.getElementById('cal');
const amount = document.getElementById('amount') 


mohasebe.addEventListener('click', function(){
    const hazineNum = hazine.value;
    const rezayatNum = rezayat.value;
    const tedadNum = tedad.value;
    const amountNum = hazineNum * rezayatNum / 100 / tedadNum;
    amount.innerHTML = Math.round(amountNum)
})