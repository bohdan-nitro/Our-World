$(document).ready(function () {

    let headerNavigationSelector = '.header .header-navigation';
    let headerBurgerBtnSelector = '.header .header-burger-btn';
    let headerLink = ".header .intro-nav-link";

    //  Burger btn click
    $(headerBurgerBtnSelector).on('click', function () {

        $(headerNavigationSelector).toggleClass('active').fadeIn(300);

        $(headerLink).on("click", function () {
            $(headerNavigationSelector).removeClass("active");
        });

    });

    //Animation configuration


    const animItems = document.querySelectorAll("._anim-items");

    if (animItems.length > 0) {
        window.addEventListener("scroll", animOnScroll);
        function animOnScroll() {
            for (let index = 0; index < animItems.length; index++) {
                const animItem = animItems[index];
                const animItemHeight = animItem.offsetHeight;
                const animItemOffset = offset(animItem).top;
                const animStart = 4;

                let animItemPoint = window.innerHeight - animItemHeight / animStart;

                if (animItemHeight > window.innerHeight) {
                    animItemPoint = window.innerHeight - window.innerHeight/ animStart;
                }

                if ((pageXOffset > animItemOffset - animItemPoint) && pageYOffset < (animItemOffset + animItemHeight)) {
                    animItem.classList.add("_active");
                } else  {
                    if (!animItem.classList.contains("_anim-no-hide")) {
                        animItem.classList.remove("_active");
                    }
                }

            }
        }

        function offset(el) {
            const rect = el.getBoundingClientRect(),
                scrollLeft = window.pageXOffset || document.documentElement.scrollLeft,
                scrollTop = window.pageYOffset || document.documentElement.scrollTop;
            return {top: rect.top + scrollTop, left: rect.left + scrollLeft}
        }
        setTimeout(() => {

        }, 300);
        animOnScroll();
    }






    /////////////////////////////////////////////////////////


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
        $('body, html').animate({scrollTop: 0}, 800);
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

    //
    // let animation = anime({
    //     targets: '.hero',
    //     translateX: -5,
    //     autoplay: true,
    //     opacity: [0, 1],
    //     easing: 'easeOutExpo',
    //     duration: 2000,
    //     delay: 600
    //
    //
    // });
    //
    // let textAnime = anime({
    //     targets: '.offer-count',
    //     translateX: 5,
    //     autoplay: true,
    //     opacity: [0, 1],
    //     duration: 2000,
    //     easing: 'easeOutExpo',
    //     delay: 300
    //
    // });


});



