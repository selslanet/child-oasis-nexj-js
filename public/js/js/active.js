(function($) {
	'use strict';

    // Mean Menu
    jQuery('.mean-menu').meanmenu({
        meanScreenWidth: "991"
    }); 
    
    // Navbar Js
        $(window).on('scroll', function() {
        if ($(this).scrollTop() > 50) {
            $('.main-nav').addClass('menu-shrink');
        } else {
            $('.main-nav').removeClass('menu-shrink');
        }
    });

    $(".child-care-slider").on("translate.owl.carousel", function(){
        $(".single-slider .slider-text h3").removeClass("animated flipInX").css("opacity", "0");
        $(" .single-slider .slider-text p").removeClass("animated flipInX").css("opacity", "0");
        $(".single-slider .slider-text .custom-btn").removeClass("animated flipInX").css("opacity", "0");
    });
    
    $(".child-care-slider").on("translated.owl.carousel", function(){
        $(".single-slider .slider-text h3").addClass("animated flipInX").css("opacity", "1");
        $(".single-slider .slider-text p").addClass("animated flipInX").css("opacity", "1");
        $(".single-slider .slider-text .custom-btn").addClass("animated flipInY").css("opacity", "1");
    });

    // PRELOADER
    jQuery(window).on('load',function(){
        jQuery(".loader").fadeOut(500);
    });

    // Main Slider
    $('.child-care-slider').owlCarousel({
        items:1,
        loop:true,
        rtl: true,
        nav:true,
        dots:true,
        smartSpeed: 1500,
        mouseDrag: false,
    });

    // Testimonial Js
    $(".testi-slider").owlCarousel({
        items: 1,
        nav: false,
        margin: 30,
        rtl: true,
        loop: true,
        dots: true,
        autoplay: true,
        autoplayHoverPause: true,
        smartSpeed: 2000,
        responsive:{
            0:{
                items:1
            },
            650:{
                items:2
            },
            992: {
                items: 3
            },
            1000:{
                items:3
            }
        }
    });

    // Blog Js
    $(".blog-slider").owlCarousel({
        nav: true,
        margin: 30,
        loop: true,
        dots: true,
        rtl: true,
        autoplay: true,
        autoplayHoverPause: true,
        smartSpeed: 2000,
        navText: ["<i class='fa fa-angle-left'></i>", "<i class='fa fa-angle-right'></i>"],
        responsive:{
            0:{
                items:1
            },
            650:{
                items:1
            },
            768: {
                items:2
            },
            992:{
                items:3
            }
        }
    });

    // Logo Js
    $(".logo-slider").owlCarousel({
        nav: false,
        margin: 30,
        loop: true,
        rtl: true,
        dots: false,
        autoplay: true,
        autoplayHoverPause: true,
        smartSpeed: 2000,
        responsive:{
            0:{
                items:2
            },
            650:{
                items:3
            },
            992:{
                items:4
            }
        }
    });

    // Blog Slider Js
    $(".blog-slider-two").owlCarousel({
        nav: true,
        margin: 30,
        loop: true,
        rtl: true,
        dots: false,
        autoplay: true,
        autoplayHoverPause: true,
        smartSpeed: 2000,
        navText: ["<i class='fa fa-angle-left'></i>", "<i class='fa fa-angle-right'></i>"],
        responsive:{
            0:{
                items:1
            },
            768:{
                items:2
            },
            992:{
                items:3
            }
        }
    });

    // Program Slider Js
    $(".program-slider").owlCarousel({
        nav: true,
        margin: 30,
        loop: true,
        dots: false,
        rtl: true,
        autoplay: true,
        autoplayHoverPause: true,
        smartSpeed: 2000,
        navText: ["<i class='fa fa-angle-left'></i>", "<i class='fa fa-angle-right'></i>"],
        responsive:{
            0:{
                items:1
            },
            768:{
                items:2
            },
            1024:{
                items:3
            }
        }
    });

    // Shop Details Slider Js
    if ($(".shop-single-slider").length) {
        $('.slider-for').slick({
            slidesToShow: 1,
            slidesToScroll: 1,
            arrows: false,
            fade: true,
            rtl: true,
            asNavFor: '.slider-nav'
        });
        $('.slider-nav').slick({
            slidesToShow: 4,
            slidesToScroll: 1,
            rtl: true,
            asNavFor: '.slider-for',
            focusOnSelect: true,
            responsive: [
                {
                    breakpoint: 500,
                    settings: {
                    slidesToShow: 2,
                        infinite: true
                    }
                },
                {
                    breakpoint: 400,
                    settings: {
                        slidesToShow: 2
                    }
                }
            ]
        });
    };

    // Related Slider Js
    $(".related-post-slider").owlCarousel({
        nav: true,
        margin: 30,
        rtl: true,
        loop: true,
        dots: false,
        autoplay: true,
        autoplayHoverPause: true,
        smartSpeed: 2000,
        navText: ["<i class='fa fa-angle-left'></i>", "<i class='fa fa-angle-right'></i>"],
        responsive:{
            0:{
                items:1
            },
            600: {
                items:2
            },
            768:{
                items:3
            },
            992:{
                items:4
            }
        }
    });

    // Skill Bar Js
    $(".bar").on('each', function(){
        $(this).find(".bar-inner").animate({
            width: $(this).attr("data-width")
        },2000)
    });

    // Testimonial Carousel
    var $imagesSlider = $(".testimonial-slider .testimonial-client>div"),
    $thumbnailsSlider = $(".client-image-list>div");
    
    // images options
    $imagesSlider.slick({
        speed:300,
        slidesToShow:1,
        slidesToScroll:1,
        cssEase:'linear',
        rtl: true,
        fade:true,
        autoplay: true,
        draggable:true,
        asNavFor:".client-image-list>div",
    });

    // Thumbnails options
    $thumbnailsSlider.slick({
        speed:300,
        slidesToShow:3,
        slidesToScroll:1,
        rtl: true,
        cssEase:'linear',
        autoplay: true,
        centerMode:true,
        draggable:false,
        focusOnSelect:true,
        asNavFor:".testimonial-slider .testimonial-client>div",
    });
    var $caption = $('.testimonial-slider .caption');
    var captionText = $('.testimonial-client .slick-current img').attr('alt');
    updateCaption(captionText);
    $imagesSlider.on('beforeChange', function(event, slick, currentSlide, nextSlide){
        $caption.addClass('hide');
    });
    $imagesSlider.on('afterChange', function(event, slick, currentSlide, nextSlide){
        captionText = $('.testimonial-client .slick-current img').attr('alt');
        updateCaption(captionText);
    });
    function updateCaption(text) {
        // if empty, add a no breaking space
        if (text === '') {
            text = '&nbsp;';
        }
        $caption.html(text);
        $caption.removeClass('hide');
    };

    // Wow Js
    new WOW().init();

    //Searchbx 
        $('a[href=".search"]').on("click", function(event) {
        event.preventDefault();
        $(".search").addClass("open");
        $('.search > form > input[type="search"]').focus();
    });
    $(".search, .search button.close").on("click keyup", function(event) {
        if (
            event.target == this ||
            event.target.className == "close" ||
            event.keyCode == 27
        ) {
            $(this).removeClass("open");
        }
    });
    $("form").on('submit',function(event) {
        event.preventDefault();
        return false;
    });

    // FAQ JS
    $(".faq-panel > .faq-title").on("click", function() {
        if ($(this).hasClass('active')) {
            $(this).removeClass("active");
            $(this).siblings('.faq-textarea').slideUp(200);
            $(".faq-panel > .faq-title i").removeClass("fa fa-minus").addClass("fa fa-plus");
        } else {
            $(".faq-panel > .faq-title i").removeClass("fa fa-minus").addClass("fa fa-plus");
            $(this).find("i").removeClass("fa fa-plus").addClass("fa fa-minus");
            $(".faq-panel > .faq-title").removeClass("active");
            $(this).addClass("active");
            $('.faq-textarea').slideUp(200);
            $(this).siblings('.faq-textarea').slideDown(200);
        }
    });
    var accordion = (function() {
        var $accordion = $('.js-accordion');
        var $accordion_header = $accordion.find('.js-accordion-header');
        var $accordion_item = $('.js-accordion-item');
        var settings = {
            speed: 400,
            oneOpen: false
        };
        return {
            init: function($settings) {
                $accordion_header.on('click', function() {
                    accordion.toggle($(this));
                });
                $.extend(settings, $settings);
                if (settings.oneOpen && $('.js-accordion-item.active').length > 1) {
                    $('.js-accordion-item.active:not(:first)').removeClass('active');
                }
                $('.js-accordion-item.active').find('> .js-accordion-body').show();
            },
            toggle: function($this) {
                if (settings.oneOpen && $this[0] != $this.closest('.js-accordion').find('> .js-accordion-item.active > .js-accordion-header')[0]) {
                    $this.closest('.js-accordion').find('> .js-accordion-item').removeClass('active').find('.js-accordion-body').slideUp()
                }
                $this.closest('.js-accordion-item').toggleClass('active');
                $this.next().stop().slideToggle(settings.speed);
            }
        }
    })();
    
    // Slider Video Popup
    $('.popup-youtube').magnificPopup({
        disableOn: 700,
        type: 'iframe',
        mainClass: 'mfp-fade',
        removalDelay: 160,
        preloader: false,
        fixedContentPos: false
    });


    //back to top
    $('body').append('<div id="toTop" class="back-to-top"><i class="flaticon-drag"></i></div>');
    $(window).on('scroll', function () {
        if ($(this).scrollTop() != 0) {
            $('#toTop').fadeIn();
        } else {
            $('#toTop').fadeOut();
        }
    }); 
    $('#toTop').on('click', function(){
        $("html, body").animate({ scrollTop: 0 }, 600);
        return false;
    });
    
})(jQuery);