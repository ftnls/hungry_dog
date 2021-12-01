
let id = 0;
$( ".plus-product" ).on( "click", function () {
	search_value = $(".search-input").val();
	var element_product = "<div onclick=\"whatId(this.id)\" class=\"product\" id=" + id + 
	"><p onclick=\"whatId(this.id)\" id=" + id + 
	">" + search_value + "</p></div>";
	
	$(".products").append(element_product);
	id += 1;

	$(".search-input").val("");
});

function whatId(clicked_id) {
	// alert(clicked_id);
	$(".products #" + clicked_id).remove();
}



// $(".product").on("click", function () {
// 	alert(id);
// 	$(".product #" + id).remove();
// });
