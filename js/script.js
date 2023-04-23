var swiper = new Swiper(".slide-content", {
    slidesPerView: 4,
    spaceBetween: 25,
    loop: true,
    centerSlide: 'true',
    fade: 'true',
    grabCursor: 'true',
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
      dynamicBullets: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },

    breakpoints:{
        0: {
            slidesPerView: 1,
        },
        520: {
            slidesPerView: 2,
        },
        950: {
            slidesPerView: 3,
        },
    },
  });


var slider = document.getElementById('text-wrap');
var active = document.getElementById('active');
var text1 = document.getElementById('text1');
var text2 = document.getElementById('text2');
var text3 = document.getElementById('text3');
var text4 = document.getElementById('text4');
var text5 = document.getElementById('text5'); 

text1.onclick = function(){
    slider.style.transform = 'translateY(0)';
    active.style.top = '5px';
}
text2.onclick = function(){
    slider.style.transform = 'translateY(-20.7%)';
    active.style.top = '71px';
}
text3.onclick = function(){
    slider.style.transform = 'translateY(-41.4%)';
    active.style.top = '137px';
}
text4.onclick = function(){
    slider.style.transform = 'translateY(-61.9%)';
    active.style.top = '202px';
}
text5.onclick = function(){
    slider.style.transform = 'translateY(-82.6%)';
    active.style.top = '268px';
}

var lastScrollTop = 0;
            navbar = document.getElementById("header")
        window.addEventListener("scroll", function(){
            var scrollTop = window.pageYOffset || document
                .documentElement.scrollTop;
            if (scrollTop > lastScrollTop){
                navbar.style.top="-80px";
            } else {
                navbar.style.top="0";
            }
            lastScrollTop = scrollTop;
        });


var typed = new Typed(".service-type", {
    strings: ["Beginner Front-end Developer"],
    typeSpeed: 100,
    backSpeed: 100,
    loop: true,
});
