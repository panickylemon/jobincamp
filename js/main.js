$(document).ready(function ($) {

    $('.selectpicker').selectpicker();
    $('.selectpicker').parent().children().removeAttr('title');
    $('.selectpicker').on('hidden.bs.select', function (e) {
        $(this).parent().children().removeAttr('title');
    });

    if (/Android|webOS|iPhone|iPad|iPod|BlackBerry/i.test(navigator.userAgent)) {
        $('.selectpicker').selectpicker('mobile');
    }


    $(".b-menu-burger").click(function () {
        $(".b-menu-burger").hide();
        $(".l-menu").toggle("slide", {direction: "right"}, 500);
        $(".b-menu-close").delay(400).fadeIn(100);
        $(".l-menu").addClass("j-menu--open");
    });

    $(document).click(function (e) {
        var menu = $(".j-menu--open");
        var burger = $(".b-menu-burger");
        if (!menu.is(e.target) && !burger.is(e.target)// если клик был не по нашему блоку
            && menu.has(e.target).length === 0 // и не по его дочерним элементам
            && menu.is(':visible')) {
            $(".b-menu-close").hide();

            setTimeout(function () {
                $(".l-menu").removeClass("j-menu--open");
            }, 500);

            //burger.show();
            burger.delay(400).fadeIn(100);
            menu.toggle("slide", {direction: "right"}, 500);
        }
    });


    $('a.b-scrolling-top, a.b-scrolling-bottom').click(function () {
        var el = $(this).attr('href');
        $('body').animate({
            scrollTop: $(el).offset().top
        }, 1000);
        return false;
    });


    $('.b-left-submenu').on('shown.bs.collapse', function () {
        $(this).parent().find(".b-left-menu__arrow--bottom").removeClass("b-left-menu__arrow--bottom").addClass("b-left-menu__arrow--top");
    }).on('hidden.bs.collapse', function () {
        $(this).parent().find(".b-left-menu__arrow--top").removeClass("b-left-menu__arrow--top").addClass("b-left-menu__arrow--bottom");
    });

    $('.l-short-card__aside').on('shown.bs.collapse', function () {
        $(this).parent().find(".b-more-button").hide();
    }).on('hidden.bs.collapse', function () {
        $(this).parent().find(".b-more-button").show();
    });


    $(".b-search-sorting__button").click(function () {
        $(".b-search-sorting__criteria").slideToggle("slow");
        $(".b-search-sorting").addClass("b-search-sorting--grey");
        //$('.b-search-sorting__button').addClass('j-hidden');
        if ($(".b-search-sorting__button").hasClass("b-search-sorting__button--white")) {
            $(".b-search-sorting__button").removeClass("b-search-sorting__button--white").addClass("b-search-sorting__button--grey");

            setTimeout(function () {
                $('.b-search-sorting__button').removeClass('j-hidden');
            }, 2000);

        } else {
            $(".b-search-sorting__button").removeClass("b-search-sorting__button--grey").addClass("b-search-sorting__button--white");
            $('.b-search-sorting__button').addClass('j-hidden');

        }
    });


    $(".b-mobile-button").click(function () {
        $(".l-left-menu").slideToggle("slow");
    });


    //
    //function resizeResultItem(selecter) {
    //    var max_height = $(".b-card-info").height();
    //    $(selecter).each(function () {
    //        $(this).height(max_height);
    //    });
    //}
    //$(window).resize(function(){
    //    resizeResultItem(".b-card-info__item");
    //});
    //$(window).load(function(){
    //    resizeResultItem(".b-card-info__item");
    //});


    //function resizeResultItem(selecter) {
    //    var max_height = 0;
    //    $(selecter).each(function () {
    //        var item_height =  $(this).outerHeight();
    //        if (item_height > max_height) {
    //            max_height = item_height;
    //
    //        }
    //    });
    //    $(selecter).each(function () {
    //        $(this).height(max_height);
    //    });
    //}
    //$(window).resize(function(){
    //    resizeResultItem(".zz");
    //});
    //$(window).load(function(){
    //    resizeResultItem(".zz");
    //});

});

