document.addEventListener("DOMContentLoaded", () => {
    const menuOpen = document.querySelector(".menu-toggle")
    const menuClose = document.querySelector(".menu-close")
    const menu = document.querySelector(".menu")
    
    if(!menuOpen || !menuClose || !menu) return

    menuOpen.addEventListener("click", () => {
        menu.classList.add("is-active")
    })

    menuClose.addEventListener("click", () => {
        menu.classList.remove("is-active")
    })

    document.addEventListener("click", (e) => {
        if(!menu.contains(e.target) && !e.target.matches(".menu-toggle")) {
            menu.classList.remove("is-active")
        }
    })
})