$("#mobile_menu_labIcon,.portfolio-filter li a").click(function() {
    $(".nav-bar").toggleClass("on");
    $(".portfolio-filter.isotope-filter.pull-center").toggleClass("on");
    $("#greybg").toggle();
    $('.hamburger').toggleClass('is-active');
})
$("#greybg").click(function() {

    $("#greybg").toggle();
    $(".portfolio-filter.isotope-filter.pull-center").toggleClass("on");
    $('.hamburger').toggleClass('is-active');
})

$(document).ready(function(){
	$("div#accordion").children().eq(0).addClass("ui-corner-all").removeClass("ui-state-active");
	$("div#accordion").children().eq(1).hide();
})