console.log("krushna");
let searchText = document.querySelector(".searchText");
let btn = document.querySelector("#btn");
let resultDiv = document.querySelector(".resultDiv");

btn.addEventListener("click", (e) => {
  console.log("clicked");
  if (searchText.value !== "") {
    let url = `https://en.wikipedia.org/w/api.php?action=query&list=search&prop=info&inprop=url&utf8=&format=json&origin=*&srlimit=20&srsearch=${searchText.value}`;
    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        console.log(data);

        resultDiv.innerHTML = ``;
        data.query.search.forEach((source) => {
          let resultURL = `https://en.wikipedia.org/?curid=${source.pageid}`;
          resultDiv.insertAdjacentHTML(
            `afterBegin`,
            `<div class="resultItem">
            <a href="${resultURL}" target="_blank" class="resultTitle">${source.title}</a><br>
            <a href="${resultURL}" target="_blank" class="link">${resultURL}</a>
            <p>${source.snippet}</p>
        </div>`
          );
        });
      });
  } else {
    alert("Please Enter Someting!");
  }
});
