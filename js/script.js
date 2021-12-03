const productlist = document.getElementById("products-list");
let count_products = 0;

function findeHandler() {
  const value = document.getElementById("search-input").value;
  const li = document.createElement("li");
  if (value.length > 0) {
    count_products++;
    if (count_products > 0) {
      $(".comment").css('opacity', '1');
    }
    li.innerText = value;
    li.className = "product";
    li.id = value;
    li.onclick = function () {
      count_products--;
      if (count_products < 1) {
        $(".comment").css('opacity', '0');
      }
      this.parentElement.removeChild(this);
    };
    productlist.appendChild(li);
    document.getElementById("search-input").value = "";
  } else {
    console.log("You have to enter something in search input!!!");
  }
}

let input = document.getElementById("search-input");

input.addEventListener("keyup", function(event) {
  if (event.keyCode === 13) {
    findeHandler();
  }
});