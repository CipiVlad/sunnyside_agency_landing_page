const hamburger = document.getElementById('hamburger')
let menu = document.getElementById('menu')

// only show menu on mobile
window.onload = () => {
    if (window.innerWidth < 430) {
        menu.style.display = 'none'
    }
}

// toggle menu
hamburger.addEventListener('click', () => {

    if (menu.style.display === 'none') {
        menu.style.display = 'block'
    } else {
        menu.style.display = 'none'
    }

})

