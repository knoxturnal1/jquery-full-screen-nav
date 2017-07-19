var overlay = $('.overlay');

$("button").on('click', function(e) {
	e.preventDefault();
	overlay.css("display", "block");
});

$("#close").on('click', function(e) {
	e.preventDefault();
	overlay.css("display", "none");
});

$("#close").on('mouseover', function() {
	$("#close i").attr("class", "rotateIn animated fa fa-times");
});

$("#close").on('mouseout', function() {
	$("#close i").attr("class", "fa fa-times");
});
