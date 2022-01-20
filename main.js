const navbar = document.querySelector(".navbar")
let scrolled = false


window.onscroll = () => {
    if (window.scrollY > 100) {
        navbar.classList.remove("top")
        if (!scrolled) {
            navbar.style.transform = 'translateY(-70px)'
        }
        setTimeout(() => {
            navbar.style.transform = 'translateY(0)'
            scrolled = true
        }, 200)
    } else {
        navbar.classList.add('top')
        scrolled = false
    }
}