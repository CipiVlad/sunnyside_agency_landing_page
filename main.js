const hamburger = document.getElementById('hamburger')
let menu = document.getElementById('menu')

window.onload = () => {
    menu.style.display = 'none'
}

hamburger.addEventListener('click', () => {

    if (menu.style.display === 'none') {
        menu.style.display = 'block'
    } else {
        menu.style.display = 'none'
    }

})
