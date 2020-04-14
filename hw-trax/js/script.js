"use strict";
$(function () {
    /* ==== PAGE LOADER ==== */
    $(window).on("load", function () {
        $(".loader").fadeOut(800);
    });

    /* ========== HOME SLIDER =========== */
    let sliderCount = 0;
    let timer;

    function setTimer() {
        if (sliderCount == ($("#home-slider li").length - 1)) {
            sliderCount = 0;
        } else {
            sliderCount++;
        }
        $("#home-slider li.active-main").removeClass("active-main");
        $("#home-slider li").eq(sliderCount).addClass("active-main");
        $('.tp-bullet.selected').removeClass('selected');
        $('.tp-bullet').eq(sliderCount).addClass('selected');
    };
    timer = setInterval(setTimer, 6000);
    setTimer();

    function clickBullets() {
        if (sliderCount == ($("#home-slider li").length - 1)) {
            sliderCount = 0;
        } else {
            sliderCount++;
        }
        $(document).on('click', '.tp-bullet', function () {
            $("#home-slider li.active-main").removeClass("active-main");
            $("#home-slider li").eq(sliderCount).addClass("active-main");
            $('.tp-bullet.selected').removeClass('selected');
            $(this).addClass('selected');
        })
    }
    clickBullets()
    /* ==== BUTTON TO TOP ==== */
    let ScrolledAmount = 700;
    $(window).on("scroll", function () {
        if ($(window).scrollTop() > ScrolledAmount) {
            $('.back-top').addClass('back-top-visible');
        } else {
            $('.back-top').removeClass('back-top-visible');
        }
    });
    $(document).on("click", '.back-top', function () {
        $('html, body').animate({
            scrollTop: 0
        }, 700);
        return false;
    });
    /* ==== NAVIGATION BAR ==== */
    $(document).on('click', '.sidemenu_btn', function () {
        $(this).toggle();
        $('.side-menu').css('display', 'block');
        $('#close_side_menu').css('display', 'block');
    })
    $(document).on('click', '#btn_sideNavClose', function () {
        $('.side-menu').css('display', 'none');
        $('#close_side_menu').css('display', 'none');
    })

    $(window).scroll(function () {
        let scroll = $(window).scrollTop();
        if (scroll > 250) {
            $(".static-nav").addClass("fixedmenu");
            $('.logo-scrolled').css('display', 'block');
            $('.logo-default').css('display', 'none');
            $(".static-nav").removeClass("transparent-bg");
            $(".static-nav .nav-link").css('color', '#384141');
            $(".sidemenu_btn>span").css('background-color', '#384141');
            $('#sidemenu_toggle').css('display', 'block');
        } else {
            $(".static-nav").removeClass("fixedmenu");
            $('.logo-scrolled').css('display', 'none');
            $('.logo-default').css('display', 'block');
            $(".static-nav").addClass("transparent-bg");
            $(".static-nav .nav-link").css('color', '#fff');
            $(".sidemenu_btn>span").css('background-color', '#fff');
        }
    });
    /* ==== PROCESS ==== */
    $(document).on('mouseover', '.process-list li', function () {
        $('span.process-num.active').removeClass('active');
        $(this).children('span').addClass('active');
    })
    $(document).on('mouseleave', '.process-list', function () {
        $('span.process-num.active').removeClass('active');
        $(this).children('li:nth-child(3)').children('span').addClass('active');
    })
    /* ==== PRICING SECTION ==== */
    $('.pricing-item').on('mouseenter', function () {
        $('.pricing-item').removeClass('active');
        $(this).addClass('active');
    }).on('mouseleave', function () {
        $('.pricing-item').removeClass('active');
        $('.pricing-item.selected').addClass('active');
    });
    $(document).on('click', '.Pricing-toggle-button.year', function () {
        $(this).addClass('active');
        $('.Pricing-toggle-button.month').removeClass('active');
    })
    $(document).on('click', '.Pricing-toggle-button.month', function () {
        $(this).addClass('active');
        $('.Pricing-toggle-button.year').removeClass('active');
    })

    /* =====================================
             Fancy Box Image viewer
      ====================================== */
    $('[data-fancybox]').fancybox({
        'transitionIn': 'elastic',
        'transitionOut': 'elastic',
        'speedIn': 600,
        'speedOut': 200,
        buttons: [
            'slideShow',
            'fullScreen',
            'thumbs',
            'share',
            // 'download',
            'zoom',
            'close'
        ],
    });

    /* ==== OWL SLIDERS ==== */
    /* ==== PARTNERS ==== */
    $("#partners-slider").owlCarousel({
        items: 5,
        autoplay: 1500,
        smartSpeed: 1500,
        autoplayHoverPause: true,
        slideBy: 1,
        loop: true,
        margin: 30,
        dots: false,
        nav: false,
        responsive: {
            1200: {
                items: 5,
            },
            991: {
                items: 4,
            },
            767: {
                items: 3,
            },
            480: {
                items: 2,
            },
            0: {
                items: 1,
            },
        }
    });
    /* ==== TESTIMONIALS ==== */
    $("#testimonial-slider").owlCarousel({
        items: 1,
        autoplay: false,
        autoplayHoverPause: true,
        mouseDrag: false,
        loop: true,
        margin: 30,
        animateIn: "fadeIn",
        animateOut: "fadeOut",
        dots: false,
        nav: true,
        navText: ["<i class='fas fa-angle-left'></i>", "<i class='fas fa-angle-right'></i>"],
        responsive: {
            980: {
                items: 1,
            },
            600: {
                items: 1,
            },
            320: {
                items: 1,
            },
        }
    });
    /* ==== GALLERY DETAILS ==== */
    $("#carousel-gallery-detail").owlCarousel({
        items: 1,
        autoplay: false,
        mouseDrag: true,
        loop: true,
        margin: 0,
        dots: false,
        nav: true,
        responsive: {
            980: {
                items: 1,
            },
            600: {
                items: 1,
            },
            320: {
                items: 1,
            },
        }
    });
    /* ==== TESTIMONIAL==== */
    $("#testimonial-main-slider").owlCarousel({
        items: 3,
        autoplay: 2500,
        autoplayHoverPause: true,
        loop: true,
        margin: 0,
        dots: true,
        nav: false,
        responsive: {
            1280: {
                items: 3,
            },
            980: {
                items: 3,
            },
            600: {
                items: 2,
            },
            320: {
                items: 1,
            },
        }
    });
    /* ==== PRICE SLIDER ==== */
    $("#price-slider").owlCarousel({
        items: 3,
        autoplay: false,
        loop: false,
        margin: 0,
        padding: 0,
        dots: true,
        nav: false,
        responsive: {
            1280: {
                items: 3,
            },
            980: {
                items: 3,
            },
            600: {
                items: 2,
            },
            0: {
                items: 1,
            },
        }
    });
    /* ==== OUR TEAM ==== */
    $("#ourteam-slider").owlCarousel({
        items: 4,
        margin: 0,
        dots: false,
        nav: false,
        responsive: {
            1280: {
                items: 4,
            },
            768: {
                items: 3,
            },
            520: {
                items: 2,
            },
            0: {
                items: 1,
            },
        }
    });
    /* ==== APPS SLIDER ==== */
    $("#app-slider").owlCarousel({
        items: 1,
        loop: true,
        dots: false,
        nav: false,
        animateOut: 'fadeOut',
        animateIn: 'fadeIn',
        autoplay: false,
        autoplayTimeout: 5000,
        responsive: {
            1280: {
                items: 1,
            },
            600: {
                items: 1,
            },
            320: {
                items: 1,
            },
        }
    });
    $('.app-slider-lock-btn').on('click', function () {
        $('.app-slider-lock').fadeToggle(600);
    });
    /* ==== SERVICES SLIDER ==== */
    $("#services-slider").owlCarousel({
        autoplay: false,
        autoplayTimeout: 3000,
        autoplayHoverPause: true,
        smartSpeed: 1200,
        loop: true,
        nav: false,
        navText: false,
        dots: false,
        mouseDrag: true,
        touchDrag: true,
        center: true,
        responsive: {
            0: {
                items: 1
            },
            640: {
                items: 3
            }
        }
    });
    /* ==== SERVICE DETAIL ==== */
    $("#service-detail").owlCarousel({
        autoplay: true,
        autoplayTimeout: 3000,
        autoplayHoverPause: true,
        smartSpeed: 1200,
        loop: true,
        nav: false,
        dots: false,
        mouseDrag: true,
        touchDrag: true,
        margin: 15,
        responsive: {
            0: {
                items: 1,
            },
            640: {
                items: 2,
            }
        }
    });
    /* =====================================
                CubePortfolio
    ====================================== */
    /* ------Blog Masonry----- */
    $("#blog-measonry").cubeportfolio({
        layoutMode: 'grid',
        defaultFilter: '*',
        animationType: "scaleSides",
        gapHorizontal: 30,
        gapVertical: 30,
        gridAdjustment: "responsive",
        mediaQueries: [{
            width: 1500,
            cols: 3
        }, {
            width: 1100,
            cols: 3
        }, {
            width: 992,
            cols: 3
        }, {
            width: 768,
            cols: 3
        }, {
            width: 480,
            cols: 1
        }, {
            width: 320,
            cols: 1,
        }],
    });
    /*services*/
    $("#services-measonry").cubeportfolio({
        layoutMode: 'grid',
        defaultFilter: '*',
        filters: '#services-filter',
        animationType: "scaleSides",
        gapHorizontal: 30,
        gapVertical: 30,
        gridAdjustment: "responsive",
        mediaQueries: [{
            width: 1500,
            cols: 3
        }, {
            width: 1100,
            cols: 3
        }, {
            width: 992,
            cols: 3
        }, {
            width: 768,
            cols: 2
        }, {
            width: 480,
            cols: 1
        }, {
            width: 320,
            cols: 1,
        }],
    });
    /*==== GALLERY SECTION ====*/
    $("#grid-mosaic").cubeportfolio({
        filters: "#mosaic-filter",
        layoutMode: 'grid',
        defaultFilter: "*",
        animationType: "rotateSides",
        gapHorizontal: 0,
        gapVertical: 0,
        gridAdjustment: 'responsive',
        mediaQueries: [{
            width: 1500,
            cols: 3,
        }, {
            width: 1100,
            cols: 3,
        }, {
            width: 767,
            cols: 2,
        }, {
            width: 480,
            cols: 1,
        }],
        plugins: {
            loadMore: {
                element: '#js-loadMore-mosaic',
                action: 'click',
                loadItems: 3,
            }
        },
    });
    /*==== CONTACT US ====*/
    $("#submit_btn1 , #submit_btn").on('click', function () {
        let userName = $('#name1').val();
        let userEmail = $('#email1').val();
        let userMessage = $('#message1').val();
        let result;
        if (this.id === 'submit_btn') {
            result = $('#result');
            userMessage = $('#companyName').val();
            userName = $('#userName').val();
            userEmail = $('#email').val();
        } else {
            result = $('#result1');
        }
        let proceed = true;
        if (userName === "") {
            proceed = false;
        }
        if (userEmail === "") {
            proceed = false;
        }
        if (userMessage === "") {
            proceed = false;
        }

        if (userName && userEmail && userMessage) {
            $('.thanks').show();
            $('.thanks').text(`Hi, Thank you for contacting us.`);
        }
        $('#name1').val() = "";
        $('#email1').val() = "";
        $('#message1').val() = "";
    });
});


/* =====================================
 Parallax And responsive plugins initialize
  ====================================== */
let $tooltip = $('.tooltip');
$(() => {
    $tooltip.tooltipster({
        plugins: ['follower'],
        anchor: 'bottom-right',
        offset: [0, 0],
        animation: 'fade',
        content: 'Click Here To Close or Press ESC!',
        delay: 20,
        theme: 'tooltipster-light',
        repositionOnScroll: true,
        functionBefore: function (instance, helper) {
            instance.content('Click Here To Close or Press ESC!');
        }
    });
});
/*Testimonials Grids*/
$("#testimonial-grid").cubeportfolio({
    layoutMode: 'grid',
    defaultFilter: '*',
    animationType: "quicksand",
    gapHorizontal: 0,
    gapVertical: 0,
    gridAdjustment: "responsive",
    mediaQueries: [{
        width: 1500,
        cols: 4,
    }, {
        width: 1100,
        cols: 4
    }, {
        width: 800,
        cols: 3
    }, {
        width: 480,
        cols: 2
    }, {
        width: 320,
        cols: 1
    }],
});

/*Testimonials Grids*/
$("#price-grid").cubeportfolio({
    layoutMode: 'grid',
    defaultFilter: '*',
    animationType: "quicksand",
    gapHorizontal: 50,
    gapVertical: 50,
    gridAdjustment: "responsive",
    mediaQueries: [{
        width: 1500,
        cols: 3
    }, {
        width: 1100,
        cols: 3
    }, {
        width: 800,
        cols: 2
    }, {
        width: 480,
        cols: 1
    }]
});