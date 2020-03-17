let thumbImg = document.querySelectorAll('.thumb-img .pic img');
let showImg = document.querySelector('.show-img .pic img')

thumbImg.forEach((item) => {
    item.addEventListener('click', (ev) => {
        showImg.src = ev.target.src
    })
})
