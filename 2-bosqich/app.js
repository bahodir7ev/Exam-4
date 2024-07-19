var swiper = new Swiper(".mySwiper", {
    spaceBetween: 30,
    effect: "fade",
    loop: true,
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
});

const wrapper = document.querySelector('.wrapper')
const prevButton = document.querySelector('.swiper-button-prev')
const nextButton = document.querySelector('.swiper-button-next')

wrapper.addEventListener('mouseenter', function () {
    prevButton.style.transform = 'translateX(7%)';
    nextButton.style.transform = 'translateX(-7%)'
})

wrapper.addEventListener('mouseleave', function () {
    prevButton.style.transform = 'translateX(-70%)';
    nextButton.style.transform = 'translateX(70%)'
})