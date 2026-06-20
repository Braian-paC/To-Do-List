const button = document.getElementById("arrow_button_home")

button.addEventListener("click", () => {
    scrollDown()
})

function scrollDown() {
    window.scroll(0, window.scrollY + 1080)
}