function getSearch() {
var search = document.getElementById("query").value;
console.log(search);
}


window.onload = function() {
    var button = document.getElementById("button");
    button.addEventListener("click", getSearch);
}

const key = "DF417911-054E-4413-BB51-B191E692DD0B";

