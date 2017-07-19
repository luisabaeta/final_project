$(".thumbnail").on("click", function(){
	var gallery = $(this).data("gallery");
	$(".gallery-wrapper").addClass("hidden");
	$("."+gallery).removeClass("hidden");
});

$(".close").on("click", function(){
	var gallery = $(this).data("gallery");
	$(".gallery-wrapper").addClass("hidden");
});