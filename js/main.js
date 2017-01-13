$(document).ready(function ($) {

    $('.selectpicker').selectpicker();
    $('.selectpicker').parent().children().removeAttr('title');
    $('.selectpicker').on('hidden.bs.select', function (e) {
        $(this).parent().children().removeAttr('title');
    });

    if( /Android|webOS|iPhone|iPad|iPod|BlackBerry/i.test(navigator.userAgent) ) {
        $('.selectpicker').selectpicker('mobile');
    }



    $(".b-menu-burger").click(function() {
        $(".b-menu-burger").hide();
        $(".l-menu").toggle("slide", {direction:"right"}, 500);
        $(".b-menu-close").delay(400).fadeIn(100);
        $(".l-menu").addClass("j-menu--open");
    });

    $(document).click(function (e){
        var menu = $(".j-menu--open");
        var burger = $(".b-menu-burger");
        if (!menu.is(e.target) && !burger.is(e.target)// если клик был не по нашему блоку
            && menu.has(e.target).length === 0 // и не по его дочерним элементам
            && menu.is(':visible')) {
            $(".b-menu-close").hide();

            setTimeout(function() {
                $(".l-menu").removeClass("j-menu--open");
            }, 500);

            //burger.show();
            burger.delay(400).fadeIn(100);
            menu.toggle("slide", {direction:"right"}, 500);
        }
    });



    $(document).ready(function() {
        $('a[href^="#"]').click(function(){
            var el = $(this).attr('href');
            $('body').animate({
                scrollTop: $(el).offset().top}, 1000);
            return false;
        });
    });


    //$(document).ready(function() {
    //    $("a.b-scrolling-bottom").click(function() {
    //        var elementClick = $(this).attr("href")
    //        var destination = $(elementClick).offset().top;
    //        jQuery("html:not(:animated),body:not(:animated)").animate({
    //            scrollTop: destination
    //        }, 800);
    //        return false;
    //    });
    //});




    $('.collapse').on('shown.bs.collapse', function(){
        $(this).parent().find(".b-left-menu__arrow--bottom").removeClass("b-left-menu__arrow--bottom").addClass("b-left-menu__arrow--top");
    }).on('hidden.bs.collapse', function(){
        $(this).parent().find(".b-left-menu__arrow--top").removeClass("b-left-menu__arrow--top").addClass("b-left-menu__arrow--bottom");
    });



});