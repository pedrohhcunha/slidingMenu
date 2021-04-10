const controller = document.querySelector(".controller")
const menu = document.querySelector(".area-menu")

controller.addEventListener('click', () => {
    menu.classList.toggle('active')
})