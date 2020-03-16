$(function() {
		var selectedClass = "";
		$("p").click(function(){
		selectedClass = $(this).attr("data-rel");
    $("#travelGrid").fadeTo(100, 0.1);
		$("#travelGrid div").not(".grid__item."+selectedClass).fadeOut();
    setTimeout(function() {
      $(".grid__item."+selectedClass).fadeIn();
      $("#travelGrid").fadeTo(500, 1);
    }, 500);

	});
});
