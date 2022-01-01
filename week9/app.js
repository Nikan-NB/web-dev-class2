const url = "https://randomuser.me/api";
const aks = document.getElementById("image");
const naam = document.getElementById("name");
const locate = document.getElementById("location");
const adres = document.getElementById("adress");
const em = document.getElementById("em");
const age = document.getElementById("age");
const cel = document.getElementById("cel");
const ref = document.getElementById("ref");

fetch(url)
  .then(function (response) {
    return response.json();
  })
  .then(function (data) {
    aks.src = data.results[0].picture.large;
    naam.innerHTML = data.results[0].name.title + ' ' + data.results[0].name.first + ' ' + data.results[0].name.last;
    locate.innerHTML = data.results[0].location.city + ',' + data.results[0].location.country;
    adres.innerHTML = data.results[0].location.street.name;
    em.innerHTML = data.results[0].email;
    age.innerHTML = data.results[0].dob.age;
    cel.innerHTML = data.results[0].cell;
    console.log(data.results);
  });


ref.addEventListener('click', function(){
  fetch(url)
  .then(function (response) {
    return response.json();
  })
  .then(function (data) {
    aks.src = data.results[0].picture.large;
    naam.innerHTML = data.results[0].name.title + ' ' + data.results[0].name.first + ' ' + data.results[0].name.last;
    locate.innerHTML = data.results[0].location.city + ',' + data.results[0].location.country;
    adres.innerHTML = data.results[0].location.street.name;
    em.innerHTML = data.results[0].email;
    age.innerHTML = data.results[0].dob.age;
    cel.innerHTML = data.results[0].cell;
    console.log(data.results);
  });

})

