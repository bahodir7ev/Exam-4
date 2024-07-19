const searchBtn = document.querySelector('.navigation-btn-search');
const runBtn = document.querySelector('.navigation-btn-run');
const modalBg = document.querySelector('.modal-bg');
const modal = document.querySelector('.modal')
const hideBtn = document.querySelector('.modal-btn')
const text = document.querySelector('.modal-text')


searchBtn.addEventListener('click', function () {
    modalBg.classList.add('open');
    modal.classList.add('open')
})

runBtn.addEventListener('click', function () {
    modalBg.classList.add('open');
    modal.classList.add('open');
    text.innerText = "Please don't run!"
    hideBtn.innerText = 'Close'
})

hideBtn.addEventListener('click', function () {
    if(modal.classList.contains('open') || modalBg.classList.contains('open')) {
        modalBg.classList.remove('open')
        modal.classList.remove('open')
    }
})

modalBg.addEventListener('click', function () {
    if(modal.classList.contains('open')) {
        modal.classList.remove('open')
        modalBg.classList.remove('open')
    }
})