var overlay = document.querySelector(".overlay");
var popbox = document.querySelector(".popbox");
var addbutton = document.getElementById("add-pop-button");
addbutton.addEventListener("click", function () {
    overlay.style.display = "block";
    popbox.style.display = "block";
});

var cancelbutton = document.getElementById("cancel-book");
cancelbutton.addEventListener("click", function (event) {
    event.preventDefault();
    overlay.style.display = "none";
    popbox.style.display = "none";
});

var container = document.querySelector(".container");
var addbook = document.getElementById("add-book");
var booktitle = document.getElementById("book-input");
var bookauthor = document.getElementById("author-input");
var bookDescription = document.getElementById("description-input");

addbook.addEventListener("click", function (event) {
    event.preventDefault();
    var div = document.createElement("div");
    div.setAttribute("class", "book-contains");
    div.innerHTML = `<h2>${booktitle.value}</h2>
                     <h5>${bookauthor.value}</h5>
                     <p>${bookDescription.value}</p>
                     <button onclick="deletebook(event)">Delete</button>`;
    container.append(div);
    overlay.style.display = "none";
    popbox.style.display = "none";
});

function deletebook(event) {
    event.target.parentElement.remove();
}
