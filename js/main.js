$(document).ready(function ($) {

    $('.selectpicker').selectpicker();
    $('.selectpicker').parent().children().removeAttr('title');
    $('.selectpicker').on('hidden.bs.select', function (e) {
        $(this).parent().children().removeAttr('title');
    });

    if( /Android|webOS|iPhone|iPad|iPod|BlackBerry/i.test(navigator.userAgent) ) {
        $('.selectpicker').selectpicker('mobile');
    }


    //$(".b-menu-burger").click(function() {
    //    //$(".b-menu-burger").hide();
    //    $(".l-menu").toggle("slide", {direction:"right"}, 500);
    //    //$(".menuClose").delay(400).fadeIn(100);
    //    //$(".menu").addClass("zIndex");
    //});


    $(".b-menu-burger").click(function() {
        $(".b-menu-burger").hide();
        $(".l-menu").toggle("slide", {direction:"right"}, 500);
        //$(".menuClose").delay(400).fadeIn(100);
        //$(".menu").addClass("zIndex");
    });

    //$(document).click(function (e){
    //    var menu = $(".menuOpen");
    //    var burger = $(".menuToggle");
    //    if (!menu.is(e.target) && !burger.is(e.target)// если клик был не по нашему блоку
    //        && menu.has(e.target).length === 0 // и не по его дочерним элементам
    //        && menu.is(':visible')) {
    //        $(".menuClose").hide();
    //
    //        setTimeout(function() {
    //            $(".menu").removeClass("zIndex");
    //        }, 500);
    //
    //        //burger.show();
    //        burger.delay(400).fadeIn(100);
    //        menu.toggle("slide", {direction:"right"}, 500);
    //    }
    //});

});