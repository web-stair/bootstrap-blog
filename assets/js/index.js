$(document).ready(function() {

    // Initialize Newsticker
	$('.newsticker ul').inewsticker({
		speed       : 3000,
		effect          : 'slide',
		dir             : 'rtl',
		font_size       : 13,
		color           : '#fff',
		font_family     : 'arial',
		delay_after : 3000,
	});


    // Initialize main carousel slider
    $('.slider-carousel').owlCarousel({
        rtl:true,
        loop:true,
        dots: true,
        margin:0,
        nav:true,
        fallbackEasing: 'easeOutExpo',
        navText: ["<i class='fa fa-angle-right'></i>","<i class='fa fa-angle-left'></i>"],
        autoplay: true,
        autoplayTimeout: 3000,
        autoplayHoverPause: true,
        lazyLoad: true,
        responsive:{
            0:{
                items:1
            },
            600:{
                items:3
            },
            1000:{
                items:5
            }
        }
    });

    /*
    // mousewheel
    $('.slider-carousel').on('mousewheel', '.owl-stage', function (e) {
        if (e.deltaY>0) {
            $('.slider-carousel').trigger('next.owl');
        } else {
            $('.slider-carousel').trigger('prev.owl');
        }
        e.preventDefault();
    });
    */



    // Initialize category carousel slider
    $('.category-carousel').owlCarousel({
        rtl:true,
        loop:true,
        dots: true,
        margin:10,
        nav:true,
        fallbackEasing: 'easeOutExpo',
        navText: ["<i class='fa fa-angle-right'></i>","<i class='fa fa-angle-left'></i>"],
        autoplay: true,
        autoplayTimeout: 3000,
        autoplayHoverPause: true,
        lazyLoad: true,
        responsive:{
            0:{
                items:1
            },
            600:{
                items:2
            },
            1000:{
                items:3
            }
        }
    });
    
    /*
    // mousewheel
    $('.category-carousel').on('mousewheel', '.owl-stage', function (e) {
        if (e.deltaY>0) {
            $('.category-carousel').trigger('next.owl');
        } else {
            $('.category-carousel').trigger('prev.owl');
        }
        e.preventDefault();
    });
    */


    // Initialize columns slider
    $(function(){
        window.setInterval(function(){
          $('#slides ul li:first').appendTo('#slides ul');
        }, 5000);

    });


    // add slide effect to bootstrap tabs
    $('a[data-toggle="tab"]').on('shown.bs.tab', function (e) {
        var target = $(this).attr('href');

        $(target).css('left','-'+$(window).width()+'px');
        var left = $(target).offset().left;
        $(target).css({left:left}).animate({"left":"0px"}, "10");
    });

    // Fixed navbar on scroll down
    $(window).scroll(function() {
        if ($(window).scrollTop() > 50) {
            $('.navbar').addClass('navbar-fixed-top');
        } else {
            $('.navbar').removeClass('navbar-fixed-top');
        }
    });

});

