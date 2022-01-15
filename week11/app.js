const container = document.getElementById("cont");
const btn = document.getElementById("new");
const url = "https://randomuser.me/api";

btn.addEventListener("click", function () {
  fetch(url)
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      console.log(data);
      const item = document.createElement("div");
      item.id = "di";
    //   document.getElementById("di").style.display = '';
      const bt = document.createElement("button");
      bt.innerHTML = "Delete";  
      const aks = document.createElement("img");
      aks.className = "img";
      aks.src = data.results[0].picture.large;
      const span = document.createElement("span");
      span.innerHTML = "Name: ";
      const para = document.createElement("p");
      para.className = "obj para";
      para.innerHTML =
        data.results[0].name.title +
        " " +
        data.results[0].name.first +
        " " +
        data.results[0].name.last;
      const span2 = document.createElement("span");
      span2.innerHTML = "Location: ";
      const para2 = document.createElement("p");
      para2.className = "obj para2";
      para2.innerHTML =
        data.results[0].location.city + "," + data.results[0].location.country;
      const adres = document.createElement("span");
      adres.innerHTML = "Adress: ";
      const para3 = document.createElement("p");
      para3.innerHTML = data.results[0].location.street.name;
      para3.className = "obj para3";
      const email = document.createElement("span");
      email.innerHTML = "Email: ";
      const para4 = document.createElement("p");
      para4.innerHTML = data.results[0].email;
      para4.className = "obj para4";
      const age = document.createElement("span");
      age.innerHTML = "Age: ";
      const para5 = document.createElement("p");
      para5.innerHTML = data.results[0].dob.age;
      para5.className = "obj para5";
      const cell = document.createElement("span");
      cell.innerHTML = "Cell: ";
      const para6 = document.createElement("p");
      para6.innerHTML = data.results[0].cell;
      para6.className = "obj para6";

      item.appendChild(bt);
      item.appendChild(aks);
      item.appendChild(span);
      item.appendChild(para);
      item.appendChild(span2);
      item.appendChild(para2);
      item.appendChild(adres);
      item.appendChild(para3);
      item.appendChild(email);
      item.appendChild(para4);
      item.appendChild(age);
      item.appendChild(para5);
      item.appendChild(cell);
      item.appendChild(para6);

      container.appendChild(item);

      
      

      bt.addEventListener("click", function () {
        document.getElementById("di").style.display = "none";
      });
    });
});
