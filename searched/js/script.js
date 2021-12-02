const productlist = document.getElementById("products-list");

function findeHandler() {
  const value = document.getElementById("search-input").value;
  const li = document.createElement("li");
  li.innerText = value;
  li.className = "product";
  li.id = value;
  li.onclick = function () {
    this.parentElement.removeChild(this);
  };
  productlist.appendChild(li);
}

// Get the input field
var input = document.getElementById("search-input");

input.addEventListener("keyup", function(event) {
  if (event.keyCode === 13) {
    findeHandler();
    document.getElementById("search-input").value = "";
  }
});