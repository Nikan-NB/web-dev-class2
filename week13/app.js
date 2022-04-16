fetch("https://randomuser.me/api/?results=100")
  .then(function (response) {
    return response.json();
  })
  .then(function (data) {
    console.log(data.results);
    data.results.forEach(function(element){
        console.log(element);
        const para = document.createElement("p");
        para.innerHTML = element.name.first;
        if ((element.gender == "male")) {
            document.body.appendChild(para);
        }
    });










    // for (let i = 0; i < data.results.length; i++) {
    //   const para = document.createElement("p");
    //   para.innerHTML = data.results[i].name.first;
    //   if ((data.results[i].gender == "male")) {
    //     document.body.appendChild(para);
    //   }
    // }
  });
