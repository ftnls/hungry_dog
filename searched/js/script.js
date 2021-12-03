const productlist = document.getElementById("products-list");

function findeHandler() {
  const value = document.getElementById("search-input").value;
  const li = document.createElement("li");
  if (value.length > 0) {
    li.innerText = value;
    li.className = "product";
    li.id = value;
    li.onclick = function () {
      this.parentElement.removeChild(this);
    };
    productlist.appendChild(li);
    document.getElementById("search-input").value = "";
  } else {
    console.log("You have to enter something in search input!!!");
  }
}

// Get the input field
var input = document.getElementById("search-input");

input.addEventListener("keyup", function(event) {
  if (event.keyCode === 13) {
    findeHandler();
  }
});

function showProducts() {

}