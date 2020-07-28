$(document).ready(function () {


    const menuToggle = '#menu-toggle';

    const mobileNavContainer = "#mobile-nav";

    $(menuToggle).on("click", function (e) {
        e.preventDefault();
        $(menuToggle).toggleClass("menu-icon-active");
        $(mobileNavContainer).toggle("mobile-nav-active");
        $('ul. li  ').toggle("active");

    });

    $('a.scrollto').click(function () {
        let elementClick = $(this).attr("href");
        let destination = $(elementClick).offset().top;
        $('html:not(:animated), body:not(:animated)').animate({
            scrollTop: destination
        }, 800);
        return false;
    });

    //Павная прокрутка по секциям


    let btn = $('.scroll-to-top');
    $(window).scroll(function () {
        if ($(window).scrollTop() > 330) {
            $(".scroll-to-top").toggleClass("show");
        } else {
            $(".scroll-to-top").removeClass("show");
        }
    });
    btn.on("click", function (e) {
        e.preventDefault();
        $('body, html').animate({scrollTop: 0}, 500);
    });

    //Прокрутка навверх страницы


    $('.works-carousel').owlCarousel({
        loop: true,
        margin: 10,
        nav: true,
        slideTransition: "linear",
        smartSpeed: 400,
        startPosition: 0,
        navText: ['<img src="./images/src/pagination_left.svg">', '<img src="./images/src/pagination_right.svg">'],
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 1
            },
            1000: {
                items: 1
            }
        }
    });

    // Slider (Services)


    $('ul.tabs__caption').on('click', 'li', function (e) {
        e.preventDefault();

        if (!$(this).hasClass('active')) {
            $(this)
                .addClass('active').siblings().removeClass('active')
                .closest('section.tabs').find('div.tabs__content').removeClass('active').eq($(this).index()).addClass('active');
            animateView();
        } else {
            return false;
        }


    });

    function animateView(e) {
        anime({
            targets: '.tabs__caption',
        });

        anime({
            targets: '.tabs__content',
            // translateY: [400, -70],
            opacity: [0, 1],
            duration: 400
        })
    }


    // Works Content


    $('.contribution-carousel').owlCarousel({
        loop: true,
        margin: 0,
        nav: true,
        slideTransition: "linear",
        smartSpeed: 400,
        startPosition: 0,
        navText: ['<img src="./images/src/pagination_left.svg">', '<img src="./images/src/pagination_right.svg">'],
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 1
            },
            1000: {
                items: 1
            }
        }
    });


    let animation = anime({
        targets: '.hero',
        translateX: -5,
        autoplay: true,
        opacity: [0, 1],
        easing: 'easeOutExpo',
        duration: 2000,
        delay: 600


    });

    let textAnime = anime({
        targets: '.offer-count',
        translateX: 5,
        autoplay: true,
        opacity: [0, 1],
        duration: 2000,
        easing: 'easeOutExpo',
        delay: 300

    });


});



