jQuery(function($){
    'use strict';

    //Navbar
    $(window).on('scroll', function() {
        if ($(this).scrollTop() >50) {
            $('.main-menu').addClass('is-sticky');
        } else {
            $('.main-menu').removeClass('is-sticky');
        }
    });			
    $('navbar-nav .nav-item .nav-link').on('click', function(e){
        var anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: $(anchor.attr('href')).offset().top - 70
        }, 1500);
        e.preventDefault();
    });
    $(document).on('click','.navbar-collapse.show',function(e) {
        if( $(e.target).is('a') && $(e.target).attr('class') != 'dropdown-toggle' ) {
            $(this).collapse('hide');
        }
    });	

    $('.navbar-nav .nav-item .nav-link').click(function(){
        $('.navbar-nav .nav-item .nav-link').removeClass('active');
        $(this).addClass('active');
    });


    // Go to Top JS
    // $(window).on('scroll', function() {
    //     var scrolled = $(window).scrollTop();
    //     if (scrolled > 600) $('.back-top').addClass('active');
    //     if (scrolled < 600) $('.back-top').removeClass('active');
    // });

    // $('.back-top').on('click', function() {
    //     $("html, body").animate({ scrollTop: "0" },  500);
    // });

    // WOW JS
    // new WOW().init();
});
