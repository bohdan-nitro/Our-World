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


    //Метод и Свойство

    // const person1 = {
    //     name: "Maxim",
    //     family: "Daun",
    //     age: 35,

    //   SayHello() {
    //       console.log("ПРивет я ", this.name, this.family,"мне", this.age, "лут")
    // }


    // };
    //Метод и свойство

    //Конструктор Прототипов

    // function Person(name, family, age) {
    //
    //     this.name = name;
    //     this.family = family;
    //     this.age = age
    //
    //     Person.prototype.sayHello = function sayHello () {
    //
    //         console.log('Hello mynoobs im am',this.name, this.family,"im", this.age)
    //
    //     }
    //
    // }
    //
    // const person = new Person("alex", "Morales", 35);
    // const person2 = new Person("jopas", "Sosales", 35);
    //
    //
    // person.sayHello()
    // person2.sayHello()

//    Конструктор прототипов


    //Конструктор классами
//
//     class Person {
//         constructor (name, family, age) {
//             this.name = name;
//             this.family = family;
//             this.age = age
//         }
//         sayHello () {
//             console.log('Hello mynoobs im am',this.name, this.family,"im", this.age)
//         }
//     }
//     const person1 = new Person("Alex" , "Downtownitus" , 25);
//     person1.sayHello();
// //    Новый вид Конуструкторов(Клаас)
//
//
//
//     class Animal {
//         constructor (name)   {
//             this.name = name;
//             this.sound = ""
//         }
//         voice ()    {
//             console.log(this.sound)
//         }
//     }
//
//     class Dog extends Animal    {
//         constructor(name)   {
//             super(name);
//             this.sound = "Gav"
//         }
//     }
//     class Cat extends Animal    {
//         constructor(name)   {
//             super(name)
//             this.sound = "naxuyaaaaaa"
//         }
//     }
//     const dog = new Dog("Bubit");
//     const cat = new Cat("Rozbiynik");
//     cat.voice();
//     dog.voice();
//
//
// let selectAllButton = document.getElementById('test');
//     selectAllButton.addEventListener("click", () => {
//         console.log('fired')
//     });
//
//
//
//     //    Код для смены класса на active в меню
//
//
//     let introMenu = document.getElementById("menu");
//     let link = introMenu.getElementsByClassName("intro-nav-link");
//     for (let i = 0; i <link.length; i++)   {
//         link[i].addEventListener("click", function () {
//             let current = document.getElementsByClassName("active");
//             current[0].className = current[0].className.replace(" active", "");
//             this.className += " active";
//
//         });
//     }
// //    Код для смены класса на active в меню
//
// let arr = [{id:1, name:"Johny"}, {id:2, name:"Cage"}];
//     arr.forEach(function (item) {
//         console.log(`Id: ${item.id}, name: ${item.name}`);
//     });
//
// //    Foreach для масивов и обьектов
// //
// //
//     const data = [7, 25, 15, 5];
// //
// //     const value1 = data.some(i => i > 10);
// //     const value2 = data.some(i => i < 3);
// //
// //     console.log(value1);
// //     console.log(value2);
// //
// // Метод Some
//
//     const value3 = data.every(i => i > 10);
//     const value4 = data.every(i => i > 3);
//
//     console.log(value3);
//     console.log(value4);
//
//     const users = [
//         {id: 1, name:"Don", isAdmin: true},
//         {id: 2, name: "lox", isAdmin: false},
//         {id: 3, name:"fargo", isAdmin: true}
//     ];
//
//     const filtered = users.filter(item => item.isAdmin == true);
//     console.log(filtered);
//
//
//     let mainData = ['fits', 'sec', 'six'];
//     let mainUsers = [
//         {id: 1, name:"Xuma", isAdmin: true},
//         {id: 2, name: "Ssser", isAdmin: false},
//         {id: 3, name:"fartux", isAdmin: true}
//     ];
//
//     for (let i in mainUsers[0]) {
//         console.log(i)
//     }

//    метод in


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


