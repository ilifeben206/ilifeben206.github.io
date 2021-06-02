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

$(document).ready(function() {
    $("div#accordion").children().eq(1).hide().css({ height: 0 })
})
$(function() {
    $("#accordion").accordion();
});
jQuery(document).ready(function($) {
    var offset = 100,
        offset_opacity = 1200,
        scroll_top_duration = 700,
        $back_to_top = $('.cd-top');
    $(window).scroll(function() {
        ($(this).scrollTop() > offset) ? $back_to_top.addClass('cd-is-visible'): $back_to_top.removeClass('cd-is-visible cd-fade-out');
        if ($(this).scrollTop() > offset_opacity) {
            $back_to_top.addClass('cd-fade-out');
        }
    });
    $back_to_top.on('click',
        function(event) {
            event.preventDefault();
            $('body,html').animate({
                    scrollTop: 0,
                },
                scroll_top_duration);
        });
});




//tab 切换
$(".J-nav-tab").each(function() {
    var tthis = $(this)
    $(this).find("a").click(function() {
        var $this = $(this);
        var $obj = $this.attr("href");
        tthis.find("a").removeClass("on")
        $this.addClass("on");
        $($obj).show().siblings().hide()
        return false;
    })
})