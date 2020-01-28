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

    $('a.modal-btn').click(function (e) {
        e.preventDefault();
        let destinationPopup = $(this).attr("href");
        $(destinationPopup).addClass("show");
        $(destinationPopup + ' .popup__close').click(function () {
            $(destinationPopup).removeClass('show');
        })
    });


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
        $('body, html').animate({scrollTop: 0}, '300');
    });

    //Прокрутка навверх страницы


    $('.works-carousel').owlCarousel({
        loop: true,
        margin: 10,
        nav: true,
        startPosition: 0,
        navText: ['<img src="img/pagination_left.svg">', '<img src="img/pagination_right.svg">'],
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

    function animateView() {
        anime({
            targets: '.tabs__caption',
            scale: [0, 1]
        });

        anime({
            targets: '.tabs__content',
            translateY: [700, -50],
            duration: 500


        })
    }


    // Works Content


    $('.contribution-carousel').owlCarousel({
        loop: true,
        margin: 0,
        nav: true,
        startPosition: 0,
        navText: ['<img src="img/pagination_left.svg">', '<img src="img/pagination_right.svg">'],
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


